/* INTIWO | overlay Escape backdrop aria | BACKLOG SH-01 */
(function () {
  var menu = document.getElementById("intiwo-menu");
  var velo = document.getElementById("intiwo-velo");
  var botones = document.querySelectorAll("[data-intiwo-menu]");
  if (!menu || !botones.length) return;
  var boton = botones[0];

  function abierto() {
    return menu.classList.contains("es-abierto");
  }

  function setAbierto(valor) {
    menu.classList.toggle("es-abierto", valor);
    if (velo) velo.classList.toggle("es-abierto", valor);
    boton.setAttribute("aria-expanded", valor ? "true" : "false");
    boton.setAttribute("aria-label", valor ? "Cerrar menu" : "Abrir menu");
    document.body.style.overflow = valor ? "hidden" : "";
  }

  botones.forEach(function (b) {
    b.addEventListener("click", function () {
      setAbierto(!abierto());
    });
  });
  if (velo) velo.addEventListener("click", function () { setAbierto(false); });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") setAbierto(false);
  });

  var actual = document.body.getAttribute("data-seccion-actual") || "";
  menu.querySelectorAll("[data-seccion]").forEach(function (a) {
    if (a.getAttribute("data-seccion") === actual) a.classList.add("es-actual");
  });
})();
