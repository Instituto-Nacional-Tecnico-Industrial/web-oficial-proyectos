import { supabase } from "../supabase/cliente-supabase.js";

export async function cargarCiclosLectivos() {
  if (!supabase) throw new Error("El cliente de Supabase no está configurado.");
  const { data, error } = await supabase
    .from("ciclos_lectivos")
    .select("anio,es_actual")
    .order("anio", { ascending: false });
  if (error) throw error;
  if (!data?.length) throw new Error("No hay ciclos lectivos configurados.");
  const current = data.find((cycle) => cycle.es_actual);
  if (!current) throw new Error("No se ha marcado un ciclo lectivo actual.");
  return { ciclos: data, actual: current.anio };
}

export async function cargarNombresEspecialidad(anio) {
  if (!supabase) throw new Error("El cliente de Supabase no está configurado.");
  const year = Number(anio);
  if (!Number.isInteger(year) || year < 2026) {
    throw new Error("Selecciona un ciclo lectivo válido.");
  }
  const { data, error } = await supabase
    .from("especialidad_nombres")
    .select("especialidad_id,anio_lectivo,nombre,nombre_corto,especialidad:especialidades!inner(slug,prefijo,tipo)")
    .eq("anio_lectivo", year)
    .order("nombre");
  if (error) throw error;
  return data || [];
}
