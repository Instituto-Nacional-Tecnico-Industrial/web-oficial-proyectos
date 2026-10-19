/* INTIWO S2 | copia de Sistema 1/js/cms/cargar-footer-cms.js | SH-06b/c */
import { supabase } from "../supabase/cliente-supabase.js";

const FALLBACK = {
  whatsapp_principal: "+503 7441-1075",
  whatsapp_alterno: "+503 6674-3159",
  email: "",
  facebook_url: "https://www.facebook.com/tecnicosinti/?locale=es_LA",
  instagram_url: "https://www.instagram.com/inti.edu.sv/",
  tiktok_url: "https://www.tiktok.com/@inti.edu.sv",
};

function digitosWa(tel) {
  const d = String(tel || "").replace(/\D/g, "");
  if (d.startsWith("503") && d.length >= 11) return d.slice(0, 11);
  if (d.length === 8) return "503" + d;
  return d;
}

function etiquetaWa(tel) {
  const local = digitosWa(tel).replace(/^503/, "");
  if (local.length === 8) return local.slice(0, 4) + "-" + local.slice(4);
  return String(tel || "").trim();
}

function hrefWa(tel) {
  const d = digitosWa(tel);
  return d ? "https://wa.me/" + d : "#";
}

function urlHttps(valor, respaldo) {
  const t = String(valor || "").trim();
  if (/^https:\/\//i.test(t)) return t;
  return respaldo;
}

function ponerWa(ancla, tel) {
  if (!ancla) return;
  ancla.setAttribute("href", hrefWa(tel));
  const icono = ancla.querySelector(".intiwo-wa-icono");
  const copia = icono ? icono.cloneNode(true) : null;
  ancla.replaceChildren();
  if (copia) ancla.appendChild(copia);
  ancla.appendChild(document.createTextNode(" " + etiquetaWa(tel)));
}

function pintarPie(datos) {
  const contactos = document.querySelector(".intiwo-pie-llamanos");
  if (contactos) {
    const correoExistente = contactos.querySelector("[data-footer-email]");
    if (datos.email) {
      const correo = correoExistente || document.createElement("a");
      correo.setAttribute("data-footer-email", "");
      correo.setAttribute("href", "mailto:" + datos.email);
      correo.textContent = datos.email;
      if (!correoExistente) contactos.appendChild(correo);
    } else if (correoExistente) {
      correoExistente.remove();
    }
  }
  const redes = document.querySelector(".intiwo-pie-redes");
  if (redes) {
    const fb = redes.querySelector('[aria-label="Facebook"]');
    const ig = redes.querySelector('[aria-label="Instagram"]');
    const tt = redes.querySelector('[aria-label="TikTok"]');
    if (fb) fb.setAttribute("href", datos.facebook_url);
    if (ig) ig.setAttribute("href", datos.instagram_url);
    if (tt) tt.setAttribute("href", datos.tiktok_url);
  }
  const llamarnos = document.querySelectorAll(".intiwo-pie-llamanos a.intiwo-wa");
  ponerWa(llamarnos[0], datos.whatsapp_principal);
  if (llamarnos[1]) {
    ponerWa(llamarnos[1], datos.whatsapp_alterno);
  } else if (llamarnos[0] && datos.whatsapp_alterno) {
    const caja = document.querySelector(".intiwo-pie-llamanos");
    if (caja) {
      const clon = llamarnos[0].cloneNode(true);
      ponerWa(clon, datos.whatsapp_alterno);
      caja.appendChild(clon);
    }
  }
}

async function leerFila() {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("footer_cms")
    .select("whatsapp_principal, whatsapp_alterno, email, facebook_url, instagram_url, tiktok_url")
    .eq("id", 1)
    .maybeSingle();
  if (error) {
    console.error("No se pudieron leer los datos de footer_cms:", error);
    return null;
  }
  if (!data) return null;
  return {
    whatsapp_principal: data.whatsapp_principal || FALLBACK.whatsapp_principal,
    whatsapp_alterno: data.whatsapp_alterno || FALLBACK.whatsapp_alterno,
    email: data.email || "",
    facebook_url: urlHttps(data.facebook_url, FALLBACK.facebook_url),
    instagram_url: urlHttps(data.instagram_url, FALLBACK.instagram_url),
    tiktok_url: urlHttps(data.tiktok_url, FALLBACK.tiktok_url),
  };
}

async function iniciar() {
  let datos = FALLBACK;
  const fila = await leerFila();
  if (fila) datos = fila;
  pintarPie(datos);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciar, { once: true });
} else {
  iniciar();
}
