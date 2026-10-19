/* INTIWO S2 | guia Google Fonts para alumnos; valida antes de volver */
(function () {
  var caja = document.getElementById("intiwo-guia-codigo");
  var nota = document.getElementById("intiwo-guia-nota");
  var ir = document.getElementById("intiwo-guia-volver");

  function bloquear(ok, mensaje) {
    if (nota) {
      nota.textContent = mensaje || "";
      nota.classList.toggle("es-ok", !!ok);
      nota.classList.toggle("es-error", !ok && !!mensaje);
    }
    if (ir) {
      ir.disabled = !ok;
      ir.setAttribute("aria-disabled", String(!ok));
    }
  }

  bloquear(false, "");

  if (ir) {
    ir.addEventListener("click", function () {
      if (ir.disabled) return;
      var dest = "pagina-ficha-proyecto.html?modo=personalizar";
      try {
        dest = sessionStorage.getItem("intiwo-ficha-volver") || dest;
      } catch (e) { /* */ }
      window.location.href = dest;
    });
  }

  if (!caja) return;
  caja.addEventListener("input", function () {
    var bruto = String(caja.value || "");
    if (!bruto.trim()) {
      bloquear(false, "");
      return;
    }
    var r = typeof window.intiwoValidarFuente === "function" ? window.intiwoValidarFuente(bruto) : { ok: false, error: "No se pudo revisar el codigo." };
    if (!r.ok) {
      bloquear(false, r.error + " Lee otra vez Sitios seguros.");
      return;
    }
    if (typeof window.intiwoGuardarFuente === "function") window.intiwoGuardarFuente(bruto);
    var nombres = (r.familias || []).join(", ");
    bloquear(true, "Correcto. Encontramos: " + nombres + ". Ya puedes volver a la ficha; la letra aparecera en Tipografia.");
  });
})();
