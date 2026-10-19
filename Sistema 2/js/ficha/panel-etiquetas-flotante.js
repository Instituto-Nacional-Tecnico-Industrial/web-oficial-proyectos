import { supabase } from "../supabase/cliente-supabase.js";

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const families = ["especialidad", "asignatura", "oficio", "salud", "ambiente", "tematica"];
const panelId = "intiwo-panel-etiquetas";
let catalog = [];
let selectedIds = [];
let canManage = false;
let loading = true;
let saving = false;

function setStatus(message, showOnFicha = false) {
  const status = document.getElementById("intiwo-panel-etiquetas-estado");
  if (status) {
    status.textContent = message;
    status.hidden = !message;
  }
  const fichaStatus = document.getElementById("intiwo-ficha-etiquetas-estado");
  if (fichaStatus) {
    fichaStatus.textContent = showOnFicha ? message : "";
    fichaStatus.hidden = !showOnFicha || !message;
  }
}

function ensureMarkup() {
  if (!document.getElementById(panelId)) {
    const panel = document.createElement("div");
    panel.id = panelId;
    panel.className = "intiwo-panel-etiquetas";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "intiwo-panel-etiquetas-titulo");
    panel.innerHTML = '<div class="intiwo-panel-etiquetas-cabeza"><h2 id="intiwo-panel-etiquetas-titulo">Etiquetas</h2><button type="button" class="intiwo-btn-icono" data-cerrar-etiquetas aria-label="Cerrar etiquetas">×</button></div>' +
      '<p class="intiwo-panel-etiquetas-ayuda">Selecciona etiquetas del catálogo institucional. El clic en una etiqueta pública muestra los proyectos visibles que la usan.</p>' +
      '<label class="intiwo-panel-etiquetas-busca" for="intiwo-panel-etiquetas-q">Buscar</label><input id="intiwo-panel-etiquetas-q" type="search" autocomplete="off" placeholder="Busca una etiqueta">' +
      '<p id="intiwo-panel-etiquetas-estado" role="status" aria-live="polite" hidden></p><div id="intiwo-panel-etiquetas-lista" class="intiwo-panel-etiquetas-lista"></div>';
    document.body.appendChild(panel);
  }

  if (!document.getElementById("intiwo-panel-etiquetas-velo")) {
    const overlay = document.createElement("div");
    overlay.id = "intiwo-panel-etiquetas-velo";
    overlay.className = "intiwo-panel-etiquetas-velo";
    overlay.hidden = true;
    document.body.appendChild(overlay);
  }
}

function renderChips() {
  const byId = new Map(catalog.map((item) => [item.id, item]));
  ["intiwo-ficha-etiquetas", "intiwo-ficha-etiquetas-lectura"].forEach((id) => {
    const list = document.getElementById(id);
    if (!list) return;
    list.replaceChildren();
    selectedIds.forEach((tagId) => {
      const tag = byId.get(tagId);
      if (!tag) return;
      const link = document.createElement("a");
      link.className = "intiwo-ficha-chip";
      link.href = "../listado/pagina-listado-proyectos-codigo.html?etiqueta=" + encodeURIComponent(tag.slug);
      link.textContent = tag.nombre;
      list.appendChild(link);
    });
  });
}

function filteredCatalog(query) {
  if (!query) return catalog;
  if (typeof window.intiwoFuzzyOrdenar === "function") {
    return window.intiwoFuzzyOrdenar(query, catalog)
      .filter((result) => result.pts >= 55)
      .map((result) => result.item);
  }
  const normalized = query.toLocaleLowerCase();
  return catalog.filter((tag) =>
    tag.nombre.toLocaleLowerCase().includes(normalized) || tag.slug.includes(normalized)
  );
}

function renderList(query = "") {
  const list = document.getElementById("intiwo-panel-etiquetas-lista");
  if (!list) return;
  list.replaceChildren();
  const available = filteredCatalog(query);

  families.forEach((family) => {
    const tags = available.filter((tag) => tag.familia === family);
    if (!tags.length) return;
    const heading = document.createElement("p");
    heading.className = "intiwo-panel-etiquetas-fam";
    heading.textContent = family;
    list.appendChild(heading);

    tags.forEach((tag) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "intiwo-ficha-chip";
      button.textContent = tag.nombre;
      button.disabled = loading || saving || !canManage;
      if (selectedIds.includes(tag.id)) button.classList.add("es-activa");
      button.addEventListener("click", () => toggleTag(tag));
      list.appendChild(button);
    });
  });
}

async function toggleTag(tag) {
  if (!canManage || loading || saving) return;
  const next = selectedIds.includes(tag.id)
    ? selectedIds.filter((id) => id !== tag.id)
    : [...selectedIds, tag.id];

  saving = true;
  setStatus("Guardando etiquetas…");
  renderList(document.getElementById("intiwo-panel-etiquetas-q")?.value || "");
  try {
    const { error } = await supabase.rpc("intiwo_gestionar_etiquetas_proyecto", {
      p_proyecto_id: projectId,
      p_etiqueta_ids: next
    });
    if (error) throw error;
    selectedIds = next;
    renderChips();
    setStatus("Etiquetas guardadas.");
  } catch (error) {
    console.error("No se pudieron guardar las etiquetas del proyecto.", error);
    setStatus("No se pudieron guardar las etiquetas. " + error.message);
  } finally {
    saving = false;
    renderList(document.getElementById("intiwo-panel-etiquetas-q")?.value || "");
  }
}

async function loadProjectTags() {
  if (!supabase) throw new Error("El cliente de Supabase no está configurado.");
  if (!projectId) throw new Error("No se indicó el proyecto cuya etiqueta se va a editar.");

  const [catalogResult, selectedResult, userResult] = await Promise.all([
    supabase.from("etiquetas").select("id,slug,nombre,familia").order("familia").order("nombre"),
    supabase.from("proyecto_etiqueta").select("etiqueta_id").eq("proyecto_id", projectId),
    supabase.auth.getUser()
  ]);
  if (catalogResult.error) throw catalogResult.error;
  if (selectedResult.error) throw selectedResult.error;
  if (userResult.error) throw userResult.error;

  catalog = catalogResult.data || [];
  selectedIds = (selectedResult.data || []).map((row) => row.etiqueta_id);

  if (userResult.data.user) {
    const { data, error } = await supabase.rpc("intiwo_puede_gestionar_etiquetas", {
      p_proyecto_id: projectId
    });
    if (error) throw error;
    canManage = data === true;
  }

  renderChips();
  if (!canManage) {
    setStatus(userResult.data.user
      ? "Tu cuenta puede consultar estas etiquetas, pero no modificarlas."
      : "Inicia sesión con una cuenta autorizada para modificar las etiquetas.");
  } else {
    setStatus("");
  }
}

function openPanel() {
  document.getElementById(panelId).hidden = false;
  document.getElementById("intiwo-panel-etiquetas-velo").hidden = false;
  renderList("");
  document.getElementById("intiwo-panel-etiquetas-q")?.focus();
}

function closePanel() {
  document.getElementById(panelId).hidden = true;
  document.getElementById("intiwo-panel-etiquetas-velo").hidden = true;
}

async function init() {
  const card = document.getElementById("intiwo-ficha");
  if (!card || !projectId) return;

  ensureMarkup();
  const button = document.getElementById("intiwo-abrir-etiquetas");
  if (button) {
    button.hidden = true;
    button.addEventListener("click", openPanel);
  }
  document.addEventListener("click", (event) => {
    if (event.target?.closest?.("[data-cerrar-etiquetas]") || event.target?.id === "intiwo-panel-etiquetas-velo") {
      closePanel();
    }
  });
  document.getElementById("intiwo-panel-etiquetas-q").addEventListener("input", (event) => {
    renderList(event.target.value);
  });

  try {
    await loadProjectTags();
    if (button) button.hidden = !canManage;
  } catch (error) {
    console.error("No se pudieron cargar las etiquetas del proyecto.", error);
    setStatus("No se pudieron cargar las etiquetas. " + error.message, true);
  } finally {
    loading = false;
    renderList();
  }
}

init();
