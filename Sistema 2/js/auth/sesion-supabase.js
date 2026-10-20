/* INTIWO S2 | copia de S1/js/auth/sesion-supabase.js */
import { supabase } from "../supabase/cliente-supabase.js";

const CLAVE_ROL = "intiwo-rol";

function publicarRol(rol, perfil) {
  const valor = rol ? String(rol).trim().toLowerCase() : "";
  if (valor) {
    localStorage.setItem(CLAVE_ROL, valor);
    sessionStorage.setItem(CLAVE_ROL, valor);
    if (document.body) document.body.dataset.rol = valor;
    window.INTIWO_ROL = valor;
  } else {
    localStorage.removeItem(CLAVE_ROL);
    sessionStorage.removeItem(CLAVE_ROL);
    if (document.body) delete document.body.dataset.rol;
    delete window.INTIWO_ROL;
  }
  window.INTIWO_PERFIL = perfil || null;
  window.dispatchEvent(new CustomEvent("intiwo:auth-state-changed", { detail: { rol: valor || null, perfil } }));
}

async function cargarPerfil(userId) {
  if (!supabase || !userId) return null;
  const { data, error } = await supabase
    .from("perfiles")
    .select("id, rol, nombre, tema, desactivado_en")
    .eq("id", userId)
    .maybeSingle();
  if (error) {
    console.warn("[INTIWO Auth] No se pudo leer perfiles.", error.message);
    return null;
  }
  if (!data || data.desactivado_en) return null;
  return data;
}

async function sincronizar() {
  if (!supabase) {
    publicarRol("", null);
    return;
  }
  const { data: sesionData } = await supabase.auth.getSession();
  const user = sesionData && sesionData.session ? sesionData.session.user : null;
  if (!user) {
    publicarRol("", null);
    return;
  }
  const perfil = await cargarPerfil(user.id);
  publicarRol(perfil ? perfil.rol : "", perfil);
}

supabase && supabase.auth.onAuthStateChange(() => {
  sincronizar();
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", sincronizar, { once: true });
} else {
  sincronizar();
}
