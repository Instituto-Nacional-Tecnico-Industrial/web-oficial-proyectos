/* INTIWO S2 | parsea CSS/SVG de Google Fonts; nombres y grosores | ASCII + \\u */
(function () {
  var CLAVE = "intiwo-fuentes-editor";

  function limpio(s) {
    return String(s || "").replace(/\u0000/g, "").trim();
  }

  function peligroso(bruto) {
    return /<script|javascript:|onerror\s*=|onclick\s*=|data:text\/html|vbscript:/i.test(bruto);
  }

  function decod(fam) {
    try {
      fam = decodeURIComponent(fam.replace(/\+/g, " "));
    } catch (e) {
      fam = fam.replace(/\+/g, " ");
    }
    return fam.replace(/['"]/g, "").trim();
  }

  function pesosDe(texto) {
    var set = {};
    var m;
    var re = /wght@([0-9;,.]+)/gi;
    while ((m = re.exec(texto))) {
      String(m[1]).split(/[;:,]/).forEach(function (p) {
        var n = parseInt(p, 10);
        if (n >= 100 && n <= 900) set[n] = true;
      });
    }
    var re2 = /font-weight\s*:\s*(normal|bold|[1-9]00)/gi;
    while ((m = re2.exec(texto))) {
      var v = String(m[1]).toLowerCase();
      if (v === "normal") set[400] = true;
      else if (v === "bold") set[700] = true;
      else set[parseInt(v, 10)] = true;
    }
    var lista = Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
    if (!lista.length) lista = [400, 700];
    return lista;
  }

  function familiasDe(bruto) {
    var texto = limpio(bruto);
    var nombres = [];
    var visto = {};
    function add(n) {
      n = decod(n);
      if (!n || n.length > 60) return;
      var k = n.toLowerCase();
      if (visto[k]) return;
      visto[k] = true;
      nombres.push(n);
    }
    var m;
    var g = /[?&]family=([^&:]+)/gi;
    while ((m = g.exec(texto))) add(m[1]);
    var css = /font-family\s*:\s*([^;{}]+)/gi;
    while ((m = css.exec(texto))) {
      m[1].split(",").forEach(function (parte) {
        var p = parte.replace(/["']/g, "").trim();
        if (/^(serif|sans-serif|monospace|cursive|fantasy|system-ui)$/i.test(p)) return;
        add(p);
      });
    }
    var svg = /<font[^>]*\sid=["']([^"']+)["']/gi;
    while ((m = svg.exec(texto))) add(m[1]);
    var svg2 = /font-family=["']([^"']+)["']/gi;
    while ((m = svg2.exec(texto))) add(m[1]);
    return nombres;
  }

  function validar(bruto) {
    var texto = limpio(bruto);
    if (!texto) {
      return { ok: false, error: "Pega el codigo en el recuadro. Si no sabes cual, lee otra vez los pasos de Google Fonts." };
    }
    if (peligroso(texto)) {
      return { ok: false, error: "Ese texto no es seguro. No pegues scripts. Vuelve a leer Sitios seguros y copia solo el recuadro de Google Fonts." };
    }
    var hayGoogle = /fonts\.googleapis\.com\/css/i.test(texto) || /fonts\.gstatic\.com/i.test(texto);
    var hayFace = /@font-face/i.test(texto);
    var hayImport = /@import\s+url/i.test(texto);
    var haySvg = /<svg[\s>][\s\S]*<font/i.test(texto) || /<font[\s>]/i.test(texto);
    var hayFamily = /font-family\s*:/i.test(texto);
    if (!(hayGoogle || hayFace || hayImport || haySvg || hayFamily)) {
      return { ok: false, error: "No reconocimos una fuente. Vuelve a leer Sitios seguros: en Google Fonts pulsa Get embed code y copia el CSS." };
    }
    var familias = familiasDe(texto);
    if (!familias.length) {
      return { ok: false, error: "El codigo no trae el nombre de la letra. En Google Fonts copia el bloque que dice font-family. Lee otra vez Sitios seguros." };
    }
    return {
      ok: true,
      familias: familias,
      pesos: pesosDe(texto),
      css: texto
    };
  }

  function leer() {
    try {
      var bruto = JSON.parse(localStorage.getItem(CLAVE) || "[]");
      return Array.isArray(bruto) ? bruto : [];
    } catch (e) {
      return [];
    }
  }

  function guardarItem(item) {
    var lista = leer().filter(function (x) {
      return String(x.familia).toLowerCase() !== String(item.familia).toLowerCase();
    });
    lista.push(item);
    try {
      localStorage.setItem(CLAVE, JSON.stringify(lista));
    } catch (e) { /* cuota */ }
  }

  function inyectar() {
    leer().forEach(function (item, i) {
      var id = "intiwo-fuente-extra-" + i;
      if (document.getElementById(id)) return;
      if (item.css && /<svg|<font/i.test(item.css)) return;
      var tag = document.createElement("style");
      tag.id = id;
      tag.textContent = item.css || "";
      document.head.appendChild(tag);
    });
  }

  window.intiwoValidarFuente = validar;
  window.intiwoGuardarFuente = function (bruto) {
    var r = validar(bruto);
    if (!r.ok) return r;
    r.familias.forEach(function (fam) {
      guardarItem({ familia: fam, pesos: r.pesos, css: r.css });
    });
    return r;
  };
  window.intiwoFuentesExtra = leer;
  window.intiwoInyectarFuentesExtra = inyectar;
})();
