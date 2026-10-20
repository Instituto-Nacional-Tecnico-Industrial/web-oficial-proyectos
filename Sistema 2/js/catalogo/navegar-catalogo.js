/* INTIWO S2 | pildora -> filtro (tecnico) o listado (academico) | BACKLOG S2N-02 */
(function () {
  var BASE_PROYECTOS = "https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/";
  var caja = document.getElementById("intiwo-especialidades");
  var lista = document.getElementById("intiwo-lista-especialidades");
  var chevron = document.querySelector("[data-cerrar-catalogo]");
  if (lista && chevron) {
    function colapsar(abierto) {
      lista.classList.toggle("es-colapsada", !abierto);
      chevron.setAttribute("aria-expanded", String(abierto));
      var listaNombre = chevron.getAttribute("data-lista") || "especialidades";
      chevron.setAttribute("aria-label", abierto ? "Ocultar " + listaNombre : "Mostrar " + listaNombre);
    }
    colapsar(true);
    chevron.addEventListener("click", function () {
      colapsar(chevron.getAttribute("aria-expanded") !== "true");
    });
  }

  function anioElegido() {
    var select = document.getElementById("intiwo-ciclo");
    if (select && select.value) return select.value;
    return new URLSearchParams(window.location.search).get("anio") || "";
  }

  document.querySelectorAll("[data-rama]").forEach(function (p) {
    p.addEventListener("click", function () {
      if (caja) {
        caja.querySelectorAll("[data-rama]").forEach(function (n) { n.classList.remove("es-activa"); });
        p.classList.add("es-activa");
      }
      var rama = p.getAttribute("data-rama");
      var meta = window.INTIWO_RAMAS && window.INTIWO_RAMAS[rama];
      if (!meta) return;
      var anio = encodeURIComponent(anioElegido());
      var ramaQ = encodeURIComponent(rama);
      var tipo = encodeURIComponent(meta.tipo);
      if (meta.tipo === "academico") {
        window.location.href = BASE_PROYECTOS + "paginas/listado/pagina-listado-proyectos-codigo.html?tipo=" + tipo + "&rama=" + ramaQ + "&anio=" + anio;
        return;
      }
      window.location.href = BASE_PROYECTOS + "paginas/filtro/pagina-filtro-anio-seccion.html?tipo=" + tipo + "&rama=" + ramaQ + "&anio=" + anio;
    });
  });
})();
