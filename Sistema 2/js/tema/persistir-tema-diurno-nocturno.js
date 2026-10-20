/* INTIWO S2 | copia de S1/js/tema/persistir-tema-diurno-nocturno.js | SH-02e */
(function () {
  var CLAVE = "intiwo-tema";

  function normalizar(valor) {
    return valor === "light" || valor === "dark" ? valor : "";
  }

  function temaLocal() {
    return normalizar(localStorage.getItem(CLAVE)) || "dark";
  }

  var tema = temaLocal();

  function actualizarFavicon() {
    var icono = document.querySelector('link[rel~="icon"]');
    if (!icono) return;
    var url = new URL(icono.href, document.baseURI);
    url.pathname = url.pathname.replace(
      /favicon(?:-claro)?\.svg$/,
      tema === "light" ? "favicon-claro.svg" : "favicon.svg"
    );
    icono.href = url.href;
  }

  function pintar() {
    document.documentElement.setAttribute("data-theme", tema);
    actualizarFavicon();
    var boton = document.querySelector("[data-intiwo-tema]");
    if (!boton) return;
    boton.setAttribute("data-estado", tema);
    boton.setAttribute("aria-label", tema === "dark" ? "Cambiar a modo brillo" : "Cambiar a modo nocturno");
    boton.setAttribute("aria-pressed", tema === "light" ? "true" : "false");
  }

  function aplicar(nuevo) {
    var n = normalizar(nuevo);
    if (!n) return;
    tema = n;
    localStorage.setItem(CLAVE, tema);
    pintar();
  }

  function cliente() {
    return window.intiwoSupabase || null;
  }

  async function usuarioId() {
    var sb = cliente();
    if (!sb) return null;
    try {
      var r = await sb.auth.getSession();
      var sesion = r && r.data && r.data.session;
      return sesion && sesion.user ? sesion.user.id : null;
    } catch (e) {
      return null;
    }
  }

  async function leerPerfil() {
    var sb = cliente();
    var id = await usuarioId();
    if (!sb || !id) return;
    try {
      var r = await sb.from("perfiles").select("tema").eq("id", id).maybeSingle();
      if (r.error || !r.data) return;
      aplicar(r.data.tema);
    } catch (e) {
      /* conservar localStorage */
    }
  }

  async function guardarPerfil(valor) {
    var sb = cliente();
    var id = await usuarioId();
    if (!sb || !id) return;
    try {
      await sb.from("perfiles").update({ tema: valor }).eq("id", id);
    } catch (e) {
      /* no bloquear el interruptor */
    }
  }

  aplicar(tema);
  pintar();

  document.addEventListener("click", function (ev) {
    var boton = ev.target.closest("[data-intiwo-tema]");
    if (!boton) return;
    var siguiente = tema === "dark" ? "light" : "dark";
    aplicar(siguiente);
    guardarPerfil(siguiente);
  });

  window.addEventListener("intiwo:auth-state-changed", function (ev) {
    var perfil = ev.detail && ev.detail.perfil;
    if (perfil && normalizar(perfil.tema)) {
      aplicar(perfil.tema);
    }
  });

  var intentos = 0;
  var espera = setInterval(function () {
    intentos += 1;
    if (cliente()) {
      clearInterval(espera);
      leerPerfil();
      cliente().auth.onAuthStateChange(function () {
        leerPerfil();
      });
    } else if (intentos > 40) {
      clearInterval(espera);
    }
  }, 50);
})();
