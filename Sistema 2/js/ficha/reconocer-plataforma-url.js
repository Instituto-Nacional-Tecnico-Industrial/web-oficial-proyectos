/* INTIWO S2 | URL vs texto; GitHub, Drive, YouTube, globo | BACKLOG S2N-03b / 190 */
(function () {
  var ICONOS = {
    github: "#i-github",
    drive: "#i-drive",
    youtube: "#i-youtube",
    web: "#i-globe",
    texto: "#i-globe"
  };

  var ETIQUETAS = {
    github: "GitHub",
    drive: "Google Drive",
    youtube: "YouTube",
    web: "Sitio web",
    texto: "Texto"
  };

  function brutoDe(url) {
    return String(url || "").trim();
  }

  function hostDe(url) {
    var bruto = brutoDe(url);
    if (!bruto) return "";
    if (/^(javascript|data|file|blob|vbscript):/i.test(bruto)) return "";
    var texto = bruto;
    if (!/^https?:\/\//i.test(texto)) {
      if (!/^(www\.)|([a-z0-9-]+\.[a-z]{2,})/i.test(texto) && texto.indexOf("/") === -1) return "";
      texto = "https://" + texto.replace(/^\/\//, "");
    }
    try {
      var u = new URL(texto);
      if (u.protocol !== "http:" && u.protocol !== "https:") return "";
      return String(u.hostname || "").replace(/^www\./i, "").toLowerCase();
    } catch (e) {
      return "";
    }
  }

  function esUrl(url) {
    return !!hostDe(url);
  }

  function plataforma(url) {
    if (!esUrl(url)) return "texto";
    var h = hostDe(url);
    if (h === "github.com" || h === "gist.github.com" || h === "raw.githubusercontent.com" || h === "github.io" || h.slice(-10) === ".github.io") {
      return "github";
    }
    if (h === "drive.google.com" || h === "docs.google.com" || h === "sheets.google.com" || h === "slides.google.com") {
      return "drive";
    }
    if (h === "youtube.com" || h === "m.youtube.com" || h === "youtu.be" || h === "music.youtube.com" || h === "youtube-nocookie.com") {
      return "youtube";
    }
    return "web";
  }

  function hrefPublico(url) {
    var bruto = brutoDe(url);
    if (!esUrl(bruto)) return "";
    if (/^https?:\/\//i.test(bruto)) return bruto;
    return "https://" + bruto.replace(/^\/\//, "");
  }

  function lineasUrl(texto) {
    return String(texto || "").split(/\r?\n/).map(function (l) { return l.trim(); }).filter(Boolean);
  }

  window.intiwoEsUrl = esUrl;
  window.intiwoPlataformaUrl = plataforma;
  window.intiwoEtiquetaPlataforma = function (urlOPlat) {
    var clave = ETIQUETAS[urlOPlat] ? urlOPlat : plataforma(urlOPlat);
    return ETIQUETAS[clave] || ETIQUETAS.texto;
  };
  window.intiwoIconoPlataforma = function (urlOPlat) {
    var clave = ICONOS[urlOPlat] ? urlOPlat : plataforma(urlOPlat);
    return ICONOS[clave] || ICONOS.web;
  };
  window.intiwoHrefPublico = hrefPublico;
  window.intiwoLineasUrl = lineasUrl;
})();
