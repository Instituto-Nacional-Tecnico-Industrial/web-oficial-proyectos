/* INTIWO S2 | copia de S1/js/auth/cuentas-sesiones.js */
const CLAVE = "intiwo-sesiones";

export function leerSesiones() {
  try {
    const lista = JSON.parse(localStorage.getItem(CLAVE) || "[]");
    return Array.isArray(lista) ? lista : [];
  } catch (_e) {
    return [];
  }
}

export function guardarLista(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista.slice(0, 8)));
}

export async function recordarSesion(supabase, rol, perfil) {
  if (!supabase) return;
  const { data } = await supabase.auth.getSession();
  const sesion = data && data.session;
  if (!sesion || !sesion.user) return;
  const nombre = perfil && (perfil.nombre || [perfil.nombres, perfil.apellidos].filter(Boolean).join(" "));
  const entrada = {
    id: sesion.user.id,
    email: sesion.user.email,
    rol: rol || "",
    nombre: nombre || "",
    access_token: sesion.access_token,
    refresh_token: sesion.refresh_token
  };
  const lista = leerSesiones().filter((item) => item.id !== entrada.id);
  lista.unshift(entrada);
  guardarLista(lista);
}

export async function cambiarA(supabase, id) {
  const item = leerSesiones().find((fila) => fila.id === id);
  if (!item || !item.refresh_token) return { error: { message: "Esa cuenta no tiene sesion guardada. Inicia sesion de nuevo." } };
  return supabase.auth.setSession({
    access_token: item.access_token,
    refresh_token: item.refresh_token
  });
}

export async function salirDeEsta(supabase) {
  if (!supabase) return;
  const { data } = await supabase.auth.getSession();
  const id = data && data.session && data.session.user ? data.session.user.id : "";
  await supabase.auth.signOut({ scope: "local" });
  if (id) guardarLista(leerSesiones().filter((fila) => fila.id !== id));
}

export function quitarDelNavegador(id) {
  guardarLista(leerSesiones().filter((fila) => fila.id !== id));
}
