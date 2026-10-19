import { supabase } from "../supabase/cliente-supabase.js";

const estado = document.getElementById("intiwo-editor-estado");
const lista = document.getElementById("intiwo-editor-proyectos");
const botonActualizar = document.getElementById("intiwo-editor-actualizar");
const estadoActualizacion = document.getElementById("intiwo-editor-actualizacion");
let recargando = false;
let recargaPendiente = false;
let canalAsignaciones;

function mostrarEstado(texto) {
  if (estado) estado.textContent = texto;
}

function mostrarEstadoActualizacion(texto) {
  if (!estadoActualizacion) return;
  estadoActualizacion.textContent = texto;
  estadoActualizacion.hidden = !texto;
}

function fichaHref(proyecto) {
  const params = new URLSearchParams({
    id: proyecto.id,
    tipo: proyecto.tipo,
    anio: String(proyecto.anio_lectivo),
    modo: "ver"
  });
  if (proyecto.codigo && proyecto.codigo.clave) params.set("clave", proyecto.codigo.clave);
  return `../ficha/pagina-ficha-proyecto.html?${params.toString()}`;
}

function pintar(asignaciones) {
  if (!lista) return;
  lista.replaceChildren();
  const proyectos = asignaciones.map(({ proyecto }) => proyecto).filter(Boolean);
  if (!proyectos.length) {
    mostrarEstado("Aún no tienes proyectos asignados. Solicita a tu docente que te asigne uno.");
    return;
  }

  mostrarEstado("");
  proyectos.forEach((proyecto) => {
    const card = document.createElement("article");
    card.className = "intiwo-caja-proyecto";
    const link = document.createElement("a");
    link.href = fichaHref(proyecto);

    const title = document.createElement("strong");
    title.textContent = proyecto.titulo || "Proyecto";
    const description = document.createElement("p");
    description.textContent = proyecto.descripcion || "Aún sin descripción.";
    const meta = document.createElement("p");
    const context = [
      proyecto.codigo && proyecto.codigo.clave,
      proyecto.anio_lectivo ? `Año lectivo ${proyecto.anio_lectivo}` : null
    ].filter(Boolean);
    meta.textContent = context.join(" · ");

    const status = document.createElement("p");
    const labels = [];
    labels.push(proyecto.publicado ? "Público" : "Privado");
    if (proyecto.edicion_bloqueada) labels.push("Edición bloqueada");
    if (proyecto.archivado_en) labels.push("Inactivo");
    else if (!proyecto.edicion_bloqueada) labels.push("Puedes editar");
    status.textContent = labels.join(" · ");

    link.append(title, description, meta);
    card.append(link, status);
    lista.appendChild(card);
  });
}

async function cargarProyectos(editorId) {
  if (recargando) {
    recargaPendiente = true;
    return;
  }
  recargando = true;
  if (botonActualizar) botonActualizar.disabled = true;
  mostrarEstado("Actualizando proyectos…");

  try {
    const { data, error } = await supabase
      .from("proyecto_editores")
      .select("revocado_en, proyecto:proyectos!inner(id,tipo,anio_lectivo,titulo,descripcion,publicado,edicion_bloqueada,archivado_en,codigo:codigos(clave))")
      .eq("editor_id", editorId)
      .is("revocado_en", null)
      .order("asignado_en", { ascending: false });

    if (error) {
      mostrarEstado(`No se pudieron cargar tus proyectos: ${error.message}`);
      return;
    }
    pintar(data || []);
  } finally {
    recargando = false;
    if (botonActualizar) botonActualizar.disabled = false;
    if (recargaPendiente) {
      recargaPendiente = false;
      cargarProyectos(editorId).catch((error) => {
        console.error("[INTIWO Proyectos] Error procesando cambios pendientes.", error);
        mostrarEstado("Ocurrió un error inesperado al actualizar tus proyectos.");
      });
    }
  }
}

function escucharAsignaciones(editorId) {
  canalAsignaciones = supabase
    .channel(`proyectos-editor-${editorId}`)
    .on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "proyecto_editores",
      filter: `editor_id=eq.${editorId}`
    }, () => {
      cargarProyectos(editorId).catch((error) => {
        console.error("[INTIWO Proyectos] Error actualizando asignaciones.", error);
        mostrarEstado("Ocurrió un error inesperado al actualizar tus proyectos.");
      });
    })
    .subscribe((status) => {
      if (status === "SUBSCRIBED") {
        mostrarEstadoActualizacion("");
      } else if (status === "CHANNEL_ERROR" || status === "TIMED_OUT" || status === "CLOSED") {
        mostrarEstadoActualizacion("La actualización automática no está disponible. Usa «Actualizar lista» para ver cambios recientes.");
      }
    });
}

async function iniciar() {
  if (!supabase) {
    mostrarEstado("No se pudo conectar con el servicio de proyectos. Inténtalo más tarde.");
    return;
  }

  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError) {
    mostrarEstado(`No se pudo validar tu sesión: ${authError.message}`);
    return;
  }
  if (!auth.user) {
    mostrarEstado("Inicia sesión con tu cuenta de Editor para ver los proyectos asignados.");
    return;
  }
  const { data: profile, error: profileError } = await supabase
    .from("perfiles")
    .select("rol,desactivado_en")
    .eq("id", auth.user.id)
    .maybeSingle();
  if (profileError) {
    mostrarEstado(`No se pudo validar tu rol: ${profileError.message}`);
    return;
  }
  if (!profile || profile.rol !== "editor" || profile.desactivado_en) {
    mostrarEstado("Esta página está disponible únicamente para Editores activos.");
    return;
  }

  if (botonActualizar) {
    botonActualizar.hidden = false;
    botonActualizar.addEventListener("click", () => {
      cargarProyectos(auth.user.id).catch((error) => {
        console.error("[INTIWO Proyectos] Error actualizando proyectos.", error);
        mostrarEstado("Ocurrió un error inesperado al actualizar tus proyectos.");
      });
    });
  }
  escucharAsignaciones(auth.user.id);
  await cargarProyectos(auth.user.id);

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      cargarProyectos(auth.user.id).catch((error) => {
        console.error("[INTIWO Proyectos] Error actualizando proyectos.", error);
        mostrarEstado("Ocurrió un error inesperado al actualizar tus proyectos.");
      });
    }
  });
  window.addEventListener("pagehide", () => {
    if (canalAsignaciones) supabase.removeChannel(canalAsignaciones);
  }, { once: true });
}

iniciar().catch((error) => {
  console.error("[INTIWO Proyectos] Error cargando proyectos del Editor.", error);
  mostrarEstado("Ocurrió un error inesperado al cargar tus proyectos.");
});
