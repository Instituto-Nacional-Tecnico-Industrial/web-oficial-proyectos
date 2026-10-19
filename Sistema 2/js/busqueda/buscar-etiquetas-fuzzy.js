/* INTIWO S2 | fuzzy etiquetas (zalud → Salud) | S2N-01c */
(function () {
  function normalizar(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function distancia(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    var prev = [];
    var i;
    var j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      var cur = [i];
      for (j = 1; j <= b.length; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      }
      prev = cur;
    }
    return prev[b.length];
  }

  function mejorContraPalabras(q, nombre) {
    var nq = normalizar(q);
    var nn = normalizar(nombre);
    if (!nq || !nn) return { d: 99, incluye: false };
    if (nn.indexOf(nq) !== -1 || nq.indexOf(nn) !== -1) {
      return { d: 0, incluye: true };
    }
    var mejor = distancia(nq, nn);
    nq.split(" ").forEach(function (tokenQ) {
      if (tokenQ.length < 3) return;
      nn.split(" ").forEach(function (tokenN) {
        if (tokenN.length < 3) return;
        var d = distancia(tokenQ, tokenN);
        if (d < mejor) mejor = d;
      });
    });
    return { d: mejor, incluye: false };
  }

  function puntuacion(q, nombre) {
    var r = mejorContraPalabras(q, nombre);
    if (r.incluye) return 90;
    if (r.d === 0) return 88;
    if (r.d === 1) return 75;
    if (r.d === 2) return 55;
    if (r.d === 3) return 30;
    return Math.max(0, 18 - r.d);
  }

  function esCercano(q, nombre) {
    var r = mejorContraPalabras(q, nombre);
    return r.incluye || r.d <= 1;
  }

  window.intiwoNormalizarBusqueda = normalizar;
  window.intiwoFuzzyPuntuacion = puntuacion;
  window.intiwoFuzzyEsCercano = esCercano;
  window.intiwoFuzzyOrdenar = function (q, items) {
    return items
      .map(function (item) {
        return { item: item, pts: puntuacion(q, item.nombre) };
      })
      .sort(function (a, b) { return b.pts - a.pts; });
  };
})();
