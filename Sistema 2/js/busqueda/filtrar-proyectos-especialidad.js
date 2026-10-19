/* INTIWO S2 | SUPERSEDED 2026-10-13: pildoras ya no viven en el hub (S2N-01a). Conservado por si una pagina antigua lo carga. */
(function () {
  var btn = document.querySelector("[data-abrir-tecnicos]");
  var caja = document.getElementById("intiwo-especialidades");
  var lista = document.getElementById("intiwo-lista-especialidades");
  var chevron = caja && caja.querySelector("[data-cerrar-tecnicos]");
  if (!btn || !caja || !lista || !chevron) return;

  function actualizarDesplegable(abierto) {
    caja.classList.add("es-abierto");
    lista.classList.toggle("es-colapsada", !abierto);
    btn.setAttribute("aria-expanded", String(abierto));
    chevron.setAttribute("aria-expanded", String(abierto));
    chevron.setAttribute("aria-label", abierto ? "Ocultar especialidades" : "Mostrar especialidades");

    var texto = btn.querySelector(".intiwo-desplegable-texto");
    if (texto) texto.textContent = abierto ? "Ver menos" : "Ver más";
  }

  btn.addEventListener("click", function () {
    actualizarDesplegable(btn.getAttribute("aria-expanded") !== "true");
  });

  chevron.addEventListener("click", function () {
    actualizarDesplegable(chevron.getAttribute("aria-expanded") !== "true");
  });

  caja.querySelectorAll(".intiwo-pildora-esp").forEach(function (p) {
    p.addEventListener("click", function () {
      caja.querySelectorAll(".intiwo-pildora-esp").forEach(function (n) { n.classList.remove("es-activa"); });
      p.classList.add("es-activa");
    });
  });
})();
