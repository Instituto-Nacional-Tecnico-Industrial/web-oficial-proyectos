/* INTIWO S2 | mismo hueco que Editar S1 | Personalizar / Evaluar | S2N-01b */
(function () {
  function rolActual() {
    if (typeof window.intiwoObtenerRol === "function") return window.intiwoObtenerRol();
    var fuentes = [
      document.body && document.body.dataset && document.body.dataset.rol,
      window.INTIWO_ROL,
      window.__INTIWO_ROL__,
      sessionStorage.getItem("intiwo-rol"),
      localStorage.getItem("intiwo-rol")
    ];
    var valor = fuentes.find(function (v) { return typeof v === "string" && v.trim(); });
    return valor ? String(valor).trim().toLowerCase() : "";
  }

  function urlRelativa(rel) {
    try {
      return new URL(rel, window.location.href).href;
    } catch (e) {
      return rel;
    }
  }

  function aplicar() {
    var boton = document.getElementById("intiwo-accion-rol");
    if (!boton) return;
    var texto = boton.querySelector("[data-intiwo-accion-rol-texto]");
    var icono = boton.querySelector("[data-intiwo-accion-rol-icono]");
    var rol = rolActual();

    boton.hidden = true;
    boton.removeAttribute("href");
    if (texto) texto.textContent = "";
    if (icono) {
      icono.setAttribute("href", "#i-pencil");
      if (icono.href && icono.href.baseVal !== undefined) icono.href.baseVal = "#i-pencil";
    }

    if (rol === "editor") {
      boton.hidden = false;
      var params = new URLSearchParams(window.location.search);
      var enFicha = window.location.pathname.endsWith("/pagina-ficha-proyecto.html");
      var dest;
      if (rol === "editor" && enFicha && params.get("previsualizar") === "1") {
        if (texto) texto.textContent = "Volver al editor";
        params.delete("previsualizar");
        params.set("modo", "personalizar");
        dest = window.location.pathname + "?" + params.toString();
      } else if (rol === "editor" && enFicha && params.get("modo") === "personalizar") {
        if (texto) texto.textContent = "Previsualizar";
        params.set("previsualizar", "1");
        dest = window.location.pathname + "?" + params.toString();
      } else if (rol === "editor" && enFicha) {
        if (texto) texto.textContent = "Agregar";
        params.set("modo", "personalizar");
        dest = window.location.pathname + "?" + params.toString();
      } else if (rol === "editor") {
        if (texto) texto.textContent = "Agregar";
        dest = "../proyectos/pagina-proyectos-editor.html";
      }
      boton.setAttribute("href", urlRelativa(dest));
      boton.setAttribute("aria-label", texto ? texto.textContent : "Agregar");
      return;
    }

    if (rol === "academico") {
      boton.hidden = false;
      if (texto) texto.textContent = "Mis proyectos";
      if (icono) {
        icono.setAttribute("href", "#i-folder");
        if (icono.href && icono.href.baseVal !== undefined) icono.href.baseVal = "#i-folder";
      }
      boton.setAttribute("href", urlRelativa("../evaluar/pagina-evaluar-codigos-docente.html"));
      boton.setAttribute("aria-label", "Gestionar mis proyectos académicos");
      return;
    }

    if (rol === "docente" || rol === "administrador" || rol === "admin") {
      boton.hidden = false;
      if (texto) texto.textContent = "Evaluar";
      if (icono) {
        icono.setAttribute("href", "#i-clipboard");
        if (icono.href && icono.href.baseVal !== undefined) icono.href.baseVal = "#i-clipboard";
      }
      boton.setAttribute("href", urlRelativa("../evaluar/pagina-evaluar-codigos-docente.html"));
      boton.setAttribute("aria-label", "Evaluar proyectos");
    }
  }

  function iniciar() {
    aplicar();
    window.addEventListener("storage", aplicar);
    window.addEventListener("intiwo:auth-state-changed", aplicar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar, { once: true });
  } else {
    iniciar();
  }
})();
