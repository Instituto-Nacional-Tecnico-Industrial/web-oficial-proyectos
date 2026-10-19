/* INTIWO S2 | prefijo + nivel + seccion = DS2B | BACKLOG S2N-02c */
window.INTIWO_RAMAS = {
  automotriz: { tipo: "tecnico", prefijo: "MA", etiqueta: "Mantenimiento Automotriz" },
  mecanica: { tipo: "tecnico", prefijo: "MI", etiqueta: "Mecánica Industrial" },
  electricos: { tipo: "tecnico", prefijo: "SE", etiqueta: "Sistemas Eléctricos y Energía Renovable" },
  electronica: { tipo: "tecnico", prefijo: "EL", etiqueta: "Electrónica" },
  software: { tipo: "tecnico", prefijo: "DS", etiqueta: "Desarrollo de Software" },
  itsi: { tipo: "tecnico", prefijo: "IT", etiqueta: "Infraestructura Tecnológica y Servicios Informáticos" },
  precalculo: { tipo: "academico", prefijo: "PC", etiqueta: "Precálculo" },
  ciudadania: { tipo: "academico", prefijo: "CV", etiqueta: "Ciudadanía y valores" },
  ciencias: { tipo: "academico", prefijo: "CT", etiqueta: "Ciencias y tecnología" },
  ingles: { tipo: "academico", prefijo: "IN", etiqueta: "Inglés" },
  literatura: { tipo: "academico", prefijo: "LL", etiqueta: "Lenguaje y Literatura" }
};

window.intiwoConstruirClave = function (prefijo, nivel, seccion) {
  var n = String(nivel || "");
  var s = String(seccion || "").toUpperCase();
  if (!/^[A-Z]{2}$/.test(prefijo || "")) return "";
  if (!/^[123]$/.test(n)) return "";
  if (!/^[A-Z]$/.test(s)) return "";
  return prefijo + n + s;
};
