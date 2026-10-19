import { supabase } from "../supabase/cliente-supabase.js";

const slug = new URLSearchParams(window.location.search).get("etiqueta");

function setStatus(message) {
  const status = document.getElementById("intiwo-listado-estado");
  if (!status) return;
  status.textContent = message;
  status.hidden = !message;
}

function renderProjects(rows) {
  const list = document.getElementById("intiwo-listado-cajas");
  const empty = document.getElementById("intiwo-listado-vacio");
  if (!list || !empty) return;
  list.replaceChildren();
  empty.hidden = rows.length > 0;

  rows.forEach(({ proyecto }) => {
    if (!proyecto) return;
    const article = document.createElement("article");
    article.className = "intiwo-caja-proyecto";
    const link = document.createElement("a");
    link.href = "../ficha/pagina-ficha-proyecto.html?id=" + encodeURIComponent(proyecto.id) +
      "&tipo=" + encodeURIComponent(proyecto.tipo) +
      "&anio=" + encodeURIComponent(proyecto.anio_lectivo);
    const title = document.createElement("strong");
    title.textContent = proyecto.titulo || "Proyecto";
    const description = document.createElement("p");
    description.textContent = proyecto.descripcion || "";
    const type = document.createElement("p");
    type.textContent = (proyecto.tipo === "academico" ? "Académico" : "Técnico") +
      " · Año lectivo " + proyecto.anio_lectivo;
    link.append(title, description, type);
    article.appendChild(link);
    list.appendChild(article);
  });

  empty.hidden = list.childElementCount > 0;
}

async function loadTagProjects() {
  if (!slug) return;
  const heading = document.getElementById("intiwo-listado-clave");
  const context = document.getElementById("intiwo-listado-contexto");
  const empty = document.getElementById("intiwo-listado-vacio");
  if (heading) {
    heading.textContent = slug.replace(/-/g, " ");
    heading.classList.add("es-etiqueta");
  }
  if (context) context.textContent = "Proyectos públicos y publicados que tienen esta etiqueta.";
  if (empty) empty.textContent = "Aún no hay proyectos publicados y visibles con esta etiqueta.";
  document.title = "Etiqueta | INTIWO";
  setStatus("Cargando proyectos…");

  try {
    if (!supabase) throw new Error("El cliente de Supabase no está configurado.");
    const [tagResult, projectsResult] = await Promise.all([
      supabase.from("etiquetas").select("nombre").eq("slug", slug).maybeSingle(),
      supabase
        .from("proyecto_etiqueta")
        .select("proyecto:proyectos!inner(id,tipo,anio_lectivo,titulo,descripcion),etiqueta:etiquetas!inner(slug)")
        .eq("etiqueta.slug", slug)
    ]);
    if (tagResult.error) throw tagResult.error;
    if (projectsResult.error) throw projectsResult.error;
    if (!tagResult.data) throw new Error("La etiqueta no existe en el catálogo institucional.");

    if (heading) heading.textContent = tagResult.data.nombre;
    document.title = tagResult.data.nombre + " | Proyectos | INTIWO";
    renderProjects(projectsResult.data || []);
    setStatus("");
  } catch (error) {
    console.error("No se pudieron cargar los proyectos de la etiqueta.", error);
    renderProjects([]);
    setStatus("No se pudieron cargar los proyectos. " + error.message);
  }
}

loadTagProjects();
