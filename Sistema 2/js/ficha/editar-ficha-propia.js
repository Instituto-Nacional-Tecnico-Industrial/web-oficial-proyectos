/* INTIWO S2 | ficha Editor/Academico: auto-guardado, URLs, integrantes | BACKLOG 190 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var tipo = params.get("tipo") || "tecnico";
  var modo = params.get("modo") || "ver";
  var clave = (params.get("clave") || "").toUpperCase();
  var rama = params.get("rama") || "";
  var anio = params.get("anio") || "2026";
  if (!/^\d{4}$/.test(anio) || Number(anio) < 2026) anio = "2026";
  var meta = window.INTIWO_RAMAS && window.INTIWO_RAMAS[rama];
  var etiqueta = meta ? meta.etiqueta : "";
  var academico = tipo === "academico";
  var CLAVE_BORRADOR = "intiwo-ficha-borrador";
  var timer = 0;

  var ficha = document.getElementById("intiwo-ficha");
  var tituloEl = document.getElementById("intiwo-ficha-titulo");
  var metaEl = document.getElementById("intiwo-ficha-meta");
  var avisoEl = document.getElementById("intiwo-ficha-aviso");
  var autoEl = document.getElementById("intiwo-ficha-auto");
  var bloqueTec = document.getElementById("intiwo-ficha-tecnico");
  var bloqueAca = document.getElementById("intiwo-ficha-academico");
  var tecEd = document.getElementById("intiwo-ficha-tecnico-edicion");
  var acaEd = document.getElementById("intiwo-ficha-academico-edicion");
  var equipoUl = document.getElementById("intiwo-ficha-equipo");
  var docenteEl = document.getElementById("intiwo-ficha-docente");
  var autoresEl = document.getElementById("intiwo-ficha-autores");
  var manoEl = document.getElementById("intiwo-ficha-mano");
  var cuerpoEl = document.getElementById("intiwo-ficha-cuerpo");
  var urlsUl = document.getElementById("intiwo-ficha-urls");
  var plantillaUrl = document.getElementById("intiwo-plantilla-url");
  var plantillaUrlEd = document.getElementById("intiwo-plantilla-url-edicion");
  var plantillaInt = document.getElementById("intiwo-plantilla-integrante");
  var campoTitulo = document.getElementById("intiwo-ficha-campo-titulo");
  var campoCuerpo = document.getElementById("intiwo-ficha-campo-cuerpo");
  var urlsEd = document.getElementById("intiwo-ficha-urls-edicion");
  var intsEd = document.getElementById("intiwo-ficha-integrantes");
  var docenteEd = document.getElementById("intiwo-ficha-docente-edicion");
  var autoresEd = document.getElementById("intiwo-ficha-autores-edicion");
  var manoEd = document.getElementById("intiwo-ficha-mano-edicion");
  var codigoAuto = document.getElementById("intiwo-ficha-codigo-auto");
  var tituloAviso = document.getElementById("intiwo-ficha-titulo-aviso");

  function rol() {
    if (typeof window.intiwoObtenerRol === "function") return window.intiwoObtenerRol();
    return "";
  }

  function claveFicha() {
    return [tipo, params.get("id") || "", clave, rama, anio].join("|");
  }

  function nombreSesion() {
    try {
      return localStorage.getItem("intiwo-nombre-visible") || sessionStorage.getItem("intiwo-nombre-visible") || "";
    } catch (e) {
      return "";
    }
  }

  function leerTodos() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE_BORRADOR) || "{}") || {};
    } catch (e) {
      return {};
    }
  }

  function leer() {
    var d = leerTodos()[claveFicha()] || {};
    return {
      titulo: d.titulo || "",
      cuerpo: d.cuerpo || "",
      urls: Array.isArray(d.urls) ? d.urls : [],
      integrantes: Array.isArray(d.integrantes) ? d.integrantes : [""],
      docente: d.docente || nombreSesion(),
      autores: d.autores || nombreSesion(),
      mano: d.mano || "",
      tituloEstilo: d.tituloEstilo || null,
      publicado: !!d.publicado
    };
  }

  function recolectar() {
    var urls = [];
    if (urlsEd) {
      urlsEd.querySelectorAll(".intiwo-url-input").forEach(function (inp) {
        urls.push(inp.value);
      });
    }
    var integrantes = [];
    if (intsEd) {
      intsEd.querySelectorAll(".intiwo-integrante-input").forEach(function (inp) {
        integrantes.push(inp.value);
      });
    }
    var estilo = null;
    if (campoTitulo) {
      var cs = window.getComputedStyle(campoTitulo);
      estilo = {
        fontFamily: cs.fontFamily,
        fontWeight: cs.fontWeight,
        fontSize: cs.fontSize,
        color: cs.color
      };
    }
    return {
      titulo: campoTitulo ? campoTitulo.value : "",
      cuerpo: campoCuerpo ? campoCuerpo.innerHTML : "",
      urls: urls,
      integrantes: integrantes,
      docente: nombreSesion(),
      autores: autoresEd ? autoresEd.innerHTML : "",
      mano: manoEd ? manoEd.textContent : "",
      tituloEstilo: estilo,
      publicado: !!(leerTodos()[claveFicha()] && leerTodos()[claveFicha()].publicado)
    };
  }

  function tituloNorm(t) {
    return String(t || "").trim().replace(/\s+/g, " ").toLowerCase();
  }

  function tituloChoca(titulo) {
    var n = tituloNorm(titulo);
    if (!n) return false;
    var todos = leerTodos();
    var k = claveFicha();
    return Object.keys(todos).some(function (otra) {
      if (otra === k) return false;
      return tituloNorm(todos[otra] && todos[otra].titulo) === n;
    });
  }

  function guardarAuto() {
    var datos = recolectar();
    var proyectoRemoto = params.get("id");
    if (proyectoRemoto) {
      if (autoEl) {
        autoEl.hidden = false;
        autoEl.textContent = "Cambios pendientes de guardar en Supabase…";
      }
      window.dispatchEvent(new CustomEvent("intiwo:ficha-datos-cambiados", { detail: datos }));
    } else try {
      var todos = leerTodos();
      todos[claveFicha()] = datos;
      localStorage.setItem(CLAVE_BORRADOR, JSON.stringify(todos));
    } catch (e) { /* cuota */ }
    if (autoEl && !proyectoRemoto) {
      autoEl.hidden = false;
      autoEl.textContent = tituloChoca(datos.titulo)
        ? "Ese título ya lo usa otro proyecto; cámbialo (como en GitHub)."
        : "Guardado automáticamente. Puedes continuar después aunque falten campos.";
    }
    if (tituloAviso) {
      var choca = !proyectoRemoto && tituloChoca(datos.titulo);
      tituloAviso.hidden = !choca;
      if (choca) tituloAviso.textContent = "Ese título ya existe. Debe ser único y original.";
    }
    if (tituloEl && datos.titulo) tituloEl.textContent = datos.titulo;
  }

  var pila = [];
  var idx = -1;
  var silenciar = false;

  function rellenarForm(d) {
    if (campoTitulo) campoTitulo.value = d.titulo || "";
    if (campoCuerpo) campoCuerpo.innerHTML = htmlSeguro(d.cuerpo || "");
    if (urlsEd) {
      urlsEd.innerHTML = "";
      (d.urls && d.urls.length ? d.urls : [""]).forEach(function (u) { agregarUrl(u); });
    }
    if (intsEd) {
      intsEd.innerHTML = "";
      (d.integrantes && d.integrantes.length ? d.integrantes : [""]).forEach(function (n) { agregarIntegrante(n); });
    }
    if (autoresEd) autoresEd.innerHTML = htmlSeguro(d.autores || "");
    if (manoEd) manoEd.textContent = d.mano || "";
  }

  function snap() {
    if (silenciar) return;
    var s = JSON.stringify(recolectar());
    if (pila[idx] === s) return;
    pila = pila.slice(0, idx + 1);
    pila.push(s);
    if (pila.length > 80) pila.shift();
    idx = pila.length - 1;
  }

  window.intiwoFichaDeshacer = function () {
    if (idx <= 0) return;
    idx -= 1;
    silenciar = true;
    rellenarForm(JSON.parse(pila[idx]));
    silenciar = false;
    guardarAuto();
  };

  window.intiwoFichaRehacer = function () {
    if (idx >= pila.length - 1) return;
    idx += 1;
    silenciar = true;
    rellenarForm(JSON.parse(pila[idx]));
    silenciar = false;
    guardarAuto();
  };

  function aplicarEstiloVisitante(est) {
    if (!est) return;
    ["intiwo-ficha-titulo", "intiwo-ficha-meta", "intiwo-ficha-docente", "intiwo-ficha-autores"].forEach(function (id) {
      var n = document.getElementById(id);
      if (!n) return;
      n.style.fontFamily = est.fontFamily || "";
      n.style.fontWeight = est.fontWeight || "";
      n.style.color = est.color || "";
    });
    if (equipoUl) {
      equipoUl.style.fontFamily = est.fontFamily || "";
      equipoUl.style.fontWeight = est.fontWeight || "";
      equipoUl.style.color = est.color || "";
    }
  }

  function programarGuardado() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      snap();
      guardarAuto();
    }, 400);
  }

  function iconoDe(url) {
    if (typeof window.intiwoIconoPlataforma === "function") return window.intiwoIconoPlataforma(url);
    return "#i-globe";
  }

  function pintarUrls(filas, destino) {
    var caja = destino || urlsUl;
    if (!caja || !plantillaUrl) return;
    caja.innerHTML = "";
    (filas || []).forEach(function (href) {
      var texto = String(href || "").trim();
      if (!texto) return;
      var nodo = plantillaUrl.content.cloneNode(true);
      var li = nodo.querySelector(".intiwo-ficha-url");
      var use = nodo.querySelector("use");
      var a = nodo.querySelector("a");
      var tipoEl = nodo.querySelector(".intiwo-ficha-url-tipo");
      var plat = typeof window.intiwoPlataformaUrl === "function" ? window.intiwoPlataformaUrl(texto) : "web";
      var hrefIco = iconoDe(texto);
      var etiquetaPlat = typeof window.intiwoEtiquetaPlataforma === "function" ? window.intiwoEtiquetaPlataforma(texto) : plat;
      var publico = typeof window.intiwoHrefPublico === "function" ? window.intiwoHrefPublico(texto) : texto;
      if (li) li.setAttribute("data-plataforma", plat);
      if (use) {
        use.setAttribute("href", hrefIco);
        if (use.href && use.href.baseVal !== undefined) use.href.baseVal = hrefIco;
      }
      if (tipoEl) tipoEl.textContent = etiquetaPlat;
      if (a) {
        if (publico) {
          a.href = publico;
          a.textContent = texto;
        } else {
          a.removeAttribute("href");
          a.textContent = texto;
        }
      }
      caja.appendChild(nodo);
    });
  }

  function refrescarFilaUrl(fila) {
    if (!fila) return;
    var inp = fila.querySelector(".intiwo-url-input");
    var use = fila.querySelector("use");
    var tipoEl = fila.querySelector(".intiwo-ficha-url-tipo");
    var check = fila.querySelector(".intiwo-url-check");
    var texto = inp ? inp.value : "";
    var es = typeof window.intiwoEsUrl === "function" && window.intiwoEsUrl(texto);
    var plat = typeof window.intiwoPlataformaUrl === "function" ? window.intiwoPlataformaUrl(texto) : "texto";
    var hrefIco = iconoDe(texto);
    if (use) {
      use.setAttribute("href", hrefIco);
      if (use.href && use.href.baseVal !== undefined) use.href.baseVal = hrefIco;
    }
    if (tipoEl) tipoEl.textContent = typeof window.intiwoEtiquetaPlataforma === "function" ? window.intiwoEtiquetaPlataforma(texto) : plat;
    if (check) check.hidden = !es;
    fila.setAttribute("data-plataforma", plat);
  }

  function agregarUrl(valor) {
    if (!urlsEd || !plantillaUrlEd) return;
    var nodo = plantillaUrlEd.content.cloneNode(true);
    var fila = nodo.querySelector(".intiwo-url-fila");
    var inp = nodo.querySelector(".intiwo-url-input");
    if (inp) inp.value = valor || "";
    urlsEd.appendChild(nodo);
    refrescarFilaUrl(fila);
    if (inp) {
      inp.addEventListener("input", function () {
        refrescarFilaUrl(fila);
        programarGuardado();
      });
      inp.addEventListener("paste", function () {
        setTimeout(function () {
          refrescarFilaUrl(fila);
          programarGuardado();
        }, 0);
      });
    }
    var quitar = fila && fila.querySelector(".intiwo-url-quitar");
    if (quitar) {
      quitar.addEventListener("click", function () {
        if (urlsEd.children.length <= 1) {
          if (inp) inp.value = "";
          refrescarFilaUrl(fila);
        } else {
          fila.remove();
        }
        programarGuardado();
      });
    }
  }

  function agregarIntegrante(valor) {
    if (!intsEd || !plantillaInt) return;
    var nodo = plantillaInt.content.cloneNode(true);
    var fila = nodo.querySelector(".intiwo-integrante-fila");
    var inp = nodo.querySelector(".intiwo-integrante-input");
    if (inp) inp.value = valor || "";
    intsEd.appendChild(nodo);
    if (inp) inp.addEventListener("input", programarGuardado);
    var quitar = fila && fila.querySelector(".intiwo-integrante-quitar");
    if (quitar) {
      quitar.addEventListener("click", function () {
        if (intsEd.children.length <= 1) {
          if (inp) inp.value = "";
        } else {
          fila.remove();
        }
        programarGuardado();
      });
    }
  }

  function pintarPersonas(ul, nombres) {
    if (!ul) return;
    ul.innerHTML = "";
    (nombres || []).forEach(function (nombre) {
      var plano = String(nombre || "").replace(/<[^>]+>/g, "").trim();
      if (!plano) return;
      var li = document.createElement("li");
      li.textContent = plano;
      ul.appendChild(li);
    });
    var bloque = ul.closest(".intiwo-ficha-bloque");
    if (bloque) bloque.hidden = !ul.children.length;
  }

  function htmlSeguro(html) {
    var d = document.createElement("div");
    d.innerHTML = html || "";
    d.querySelectorAll("script,iframe,object,style").forEach(function (n) { n.remove(); });
    d.querySelectorAll("*").forEach(function (n) {
      [].slice.call(n.attributes).forEach(function (at) {
        if (/^on/i.test(at.name) || at.name === "src" || at.name === "href" && /^javascript:/i.test(at.value)) {
          n.removeAttribute(at.name);
        }
      });
    });
    return d.innerHTML;
  }

  var r = rol();
  var puedeEditar = modo === "personalizar" && params.get("previsualizar") !== "1" && !!params.get("id") && (
    (!academico && r === "editor") ||
    (academico && (r === "academico" || r === "docente" || r === "administrador" || r === "admin"))
  );

  if (ficha) ficha.setAttribute("data-tipo", academico ? "academico" : "tecnico");
  if (bloqueTec) bloqueTec.hidden = academico;
  if (bloqueAca) bloqueAca.hidden = !academico;
  if (tecEd) tecEd.hidden = academico;
  if (acaEd) acaEd.hidden = !academico;

  var datos = leer();
  var tituloMostrar = datos.titulo || "Proyecto";
  if (tituloEl) tituloEl.textContent = tituloMostrar;
  document.title = tituloMostrar + " | INTIWO";

  if (academico) {
    if (metaEl) metaEl.textContent = [etiqueta || "Asignatura", "año lectivo " + anio].filter(Boolean).join(" · ");
    if (autoresEl) autoresEl.innerHTML = htmlSeguro(datos.autores);
    if (autoresEl && !String(autoresEl.textContent || "").trim()) {
      var ba = autoresEl.closest(".intiwo-ficha-bloque");
      if (ba) ba.hidden = true;
    }
    if (manoEl) {
      manoEl.textContent = datos.mano || "";
      var bm = manoEl.closest(".intiwo-ficha-bloque");
      if (bm) bm.hidden = !datos.mano;
    }
    aplicarEstiloVisitante(datos.tituloEstilo);
  } else {
    if (metaEl) metaEl.textContent = [clave || "", etiqueta, "año lectivo " + anio].filter(Boolean).join(" · ");
    if (docenteEl) {
      docenteEl.innerHTML = htmlSeguro(datos.docente);
      var bd = docenteEl.closest(".intiwo-ficha-bloque");
      if (bd) bd.hidden = !String(docenteEl.textContent || "").trim();
    }
    pintarPersonas(equipoUl, datos.integrantes);
    aplicarEstiloVisitante(datos.tituloEstilo);
  }

  if (cuerpoEl) {
    cuerpoEl.innerHTML = htmlSeguro(datos.cuerpo);
    if (!String(cuerpoEl.textContent || "").trim()) cuerpoEl.closest(".intiwo-ficha-bloque").hidden = !datos.cuerpo;
  }
  pintarUrls(datos.urls);
  if (urlsUl && !urlsUl.children.length) {
    var bu = urlsUl.closest(".intiwo-ficha-bloque");
    if (bu) bu.hidden = true;
  }

  if (academico && modo === "personalizar" && r !== "academico" && r !== "docente" && r !== "administrador" && r !== "admin") {
    if (avisoEl) {
      avisoEl.hidden = false;
      avisoEl.textContent = "Solo un Académico o Docente autor, o un Administrador, puede editar proyectos académicos.";
    }
  } else if (puedeEditar && ficha) {
    if (!params.get("id")) {
      ficha.classList.add("es-edicion");
      if (academico) ficha.classList.add("es-formal");
    }
    var ayudaDesc = document.querySelector("[data-ayuda-desc]");
    if (ayudaDesc && academico) {
      ayudaDesc.textContent = "Describe el proyecto con tono institucional. Listas y sangria si; color de texto no; solo Roboto Serif. Las URLs se comportan igual que en tecnico.";
    }
    if (campoTitulo) campoTitulo.value = datos.titulo;
    if (campoCuerpo) campoCuerpo.innerHTML = htmlSeguro(datos.cuerpo);
    if (autoresEd) autoresEd.innerHTML = htmlSeguro(datos.autores || nombreSesion());
    if (manoEd) manoEd.textContent = datos.mano || "";
    (datos.urls.length ? datos.urls : [""]).forEach(function (u) { agregarUrl(u); });
    (datos.integrantes.length ? datos.integrantes : [""]).forEach(function (n) { agregarIntegrante(n); });
    document.querySelectorAll("[data-tb-wrap]").forEach(function (wrap) {
      var campo = wrap.querySelector("[contenteditable], input");
      var modoTb = wrap.getAttribute("data-tb-modo") || "cuerpo";
      if (typeof window.intiwoMontarToolbarFicha === "function" && campo) {
        window.intiwoMontarToolbarFicha(wrap, campo, modoTb);
      }
    });
    if (campoTitulo) campoTitulo.addEventListener("input", programarGuardado);
    if (campoCuerpo) campoCuerpo.addEventListener("input", programarGuardado);
    if (autoresEd) autoresEd.addEventListener("input", programarGuardado);
    var masUrl = document.getElementById("intiwo-ficha-mas-url");
    if (masUrl) masUrl.addEventListener("click", function () { agregarUrl(""); });
    var masInt = document.getElementById("intiwo-ficha-mas-integrante");
    if (masInt) masInt.addEventListener("click", function () { agregarIntegrante(""); });
    var pub = document.getElementById("intiwo-ficha-publicar");
    if (pub) {
      pub.hidden = true;
    }
    programarGuardado();
  }
})();
