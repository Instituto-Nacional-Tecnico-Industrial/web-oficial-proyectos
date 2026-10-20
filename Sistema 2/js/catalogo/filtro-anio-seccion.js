/* INTIWO S2 | nivel + seccion de un ciclo ya elegido | BACKLOG S2N-02c */
(function () {
  var BASE_PROYECTOS = "https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/";
  var params = new URLSearchParams(window.location.search);
  var rama = params.get("rama") || "";
  var anio = params.get("anio") || "2026";
  if (!/^\d{4}$/.test(anio) || Number(anio) < 2026) anio = "2026";
  var meta = window.INTIWO_RAMAS && window.INTIWO_RAMAS[rama];
  var titulo = document.getElementById("intiwo-filtro-rama");
  var claveEl = document.getElementById("intiwo-filtro-clave");
  var cicloEl = document.getElementById("intiwo-filtro-ciclo");
  var nivelEl = document.getElementById("intiwo-filtro-nivel");
  var seccionEl = document.getElementById("intiwo-filtro-seccion");
  var ir = document.getElementById("intiwo-filtro-ir");
  var catalogoTecnicos = BASE_PROYECTOS + "paginas/catalogo/pagina-catalogo-tecnicos.html?anio=" + encodeURIComponent(anio);

  if (!meta || meta.tipo !== "tecnico" || !titulo || !claveEl || !nivelEl || !seccionEl || !ir) {
    if (meta && meta.tipo === "academico") {
      window.location.replace(BASE_PROYECTOS + "paginas/listado/pagina-listado-proyectos-codigo.html?tipo=academico&rama=" + encodeURIComponent(rama) + "&anio=" + encodeURIComponent(anio));
      return;
    }
    window.location.replace(catalogoTecnicos);
    return;
  }

  titulo.textContent = meta.etiqueta;
  if (cicloEl) cicloEl.textContent = "Año lectivo " + anio;

  var letra;
  for (letra = 65; letra <= 90; letra += 1) {
    var opt = document.createElement("option");
    opt.value = String.fromCharCode(letra);
    opt.textContent = opt.value;
    seccionEl.appendChild(opt);
  }

  var nivelIni = params.get("nivel");
  var seccionIni = (params.get("seccion") || "").toUpperCase();
  if (nivelIni === "1" || nivelIni === "2" || nivelIni === "3") nivelEl.value = nivelIni;
  if (/^[A-Z]$/.test(seccionIni)) seccionEl.value = seccionIni;

  function refrescar() {
    var clave = window.intiwoConstruirClave(meta.prefijo, nivelEl.value, seccionEl.value);
    claveEl.textContent = clave || "—";
    document.title = (clave || "Código") + " | INTIWO";
    if (!clave) {
      ir.setAttribute("aria-disabled", "true");
      ir.removeAttribute("href");
      return;
    }
    ir.setAttribute("aria-disabled", "false");
    ir.href = BASE_PROYECTOS + "paginas/listado/pagina-listado-proyectos-codigo.html?tipo=tecnico&rama=" + encodeURIComponent(rama) +
      "&anio=" + encodeURIComponent(anio) +
      "&clave=" + encodeURIComponent(clave);
  }

  nivelEl.addEventListener("change", refrescar);
  seccionEl.addEventListener("change", refrescar);
  refrescar();
})();
