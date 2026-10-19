import { cargarNombresEspecialidad } from "./especialidades-ciclo.js";

const params = new URLSearchParams(window.location.search);
const rama = params.get("rama");
const year = Number(params.get("anio"));
const meta = window.INTIWO_RAMAS?.[rama];

if (rama && meta && Number.isInteger(year)) {
  const heading = document.getElementById("intiwo-listado-clave");
  const context = document.getElementById("intiwo-listado-contexto");
  try {
    const rows = await cargarNombresEspecialidad(year);
    const specialty = rows.find((row) => row.especialidad.prefijo === meta.prefijo);
    if (!specialty) throw new Error(`No hay un nombre histórico para ${meta.prefijo} en ${year}.`);

    if (meta.tipo === "academico" && heading) {
      heading.textContent = specialty.nombre;
      document.title = `${specialty.nombre} | INTIWO`;
    } else if (context) {
      context.textContent = [specialty.nombre, `año lectivo ${year}`].join(" · ");
    }
  } catch (error) {
    console.error("No se pudo cargar el nombre de especialidad del proyecto.", error);
    if (context) {
      context.textContent = `No se pudo cargar el nombre histórico de ${meta.prefijo} para ${year}: ${error.message}`;
    }
  }
}
