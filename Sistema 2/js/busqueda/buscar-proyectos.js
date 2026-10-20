/* INTIWO S2 | títulos + etiquetas, debounce 200 ms, aviso PNG, clic global | S2N-01c */
(function () {
  var entrada = document.getElementById("intiwo-q");
  var caja = document.getElementById("intiwo-sugerencias");
  var aviso = document.getElementById("intiwo-sugerencias-aviso");
  var lista = document.getElementById("intiwo-sugerencias-lista");
  if (!entrada || !caja || !lista) return;

  var SIMILARES_PNG = [
    { tipo: "titulo", nombre: "Diseño Grafico", slug: "diseno-grafico" },
    { tipo: "titulo", nombre: "Diseño vectorial", slug: "diseno-vectorial" },
    { tipo: "titulo", nombre: "Diseño Automotriz", slug: "diseno-automotriz" },
    { tipo: "titulo", nombre: "Diseño de diagrama UML", slug: "diseno-uml" }
  ];

  var catalogo = SIMILARES_PNG.concat([
    { tipo: "etiqueta", nombre: "Salud", slug: "salud" },
    { tipo: "etiqueta", nombre: "Ambiente", slug: "ambiente" },
    { tipo: "etiqueta", nombre: "Software", slug: "software" },
    { tipo: "etiqueta", nombre: "Horror", slug: "horror" },
    { tipo: "etiqueta", nombre: "Terror", slug: "terror" },
    { tipo: "etiqueta", nombre: "Halloween", slug: "halloween" },
    { tipo: "etiqueta", nombre: "Mantenimiento Automotriz", slug: "automotriz" },
    { tipo: "etiqueta", nombre: "Mecánica Industrial", slug: "mecanica" },
    { tipo: "etiqueta", nombre: "Sistemas Eléctricos y Energía Renovable", slug: "electricos" },
    { tipo: "etiqueta", nombre: "Electrónica", slug: "electronica" },
    { tipo: "etiqueta", nombre: "Desarrollo de Software", slug: "ds" },
    { tipo: "etiqueta", nombre: "Infraestructura Tecnológica y Servicios Informáticos", slug: "itsi" },
    { tipo: "etiqueta", nombre: "Precálculo", slug: "precalculo" },
    { tipo: "etiqueta", nombre: "Ciudadanía y valores", slug: "ciudadania" },
    { tipo: "etiqueta", nombre: "Ciencias y tecnología", slug: "ciencias" },
    { tipo: "etiqueta", nombre: "Inglés", slug: "ingles" },
    { tipo: "etiqueta", nombre: "Lenguaje y Literatura", slug: "literatura" }
  ]);

  var t = 0;
  var indice = -1;
  var visibles = [];

  function puntuar(q, item) {
    if (typeof window.intiwoFuzzyPuntuacion === "function") {
      return window.intiwoFuzzyPuntuacion(q, item.nombre);
    }
    var n = String(item.nombre || "").toLowerCase();
    return n.indexOf(String(q || "").toLowerCase()) !== -1 ? 80 : 0;
  }

  function cercano(q, item) {
    if (typeof window.intiwoFuzzyEsCercano === "function") {
      return window.intiwoFuzzyEsCercano(q, item.nombre);
    }
    return puntuar(q, item) >= 75;
  }

  function urlListado(params) {
    try {
      var u = new URL("https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/paginas/listado/pagina-listado-proyectos-codigo.html");
      Object.keys(params).forEach(function (k) { u.searchParams.set(k, params[k]); });
      return u.href;
    } catch (e) {
      return "https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/paginas/listado/pagina-listado-proyectos-codigo.html";
    }
  }

  function irA(item) {
    if (item.tipo === "etiqueta") {
      window.location.href = urlListado({ etiqueta: item.slug });
      return;
    }
    window.location.href = urlListado({ q: item.nombre });
  }

  function pintar(items, hayMatch) {
    lista.innerHTML = "";
    indice = -1;
    visibles = items;
    if (!entrada.value.trim()) {
      caja.classList.remove("es-abierto");
      return;
    }
    caja.classList.add("es-abierto");
    if (aviso) aviso.hidden = hayMatch;
    items.forEach(function (item, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "intiwo-sugerencia";
      b.textContent = item.nombre;
      b.setAttribute("data-tipo", item.tipo);
      b.addEventListener("mouseenter", function () {
        lista.querySelectorAll(".intiwo-sugerencia").forEach(function (n) { n.classList.remove("es-activa"); });
        b.classList.add("es-activa");
        indice = i;
      });
      b.addEventListener("click", function () {
        entrada.value = item.nombre;
        irA(item);
      });
      lista.appendChild(b);
    });
  }

  function buscar() {
    var q = entrada.value.trim();
    if (!q) {
      caja.classList.remove("es-abierto");
      return;
    }
    var ranked = catalogo
      .map(function (item) { return { item: item, pts: puntuar(q, item) }; })
      .sort(function (a, b) { return b.pts - a.pts; });
    var matches = ranked.filter(function (r) { return cercano(q, r.item); }).map(function (r) { return r.item; });
    var vistos = {};
    matches = matches.filter(function (item) {
      var k = item.tipo + ":" + item.slug;
      if (vistos[k]) return false;
      vistos[k] = true;
      return true;
    });
    if (matches.length) {
      pintar(matches.slice(0, 8), true);
      return;
    }
    var similares = ranked.filter(function (r) { return r.pts > 0; }).map(function (r) { return r.item; }).slice(0, 4);
    if (!similares.length) similares = SIMILARES_PNG.slice();
    pintar(similares, false);
  }

  function aplicarFiltroUrl() {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get("etiqueta");
    var q = params.get("q");
    if (slug) {
      var etiqueta = catalogo.filter(function (i) { return i.tipo === "etiqueta" && i.slug === slug; })[0];
      var nombre = etiqueta ? etiqueta.nombre : slug;
      entrada.value = nombre;
      var h1 = document.getElementById("intiwo-listado-clave");
      var ctx = document.getElementById("intiwo-listado-contexto");
      var vacio = document.getElementById("intiwo-listado-vacio");
      if (h1) h1.textContent = nombre;
      if (ctx) ctx.textContent = "Todos los proyectos con esta etiqueta. No se filtra por especialidad.";
      if (vacio) {
        vacio.hidden = false;
        vacio.textContent = "Aún no hay cajas publicadas con esta etiqueta.";
      }
    } else if (q) {
      entrada.value = q;
    }
  }

  entrada.addEventListener("input", function () {
    clearTimeout(t);
    t = setTimeout(buscar, 200);
  });

  entrada.addEventListener("focus", function () {
    if (entrada.value.trim()) buscar();
  });

  entrada.addEventListener("keydown", function (ev) {
    if (!caja.classList.contains("es-abierto") || !visibles.length) return;
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      indice = Math.min(indice + 1, visibles.length - 1);
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      indice = Math.max(indice - 1, 0);
    } else if (ev.key === "Enter" && indice >= 0) {
      ev.preventDefault();
      irA(visibles[indice]);
      return;
    } else if (ev.key === "Escape") {
      caja.classList.remove("es-abierto");
      return;
    } else {
      return;
    }
    var botones = lista.querySelectorAll(".intiwo-sugerencia");
    botones.forEach(function (n, i) { n.classList.toggle("es-activa", i === indice); });
  });

  document.addEventListener("click", function (ev) {
    if (!ev.target.closest(".intiwo-busqueda")) caja.classList.remove("es-abierto");
  });

  aplicarFiltroUrl();
  window.addEventListener("load", aplicarFiltroUrl);
})();
