import { supabase } from "../supabase/cliente-supabase.js";
import { cargarCiclosLectivos, cargarNombresEspecialidad } from "./especialidades-ciclo.js";

const select = document.getElementById("intiwo-ciclo");
const status = document.getElementById("intiwo-ciclo-estado");
const currentLabel = document.getElementById("intiwo-ciclo-actual");
const addButton = document.getElementById("intiwo-ciclo-incorporar");
const makeCurrentButton = document.getElementById("intiwo-ciclo-establecer-actual");
const branches = new Map([
  ["MA", "automotriz"], ["MI", "mecanica"], ["SE", "electricos"],
  ["EL", "electronica"], ["DS", "software"], ["IT", "itsi"],
  ["PC", "precalculo"], ["CV", "ciudadania"], ["CT", "ciencias"],
  ["IN", "ingles"], ["LL", "literatura"]
]);
let cycles = [];
let isAdmin = false;
let namesRequest = 0;

function setStatus(message) {
  if (!status) return;
  status.textContent = message;
  status.hidden = !message;
}

function selectedYear() {
  return Number(select?.value || new URLSearchParams(window.location.search).get("anio"));
}

function updateCurrentLabel() {
  const currentYear = cycles.find((cycle) => cycle.es_actual)?.anio;
  if (currentLabel) currentLabel.textContent = currentYear ? `Ciclo actual: ${currentYear}` : "";
  if (makeCurrentButton) makeCurrentButton.hidden = !isAdmin || selectedYear() === currentYear;
}

async function applyNames(year) {
  const requestId = ++namesRequest;
  if (!Number.isInteger(year) || year < 2026) {
    setStatus("Selecciona un ciclo lectivo válido.");
    return;
  }
  setStatus("Cargando nombres para el ciclo seleccionado…");
  try {
    const rows = await cargarNombresEspecialidad(year);
    if (requestId !== namesRequest) return;
    const byPrefix = new Map(rows.map((row) => [row.especialidad.prefijo, row.nombre]));
    let missing = false;
    document.querySelectorAll(".intiwo-pildora-esp[data-rama]").forEach((button) => {
      const rama = button.dataset.rama;
      const prefix = [...branches.entries()].find(([, branch]) => branch === rama)?.[0];
      const name = prefix && byPrefix.get(prefix);
      const label = button.querySelector("span:last-child");
      if (name && label) label.textContent = name;
      else if (prefix) missing = true;
    });
    setStatus(missing
      ? `Faltan nombres guardados para algunas especialidades del ciclo ${year}; se conservan sus nombres base.`
      : "");
  } catch (error) {
    if (requestId !== namesRequest) return;
    console.error("No se pudieron cargar los nombres históricos de especialidad.", error);
    setStatus(`No se pudieron cargar los nombres históricos de especialidad: ${error.message}`);
  }
}

function fillCycles(preferredYear) {
  if (!select) return;
  const requested = Number(preferredYear);
  select.replaceChildren(...cycles.map((cycle) => {
    const option = document.createElement("option");
    option.value = String(cycle.anio);
    option.textContent = String(cycle.anio) + (cycle.es_actual ? " (actual)" : "");
    option.selected = cycle.anio === (cycles.some((item) => item.anio === requested)
      ? requested
      : cycles.find((item) => item.es_actual)?.anio);
    return option;
  }));
  updateCurrentLabel();
}

async function load() {
  const { ciclos, actual } = await cargarCiclosLectivos();
  cycles = ciclos;
  fillCycles(new URLSearchParams(window.location.search).get("anio") || actual);
  await applyNames(selectedYear());
}

async function loadAdminPermission() {
  if (!supabase) return;
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError) throw authError;
  if (!auth.user) return;
  const { data: profile, error } = await supabase
    .from("perfiles")
    .select("rol,desactivado_en")
    .eq("id", auth.user.id)
    .maybeSingle();
  if (error) throw error;
  isAdmin = !!profile && !profile.desactivado_en &&
    ["admin", "administrador"].includes(profile.rol);
}

if (select) {
  document.querySelectorAll(".intiwo-pildora-esp[data-rama]").forEach((button) => {
    button.disabled = true;
  });
  loadAdminPermission()
    .then(load)
    .then(() => {
      if (addButton) addButton.hidden = !isAdmin;
      if (makeCurrentButton) makeCurrentButton.hidden = !isAdmin;
      document.querySelectorAll(".intiwo-pildora-esp[data-rama]").forEach((button) => {
        button.disabled = false;
      });
    })
    .catch((error) => {
      console.error("No se pudieron cargar los ciclos y sus especialidades.", error);
      setStatus(`No se pudieron cargar los ciclos: ${error.message}`);
    });

  select.addEventListener("change", () => {
    updateCurrentLabel();
    applyNames(selectedYear());
  });
}

if (addButton) {
  addButton.addEventListener("click", async () => {
    if (!isAdmin || !cycles.length) return;
    addButton.disabled = true;
    try {
      const nextYear = Math.max(...cycles.map((cycle) => cycle.anio)) + 1;
      const { error } = await supabase.rpc("intiwo_admin_crear_ciclo", { p_anio_lectivo: nextYear });
      if (error) throw error;
      const { ciclos } = await cargarCiclosLectivos();
      cycles = ciclos;
      fillCycles(nextYear);
      if (select) select.value = String(nextYear);
      await applyNames(nextYear);
      setStatus(`Se incorporó el ciclo ${nextYear} heredando los nombres del ciclo anterior.`);
    } catch (error) {
      console.error("No se pudo incorporar el siguiente ciclo lectivo.", error);
      setStatus(`No se pudo incorporar el ciclo: ${error.message}`);
    } finally {
      addButton.disabled = false;
    }
  });
}

if (makeCurrentButton) {
  makeCurrentButton.addEventListener("click", async () => {
    if (!isAdmin || !selectedYear()) return;
    makeCurrentButton.disabled = true;
    try {
      const { error } = await supabase.rpc("intiwo_admin_establecer_ciclo_actual", {
        p_anio_lectivo: selectedYear()
      });
      if (error) throw error;
      cycles = (await cargarCiclosLectivos()).ciclos;
      const chosenYear = Number(select.value);
      fillCycles(chosenYear);
      updateCurrentLabel();
      setStatus(`El ciclo ${selectedYear()} quedó marcado como actual.`);
    } catch (error) {
      console.error("No se pudo cambiar el ciclo actual.", error);
      setStatus(`No se pudo cambiar el ciclo actual: ${error.message}`);
    } finally {
      makeCurrentButton.disabled = false;
    }
  });
}
