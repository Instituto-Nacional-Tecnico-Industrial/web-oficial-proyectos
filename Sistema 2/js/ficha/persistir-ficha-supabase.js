import { supabase } from "../supabase/cliente-supabase.js";
import { cargarNombresEspecialidad } from "../catalogo/especialidades-ciclo.js";

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const editingMode = params.get("modo") === "personalizar";
const previewMode = params.get("previsualizar") === "1";
const card = document.getElementById("intiwo-ficha");
const notice = document.getElementById("intiwo-ficha-aviso");
const autoStatus = document.getElementById("intiwo-ficha-auto");
const title = document.getElementById("intiwo-ficha-titulo");
const meta = document.getElementById("intiwo-ficha-meta");
const bodyView = document.getElementById("intiwo-ficha-cuerpo");
const titleInput = document.getElementById("intiwo-ficha-campo-titulo");
const bodyInput = document.getElementById("intiwo-ficha-campo-cuerpo");
const editorList = document.getElementById("intiwo-ficha-integrantes");
const urlList = document.getElementById("intiwo-ficha-urls-edicion");
const peopleView = document.getElementById("intiwo-ficha-equipo");
const urlView = document.getElementById("intiwo-ficha-urls");
const teacherView = document.getElementById("intiwo-ficha-docente");
const saveButton = document.getElementById("intiwo-ficha-guardar");
const previewLink = document.getElementById("intiwo-ficha-previsualizar");

let ready = false;
let canEdit = false;
let role = "";
let timer = 0;
let queuedData = null;
let saveQueue = Promise.resolve();

function setNotice(message) {
  if (!notice) return;
  notice.hidden = !message;
  notice.textContent = message;
}

function htmlSeguro(html) {
  const container = document.createElement("div");
  container.innerHTML = html || "";
  container.querySelectorAll("script,iframe,object,style").forEach((node) => node.remove());
  container.querySelectorAll("*").forEach((node) => {
    [...node.attributes].forEach((attribute) => {
      if (/^on/i.test(attribute.name) || attribute.name === "src" || (attribute.name === "href" && /^javascript:/i.test(attribute.value))) {
        node.removeAttribute(attribute.name);
      }
    });
  });
  return container.innerHTML;
}

function renderPeople(names) {
  if (!peopleView) return;
  peopleView.replaceChildren();
  const people = (Array.isArray(names) ? names : []).filter(Boolean);
  people.forEach((name) => {
    const item = document.createElement("li");
    item.textContent = name;
    peopleView.appendChild(item);
  });
  if (!people.length) {
    const item = document.createElement("li");
    item.textContent = "Aún sin integrantes.";
    peopleView.appendChild(item);
  }
}

function renderUrls(urls) {
  if (!urlView) return;
  urlView.replaceChildren();
  const values = (Array.isArray(urls) ? urls : []).filter(Boolean);
  values.forEach((value) => {
    const item = document.createElement("li");
    item.className = "intiwo-ficha-url";
    const link = document.createElement("a");
    link.textContent = value;
    if (/^https?:\/\/[^\s]+$/i.test(value)) {
      link.href = value;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    item.appendChild(link);
    urlView.appendChild(item);
  });
  if (!values.length) {
    const item = document.createElement("li");
    item.textContent = "Aún sin enlaces.";
    urlView.appendChild(item);
  }
}

function fillRepeatingInputs(container, selector, values, addButtonId) {
  if (!container) return;
  const addButton = document.getElementById(addButtonId);
  const inputs = () => [...container.querySelectorAll(selector)];
  const rows = [...container.children];
  rows.slice(1).forEach((row) => row.remove());
  const initial = values.length ? values : [""];
  if (inputs()[0]) inputs()[0].value = initial[0];
  initial.slice(1).forEach((value) => {
    if (addButton) addButton.click();
    const current = inputs();
    if (current[current.length - 1]) current[current.length - 1].value = value;
  });
}

function readFields() {
  const titleText = titleInput ? titleInput.value.trim() : "";
  const bodyHtml = bodyInput ? htmlSeguro(bodyInput.innerHTML) : "";
  const description = bodyInput ? bodyInput.innerText.trim().replace(/\s+/g, " ").slice(0, 500) : "";
  const integrantes = editorList
    ? [...editorList.querySelectorAll(".intiwo-integrante-input")].map((input) => input.value.trim()).filter(Boolean)
    : [];
  const urls = urlList
    ? [...urlList.querySelectorAll(".intiwo-url-input")].map((input) => input.value.trim()).filter(Boolean)
    : [];
  return { titulo: titleText, descripcion: description, cuerpo: bodyHtml, integrantes, urls };
}

function queueSave(data) {
  if (!canEdit || !ready) return;
  queuedData = data;
  clearTimeout(timer);
  if (autoStatus) {
    autoStatus.hidden = false;
    autoStatus.textContent = "Guardando cambios en Supabase…";
  }
  timer = window.setTimeout(() => {
    flushSave().catch(() => {});
  }, 450);
}

function flushSave() {
  clearTimeout(timer);
  if (!canEdit || !queuedData) return saveQueue;
  const data = queuedData;
  queuedData = null;
  saveQueue = saveQueue.catch(() => {}).then(async () => {
    const { data: saved, error } = await supabase
      .from("proyectos")
      .update(data)
      .eq("id", projectId)
      .select("id")
      .maybeSingle();
    if (error) throw error;
    if (!saved) throw new Error("Supabase no confirmó la actualización. Verifica que la edición siga habilitada.");
  }).then(() => {
    if (autoStatus) {
      autoStatus.hidden = false;
      autoStatus.textContent = "Guardado automáticamente.";
    }
  }).catch((error) => {
    console.error("[INTIWO Proyectos] Error guardando ficha.", error);
    if (autoStatus) {
      autoStatus.hidden = false;
      autoStatus.textContent = `No se guardaron los cambios: ${error.message}`;
    }
    throw error;
  });
  return saveQueue;
}

async function flushPendingSaves() {
  do {
    clearTimeout(timer);
    if (queuedData) await flushSave();
    else await saveQueue;
  } while (queuedData);
}

function fichaPublicaUrl() {
  const next = new URL(window.location.href);
  next.searchParams.delete("modo");
  next.searchParams.delete("previsualizar");
  return next.href;
}

function fichaEditorUrl() {
  const next = new URL(window.location.href);
  next.searchParams.set("modo", "personalizar");
  next.searchParams.delete("previsualizar");
  return next.href;
}

async function loadProject() {
  if (!projectId) {
    setNotice("Esta ficha no tiene un proyecto asignado.");
    if (card) card.classList.remove("es-edicion");
    return;
  }
  if (!supabase) {
    setNotice("No se pudo conectar con Supabase. No edites hasta recuperar la conexión.");
    if (card) card.classList.remove("es-edicion");
    return;
  }

  const { data: project, error } = await supabase
    .from("proyectos")
    .select("id,tipo,codigo_id,asignatura_id,anio_lectivo,titulo,descripcion,cuerpo,integrantes,urls,publicado,edicion_bloqueada,archivado_en,docente_nombre,codigo:codigos(clave,especialidad_id,especialidad:especialidades!inner(id,slug,nombre)),asignatura:especialidades(id,nombre,slug)")
    .eq("id", projectId)
    .maybeSingle();
  if (error) throw error;
  if (!project) {
    setNotice("Este proyecto no está disponible para tu cuenta o no se ha publicado.");
    if (card) card.classList.remove("es-edicion");
    return;
  }
  const annualNames = await cargarNombresEspecialidad(project.anio_lectivo);
  const annualNamesById = new Map(annualNames.map((row) => [row.especialidad_id, row]));

  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError) throw authError;
  if (auth.user) {
    const { data: profile, error: profileError } = await supabase
      .from("perfiles")
      .select("rol,desactivado_en")
      .eq("id", auth.user.id)
      .maybeSingle();
    if (profileError) throw profileError;
    role = profile && !profile.desactivado_en ? profile.rol : "";
  }
  let assigned = false;
  if (auth.user && role === "editor") {
    const { data: assignment, error: assignmentError } = await supabase
      .from("proyecto_editores")
      .select("proyecto_id")
      .eq("proyecto_id", projectId)
      .eq("editor_id", auth.user.id)
      .is("revocado_en", null)
      .maybeSingle();
    if (assignmentError) throw assignmentError;
    assigned = !!assignment;
  }

  let canManageAcademic = false;
  if (auth.user && project.tipo === "academico" && ["academico", "docente", "administrador"].includes(role)) {
    const { data: permission, error: permissionError } = await supabase.rpc(
      "intiwo_proyecto_puede_gestionar",
      { p_proyecto_id: projectId }
    );
    if (permissionError) throw permissionError;
    canManageAcademic = permission === true;
  }
  canEdit = (role === "editor" && project.tipo === "tecnico" && assigned && !project.edicion_bloqueada && !project.archivado_en)
    || (project.tipo === "academico" && canManageAcademic && !project.archivado_en);
  if (editingMode && !previewMode && !canEdit) {
    if (card) card.classList.remove("es-edicion");
    setNotice(role === "editor"
      ? "No puedes editar este proyecto. Puede que tu docente haya bloqueado la edición o retirado la asignación."
      : "No tienes permiso para editar este proyecto o está inactivo.");
  }

  if (title) title.textContent = project.titulo || "Proyecto";
  document.title = `${project.titulo || "Proyecto"} | INTIWO`;
  if (meta) {
    const subject = Array.isArray(project.asignatura) ? project.asignatura[0] : project.asignatura;
    const code = Array.isArray(project.codigo) ? project.codigo[0] : project.codigo;
    const specialty = Array.isArray(code?.especialidad) ? code.especialidad[0] : code?.especialidad;
    const specialtyId = project.tipo === "academico" ? subject?.id : code?.especialidad_id;
    const annualName = annualNamesById.get(specialtyId)?.nombre;
    const metadata = project.tipo === "academico"
      ? [annualName || subject?.nombre, `Año lectivo ${project.anio_lectivo}`]
      : [code && code.clave, annualName || specialty?.nombre || specialty?.slug, `Año lectivo ${project.anio_lectivo}`];
    meta.textContent = metadata.join(" · ");
    if (!annualName) {
      setNotice(`No hay nombre histórico para esta especialidad en el ciclo ${project.anio_lectivo}; se muestra el nombre base.`);
    }
  }

  if (project.tipo === "academico") {
    const { data: authors, error: authorsError } = await supabase.rpc(
      "intiwo_proyecto_autores_publicos",
      { p_proyecto_id: projectId }
    );
    if (authorsError) throw authorsError;
    const authorsText = (authors || []).map((author) => author.nombre_visible).join(", ");
    if (authorsEl) authorsEl.textContent = authorsText || "Aún sin docentes autores.";
    if (autoresEd) autoresEd.textContent = authorsText || "Aún sin docentes autores.";

    const { data: handWorkCodes, error: handWorkCodesError } = await supabase.rpc(
      "intiwo_proyecto_codigos_mano_obra",
      { p_proyecto_id: projectId }
    );
    if (handWorkCodesError) throw handWorkCodesError;
    const handWorkText = (handWorkCodes || []).map((item) => item.clave).join(", ");
    const handWorkView = document.getElementById("intiwo-ficha-mano");
    const handWorkEditor = document.getElementById("intiwo-ficha-mano-edicion");
    if (handWorkView) handWorkView.textContent = handWorkText || "Sin grupos asignados.";
    if (handWorkEditor) handWorkEditor.textContent = handWorkText || "Asigna los grupos desde «Mis proyectos».";
  }

  const body = htmlSeguro(project.cuerpo || "");
  if (bodyView) {
    bodyView.innerHTML = body || htmlSeguro(project.descripcion || "") || "<p>Aún sin descripción.</p>";
    const section = bodyView.closest(".intiwo-ficha-bloque");
    if (section) section.hidden = false;
  }
  if (teacherView) teacherView.textContent = project.docente_nombre || "Docente pendiente de registrar.";
  if (titleInput) titleInput.value = project.titulo || "";
  if (bodyInput) bodyInput.innerHTML = body || htmlSeguro(project.descripcion || "");
  renderPeople(project.integrantes);
  renderUrls(project.urls);
  [peopleView, urlView].filter(Boolean).forEach((list) => {
    const section = list.closest(".intiwo-ficha-bloque");
    if (section) section.hidden = false;
  });
  const technicalView = document.getElementById("intiwo-ficha-tecnico");
  const academicView = document.getElementById("intiwo-ficha-academico");
  const technicalEditor = document.getElementById("intiwo-ficha-tecnico-edicion");
  const academicEditor = document.getElementById("intiwo-ficha-academico-edicion");
  if (technicalView) technicalView.hidden = project.tipo !== "tecnico";
  if (academicView) academicView.hidden = project.tipo !== "academico";
  if (technicalEditor) technicalEditor.hidden = project.tipo !== "tecnico";
  if (academicEditor) academicEditor.hidden = project.tipo !== "academico";

  if (project.archivado_en) setNotice("Este proyecto está inactivo. Consulta a tu docente si debe reactivarse.");
  else if (!project.publicado && !canEdit && role !== "academico" && role !== "docente" && role !== "administrador" && role !== "admin") {
    setNotice("Este proyecto todavía no está publicado.");
  }

  if (previewLink) {
    const preview = new URL(window.location.href);
    preview.searchParams.set("modo", "personalizar");
    preview.searchParams.set("previsualizar", "1");
    previewLink.href = preview.href;
  }

  if (editingMode && !previewMode && canEdit) {
    fillRepeatingInputs(editorList, ".intiwo-integrante-input", Array.isArray(project.integrantes) ? project.integrantes : [], "intiwo-ficha-mas-integrante");
    fillRepeatingInputs(urlList, ".intiwo-url-input", Array.isArray(project.urls) ? project.urls : [], "intiwo-ficha-mas-url");
    if (card) {
      card.classList.add("es-edicion");
      if (project.tipo === "academico") card.classList.add("es-formal");
      card.querySelectorAll("[data-tb-wrap]").forEach((wrap) => {
        const field = wrap.querySelector("[contenteditable], input");
        if (field && typeof window.intiwoMontarToolbarFicha === "function") {
          window.intiwoMontarToolbarFicha(wrap, field, wrap.getAttribute("data-tb-modo") || "cuerpo");
        }
      });
      card.addEventListener("input", () => queueSave(readFields()));
      [editorList, urlList].filter(Boolean).forEach((list) => {
        list.addEventListener("click", (event) => {
          if (event.target.closest(".intiwo-url-quitar, .intiwo-integrante-quitar")) {
            window.setTimeout(() => queueSave(readFields()), 0);
          }
        });
      });
    }
  } else if (card) {
    card.classList.remove("es-edicion");
  }

  const returnLink = document.getElementById("intiwo-ficha-volver-editor");
  const returnContainer = document.querySelector(".intiwo-ficha-retorno-preview");
  if (returnLink) {
    returnLink.href = fichaEditorUrl();
    returnLink.hidden = !previewMode || !canEdit;
  }
  if (returnContainer) returnContainer.hidden = !previewMode || !canEdit;

  ready = true;
}

window.addEventListener("intiwo:ficha-datos-cambiados", (event) => {
  queueSave(event.detail);
});

window.intiwoGuardarFichaAhora = async () => {
  if (!canEdit) throw new Error("La edición de este proyecto no está habilitada.");
  queuedData = readFields();
  await flushPendingSaves();
};

if (saveButton) {
  saveButton.addEventListener("click", async () => {
    if (!canEdit) return;
    saveButton.disabled = true;
    try {
      await window.intiwoGuardarFichaAhora();
      window.location.assign(fichaPublicaUrl());
    } catch (error) {
      setNotice(`No se pudo guardar el proyecto: ${error.message}`);
    } finally {
      saveButton.disabled = false;
    }
  });
}

if (previewLink) {
  previewLink.addEventListener("click", async (event) => {
    if (!canEdit) return;
    event.preventDefault();
    try {
      await window.intiwoGuardarFichaAhora();
      window.location.assign(previewLink.href);
    } catch (error) {
      setNotice(`No se pudo guardar antes de previsualizar: ${error.message}`);
    }
  });
}

iniciar().catch((error) => {
  console.error("[INTIWO Proyectos] Error cargando ficha.", error);
  setNotice(`No se pudo cargar el proyecto: ${error.message}`);
  if (card) card.classList.remove("es-edicion");
});

async function iniciar() {
  if (saveButton) saveButton.hidden = true;
  if (previewLink) previewLink.hidden = true;
  await loadProject();
  if (saveButton) saveButton.hidden = !(editingMode && !previewMode && canEdit);
  if (previewLink) previewLink.hidden = !(editingMode && !previewMode && canEdit);
}
