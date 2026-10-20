/* INTIWO S2 | cajas tecnicas por codigo; academicos por asignatura+ciclo | BACKLOG S2N-02d */
(function () {
  var BASE_PROYECTOS = "https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/";
  var params = new URLSearchParams(window.location.search);
  var tipo = params.get("tipo") || "";
  var clave = (params.get("clave") || "").toUpperCase();
  var anio = params.get("anio") || "2026";
  var rama = params.get("rama") || "";
  var slugEtiqueta = params.get("etiqueta") || "";
  if (!/^\d{4}$/.test(anio) || Number(anio) < 2026) anio = "2026";
  var meta = window.INTIWO_RAMAS && window.INTIWO_RAMAS[rama];
  if (!tipo && meta) tipo = meta.tipo;
  if (!tipo && clave) tipo = "tecnico";

  var encabezado = document.getElementById("intiwo-listado-clave");
  var contexto = document.getElementById("intiwo-listado-contexto");
  var vacio = document.getElementById("intiwo-listado-vacio");
  var lista = document.getElementById("intiwo-listado-cajas");
  var plantillaTec = document.getElementById("intiwo-plantilla-caja-tecnica");
  var plantillaAca = document.getElementById("intiwo-plantilla-caja-academica");
  var etiqueta = meta ? meta.etiqueta : "";

  function fichaHref(id) {
    var q = "id=" + encodeURIComponent(id || "");
    if (tipo) q += "&tipo=" + encodeURIComponent(tipo);
    if (clave) q += "&clave=" + encodeURIComponent(clave);
    if (rama) q += "&rama=" + encodeURIComponent(rama);
    if (anio) q += "&anio=" + encodeURIComponent(anio);
    return BASE_PROYECTOS + "paginas/ficha/pagina-ficha-proyecto.html?" + q;
  }

  function pintarCajas(filas) {
    if (!lista) return;
    lista.innerHTML = "";
    var hay = Array.isArray(filas) && filas.length > 0;
    if (vacio) vacio.hidden = hay;
    if (!hay) return;
    var academico = tipo === "academico";
    var molde = academico ? plantillaAca : plantillaTec;
    if (!molde) return;
    filas.forEach(function (fila) {
      var nodo = molde.content.cloneNode(true);
      var articulo = nodo.querySelector(".intiwo-caja-proyecto");
      var enlace = nodo.querySelector("a");
      var titulo = nodo.querySelector("strong");
      if (enlace) enlace.href = fichaHref(fila.id);
      if (titulo) titulo.textContent = fila.titulo || "Proyecto";
      if (academico) {
        var desc = nodo.querySelector("[data-desc]");
        var doc = nodo.querySelector("[data-docentes]");
        var mano = nodo.querySelector("[data-mano]");
        if (desc) desc.textContent = fila.descripcion || "";
        if (doc) doc.textContent = fila.docentes ? "Docentes: " + fila.docentes : "";
        if (mano) mano.textContent = fila.manoObra ? "Mano de obra: " + fila.manoObra : "";
      } else {
        var p = nodo.querySelector("p");
        if (p) p.textContent = fila.descripcion || "";
      }
      if (articulo) lista.appendChild(nodo);
    });
  }

  window.intiwoPintarCajasProyecto = pintarCajas;

  if (slugEtiqueta) {
    if (encabezado) {
      encabezado.textContent = slugEtiqueta.replace(/-/g, " ");
      encabezado.classList.add("es-etiqueta");
    }
    if (contexto) contexto.textContent = "Todos los proyectos con esta etiqueta. No se filtra por especialidad.";
    document.title = "Etiqueta | INTIWO";
    if (vacio) vacio.textContent = "Aún no hay cajas publicadas con esta etiqueta.";
    pintarCajas([]);
    return;
  }

  if (tipo === "academico") {
    if (encabezado) {
      encabezado.textContent = etiqueta || "Asignatura";
      encabezado.classList.add("es-asignatura");
    }
    if (contexto) {
      contexto.textContent = "Año lectivo " + anio + " · proyectos que conciben los docentes (1.º y 2.º). En 3.º no se cursan estas asignaturas.";
    }
    document.title = (etiqueta || "Asignatura") + " | INTIWO";
    if (vacio) {
      vacio.textContent = "Este ciclo aún no tiene proyectos publicados para esta asignatura. Puede haber cero: lo deciden los docentes (juntos, en grupos o cada uno), no un código de alumno.";
    }
    pintarCajas([]);
    return;
  }

  if (!/^[A-Z]{2}[123][A-Z]$/.test(clave)) {
    var filtro = BASE_PROYECTOS + "paginas/filtro/pagina-filtro-anio-seccion.html?anio=" + encodeURIComponent(anio);
    if (rama) filtro += "&rama=" + encodeURIComponent(rama);
    window.location.replace(filtro);
    return;
  }

  if (encabezado) encabezado.textContent = clave;
  if (contexto) contexto.textContent = [etiqueta, "año lectivo " + anio].filter(Boolean).join(" · ");
  document.title = clave + " | INTIWO";
  if (vacio) vacio.textContent = "Aún no hay cajas publicadas para este código. El listado se llena desde la base cuando existan proyectos.";
  pintarCajas([]);
})();
