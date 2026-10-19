/* INTIWO S2 | toolbar agrupada; fuentes extra; ASCII + \\u para tildes */
(function () {
  var FUENTES = [
    { id: "Roboto Serif", etiqueta: "Roboto Serif", pesos: [400, 700] },
    { id: "Arial", etiqueta: "Arial", pesos: [400, 700] },
    { id: "Georgia", etiqueta: "Georgia", pesos: [400, 700] },
    { id: "Times New Roman", etiqueta: "Times New Roman", pesos: [400, 700] },
    { id: "Verdana", etiqueta: "Verdana", pesos: [400, 700] },
    { id: "Tahoma", etiqueta: "Tahoma", pesos: [400, 700] },
    { id: "Trebuchet MS", etiqueta: "Trebuchet MS", pesos: [400, 700] },
    { id: "Courier New", etiqueta: "Courier New", pesos: [400, 700] }
  ];

  var TAMANOS = [
    { cmd: "3", etiqueta: "Cuerpo" },
    { cmd: "2", etiqueta: "Peque\u00f1o" },
    { cmd: "4", etiqueta: "Mediano" },
    { cmd: "5", etiqueta: "Grande" },
    { cmd: "6", etiqueta: "T\u00edtulo" }
  ];

  var PALETA = ["#000000", "#ffffff", "#539507", "#E61010", "#166534", "#EAB308", "#EA580C", "#0000FF", "#64748B", "#f2f0eb"];

  var VINETAS = [
    { id: "disc", etiqueta: "Punto" },
    { id: "circle", etiqueta: "Circulo" },
    { id: "square", etiqueta: "Cuadrado" },
    { id: "dash", etiqueta: "Guion" },
    { id: "decimal", etiqueta: "1. 2. 3." },
    { id: "lower-alpha", etiqueta: "a. b. c." },
    { id: "upper-alpha", etiqueta: "A. B. C." },
    { id: "lower-roman", etiqueta: "i. ii. iii." },
    { id: "upper-roman", etiqueta: "I. II. III." }
  ];

  function formal() {
    var ficha = document.getElementById("intiwo-ficha");
    return !!(ficha && ficha.getAttribute("data-tipo") === "academico");
  }

  function comando(nombre, valor) {
    try {
      document.execCommand(nombre, false, valor == null ? null : valor);
    } catch (e) { /* legado */ }
  }

  function iconoSvg(id) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("aria-hidden", "true");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", id);
    if (use.href && use.href.baseVal !== undefined) use.href.baseVal = id;
    svg.appendChild(use);
    return svg;
  }

  function boton(nombre, icono, ayuda, fn) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "intiwo-ficha-tb-btn";
    b.setAttribute("aria-label", nombre);
    b.setAttribute("title", ayuda);
    b.setAttribute("data-tip", ayuda);
    if (icono) b.appendChild(iconoSvg(icono));
    var t = document.createElement("span");
    t.textContent = nombre;
    b.appendChild(t);
    b.addEventListener("mousedown", function (ev) {
      ev.preventDefault();
      fn();
    });
    return b;
  }

  function setMenu(menu, abierto) {
    if (!menu) return;
    menu.hidden = !abierto;
    menu.classList.toggle("es-abierto", !!abierto);
  }

  function cerrarMenus(salvo) {
    document.querySelectorAll(".intiwo-ficha-tb-menu").forEach(function (m) {
      if (m !== salvo) setMenu(m, false);
    });
  }

  function grupo(nombre, icono, ayuda, innerFn) {
    var wrap = document.createElement("div");
    wrap.className = "intiwo-ficha-tb-grupo";
    var b = boton(nombre, icono, ayuda, function () {
      var menu = wrap.querySelector(".intiwo-ficha-tb-menu");
      var abrir = menu.hidden;
      cerrarMenus(menu);
      setMenu(menu, abrir);
    });
    var menu = document.createElement("div");
    menu.className = "intiwo-ficha-tb-menu";
    setMenu(menu, false);
    innerFn(menu);
    wrap.appendChild(b);
    wrap.appendChild(menu);
    return wrap;
  }

  function paleta(menu, onColor) {
    var fila = document.createElement("div");
    fila.className = "intiwo-ficha-tb-swatches";
    PALETA.forEach(function (c) {
      var s = document.createElement("button");
      s.type = "button";
      s.className = "intiwo-ficha-tb-swatch";
      s.style.background = c;
      s.setAttribute("aria-label", c);
      s.addEventListener("mousedown", function (ev) {
        ev.preventDefault();
        onColor(c);
      });
      fila.appendChild(s);
    });
    menu.appendChild(fila);
    var cromo = document.createElement("div");
    cromo.className = "intiwo-ficha-tb-cromo";
    var color = document.createElement("input");
    color.type = "color";
    color.value = "#539507";
    color.setAttribute("aria-label", "Circulo cromatico");
    var hex = document.createElement("input");
    hex.type = "text";
    hex.className = "intiwo-ficha-tb-hex";
    hex.placeholder = "#539507 o rgb(83,149,7)";
    hex.setAttribute("aria-label", "Color hex o rgb");
    function aplicarTexto() {
      var v = String(hex.value || "").trim();
      if (/^#[0-9a-fA-F]{3,8}$/.test(v) || /^rgb\s*\(/i.test(v)) onColor(v);
    }
    color.addEventListener("input", function () {
      hex.value = color.value;
      onColor(color.value);
    });
    hex.addEventListener("change", aplicarTexto);
    cromo.appendChild(color);
    cromo.appendChild(hex);
    menu.appendChild(cromo);
  }

  function aplicarLista(tipo, campo) {
    if (campo) campo.focus();
    if (tipo === "dash") {
      comando("insertUnorderedList");
      var ul = campo && campo.querySelector("ul");
      if (ul) ul.style.listStyleType = "disc";
      return;
    }
    if (tipo === "disc" || tipo === "circle" || tipo === "square") {
      comando("insertUnorderedList");
    } else {
      comando("insertOrderedList");
    }
    var lista = campo && (campo.querySelector("ul,ol"));
    if (lista) lista.style.listStyleType = tipo === "dash" ? "disc" : tipo;
  }

  function fuentesTodas() {
    var extra = typeof window.intiwoFuentesExtra === "function" ? window.intiwoFuentesExtra() : [];
    var base = FUENTES.slice();
    extra.forEach(function (f) {
      base.push({ id: f.familia, etiqueta: f.familia, pesos: f.pesos || [400, 700] });
    });
    return base;
  }

  function montar(destino, campo, modo) {
    if (!destino || destino.getAttribute("data-tb-ok")) return;
    destino.setAttribute("data-tb-ok", "1");
    var barra = document.createElement("div");
    barra.className = "intiwo-ficha-toolbar";
    barra.setAttribute("role", "toolbar");
    barra.setAttribute("aria-label", "Formato de texto");

    function foco() {
      if (campo) campo.focus();
    }

    barra.appendChild(boton("Deshacer", "#i-undo", "Quita el ultimo cambio (como Ctrl+Z).", function () {
      if (typeof window.intiwoFichaDeshacer === "function") window.intiwoFichaDeshacer();
    }));
    barra.appendChild(boton("Rehacer", "#i-redo", "Devuelve el cambio que quitaste.", function () {
      if (typeof window.intiwoFichaRehacer === "function") window.intiwoFichaRehacer();
    }));

    barra.appendChild(grupo("Letra", "#i-type", "Negrita, cursiva, subrayado y tachado.", function (menu) {
      menu.appendChild(boton("Negrita", "#i-bold", "Pone el texto mas grueso.", function () { foco(); comando("bold"); }));
      menu.appendChild(boton("Cursiva", "#i-italic", "Inclina el texto.", function () { foco(); comando("italic"); }));
      menu.appendChild(boton("Subrayar", "#i-underline", "Dibuja una linea bajo el texto.", function () { foco(); comando("underline"); }));
      menu.appendChild(boton("Tachar", "#i-strike", "Tacha el texto.", function () { foco(); comando("strikeThrough"); }));
    }));

    if (!formal()) {
      barra.appendChild(grupo("Color", "#i-palette", "Cambia el color de la letra. Paleta o codigo hex/rgb.", function (menu) {
        paleta(menu, function (c) {
          foco();
          comando("styleWithCSS", true);
          comando("foreColor", c);
          if (campo && campo.tagName === "INPUT") campo.style.color = c;
        });
      }));
      barra.appendChild(grupo("Resaltar", "#i-highlight", "Pinta el fondo del texto, como un marcador.", function (menu) {
        paleta(menu, function (c) {
          foco();
          comando("styleWithCSS", true);
          comando("hiliteColor", c);
          comando("backColor", c);
        });
      }));
    }

    if (modo === "cuerpo") {
      barra.appendChild(grupo("Alinear", "#i-align-left", "Mueve el parrafo a la izquierda, centro, derecha o justificado.", function (menu) {
        menu.appendChild(boton("Izquierda", "#i-align-left", "Alinea el texto a la izquierda.", function () { foco(); comando("justifyLeft"); }));
        menu.appendChild(boton("Centro", "#i-align-center", "Centra el parrafo.", function () { foco(); comando("justifyCenter"); }));
        menu.appendChild(boton("Derecha", "#i-align-right", "Alinea el texto a la derecha.", function () { foco(); comando("justifyRight"); }));
        menu.appendChild(boton("Justificar", "#i-align-justify", "Estira el texto a ambos lados.", function () { foco(); comando("justifyFull"); }));
      }));
      barra.appendChild(grupo("Sangria", "#i-indent", "Mete o saca el parrafo.", function (menu) {
        menu.appendChild(boton("Entrar", "#i-indent", "Mete el parrafo hacia adentro.", function () { foco(); comando("indent"); }));
        menu.appendChild(boton("Salir", "#i-outdent", "Saca el parrafo hacia afuera.", function () { foco(); comando("outdent"); }));
      }));
      barra.appendChild(grupo("Listas", "#i-list", "Vinietas, numeros, letras o romanos.", function (menu) {
        VINETAS.forEach(function (v) {
          menu.appendChild(boton(v.etiqueta, "#i-list", "Convierte el texto en lista " + v.etiqueta + ".", function () { aplicarLista(v.id, campo); }));
        });
      }));
    }

    var tam = document.createElement("select");
    tam.className = "intiwo-ficha-tb-select";
    tam.setAttribute("aria-label", "Tama\u00f1o");
    tam.setAttribute("title", "Cambia el tama\u00f1o de la letra.");
    tam.setAttribute("data-tip", "Cambia el tama\u00f1o de la letra.");
    TAMANOS.forEach(function (t) {
      var o = document.createElement("option");
      o.value = t.cmd;
      o.textContent = t.etiqueta;
      tam.appendChild(o);
    });
    tam.addEventListener("change", function () {
      foco();
      comando("fontSize", tam.value);
      if (campo && campo.tagName === "INPUT") {
        var mapa = { "2": "0.85rem", "3": "1rem", "4": "1.15rem", "5": "1.35rem", "6": "1.6rem" };
        campo.style.fontSize = mapa[tam.value] || "1rem";
      }
    });
    barra.appendChild(tam);

    var fuente = document.createElement("select");
    fuente.className = "intiwo-ficha-tb-select";
    fuente.setAttribute("aria-label", "Tipograf\u00eda");
    fuente.setAttribute("title", "Elige la familia de letra.");
    fuente.setAttribute("data-tip", "Elige la familia de letra.");
    var peso = document.createElement("select");
    peso.className = "intiwo-ficha-tb-select";
    peso.setAttribute("aria-label", "Grosor");
    peso.setAttribute("title", "Elige que tan gruesa es la letra (400 fino, 700 negrita).");
    peso.setAttribute("data-tip", "Elige que tan gruesa es la letra (400 fino, 700 negrita).");

    function pintarPesos(pesos) {
      peso.innerHTML = "";
      (pesos || [400, 700]).forEach(function (n) {
        var o = document.createElement("option");
        o.value = String(n);
        o.textContent = String(n);
        peso.appendChild(o);
      });
    }

    if (formal()) {
      var solo = document.createElement("option");
      solo.value = "Roboto Serif";
      solo.textContent = "Roboto Serif";
      fuente.appendChild(solo);
      fuente.disabled = true;
      pintarPesos([400, 700]);
    } else {
      function pintarFuentes() {
        var actual = fuente.value;
        fuente.innerHTML = "";
        fuentesTodas().forEach(function (f) {
          var o = document.createElement("option");
          o.value = f.id;
          o.textContent = f.etiqueta;
          o.setAttribute("data-pesos", (f.pesos || [400, 700]).join(","));
          fuente.appendChild(o);
        });
        var extra = document.createElement("option");
        extra.value = "__guia__";
        extra.textContent = "Agregar tipografia...";
        fuente.appendChild(extra);
        if (actual && actual !== "__guia__") fuente.value = actual;
        var sel = fuentesTodas().filter(function (f) { return f.id === fuente.value; })[0];
        pintarPesos(sel && sel.pesos);
      }
      pintarFuentes();
      fuente.addEventListener("change", function () {
        if (fuente.value === "__guia__") {
          try {
            sessionStorage.setItem("intiwo-ficha-volver", window.location.pathname + window.location.search);
          } catch (e) { /* */ }
          window.location.href = "pagina-guia-tipografia.html";
          return;
        }
        var opt = fuente.options[fuente.selectedIndex];
        var pesos = opt && opt.getAttribute("data-pesos") ? opt.getAttribute("data-pesos").split(",").map(Number) : [400, 700];
        pintarPesos(pesos);
        foco();
        comando("fontName", fuente.value);
        if (campo && campo.tagName === "INPUT") campo.style.fontFamily = fuente.value;
      });
    }
    peso.addEventListener("change", function () {
      foco();
      comando("styleWithCSS", true);
      try {
        document.execCommand("fontWeight", false, peso.value);
      } catch (e2) { /* */ }
      if (campo && campo.style) {
        if (campo.tagName === "INPUT") campo.style.fontWeight = peso.value;
      }
    });
    barra.appendChild(fuente);
    barra.appendChild(peso);

    var ancla = destino.querySelector(".intiwo-ficha-ayuda");
    if (ancla && ancla.nextSibling) destino.insertBefore(barra, ancla.nextSibling);
    else destino.appendChild(barra);

    document.addEventListener("mousedown", function (ev) {
      if (!ev.target.closest || !ev.target.closest(".intiwo-ficha-tb-grupo")) cerrarMenus();
    });
  }

  if (typeof window.intiwoInyectarFuentesExtra === "function") window.intiwoInyectarFuentesExtra();

  window.intiwoMontarToolbarFicha = montar;
  window.intiwoFuentesFicha = FUENTES;
})();
