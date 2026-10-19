/* INTIWO | cursor negro con borde verde | pointer fine */
(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  var el = document.createElement("div");
  el.className = "intiwo-cursor";
  el.setAttribute("aria-hidden", "true");
  document.body.appendChild(el);
  document.documentElement.classList.add("intiwo-cursor-on");

  var x = 0;
  var y = 0;
  var activo = false;

  function mover(ev) {
    x = ev.clientX;
    y = ev.clientY;
    el.style.transform = "translate(" + (x - 2) + "px," + (y - 2) + "px)";
    var t = ev.target && ev.target.closest
      ? ev.target.closest("a,button,[role='button'],input,label,summary,.intiwo-menu-item,.intiwo-pildora,.intiwo-pildora-esp,.intiwo-sugerencia,.intiwo-btn-icono,.intiwo-red,.intiwo-wa")
      : null;
    var ahora = !!t;
    if (ahora !== activo) {
      activo = ahora;
      el.classList.toggle("es-activo", activo);
    }
  }

  document.addEventListener("mousemove", mover, { passive: true });
  document.addEventListener("focusin", function (ev) {
    if (ev.target.matches("#intiwo-q")) el.classList.add("es-escritura");
  });
  document.addEventListener("focusout", function (ev) {
    if (ev.target.matches("#intiwo-q")) el.classList.remove("es-escritura");
  });
  document.addEventListener("mousedown", function () { el.classList.add("es-clic"); });
  document.addEventListener("mouseup", function () { el.classList.remove("es-clic"); });
  document.addEventListener("mouseleave", function () { el.style.opacity = "0"; });
  document.addEventListener("mouseenter", function () { el.style.opacity = "1"; });
})();
