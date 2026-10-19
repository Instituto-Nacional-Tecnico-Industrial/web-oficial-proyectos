import fs from "node:fs";
import path from "node:path";

const outputDirectory = path.resolve("_site");
const supabaseUrl = process.env.SUPABASE_URL?.trim();
const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();

if (!supabaseUrl || !publishableKey) {
  throw new Error(
    "Configura las Actions Variables SUPABASE_URL y SUPABASE_PUBLISHABLE_KEY antes de publicar.",
  );
}

let parsedUrl;
try {
  parsedUrl = new URL(supabaseUrl);
} catch {
  throw new Error("SUPABASE_URL no es una URL válida.");
}

if (parsedUrl.protocol !== "https:" || parsedUrl.username || parsedUrl.password) {
  throw new Error("SUPABASE_URL debe ser HTTPS y no incluir credenciales.");
}

if (!publishableKey.startsWith("sb_publishable_")) {
  throw new Error("SUPABASE_PUBLISHABLE_KEY debe ser una clave publicable de Supabase.");
}

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory, { recursive: true });

for (const directory of ["compartido", "css", "iconos", "js", "paginas"]) {
  const sourceDirectory = path.resolve(directory);

  if (!fs.existsSync(sourceDirectory)) {
    throw new Error(`Falta la carpeta requerida: ${directory}/`);
  }

  fs.cpSync(sourceDirectory, path.join(outputDirectory, directory), {
    recursive: true,
  });
}

const configPath = path.join(
  outputDirectory,
  "js",
  "supabase",
  "configuracion-runtime.js",
);

fs.writeFileSync(
  configPath,
  [
    `export const SUPABASE_URL = ${JSON.stringify(supabaseUrl)};`,
    `export const SUPABASE_PUBLISHABLE_KEY = ${JSON.stringify(publishableKey)};`,
    "",
  ].join("\n"),
  "utf8",
);

fs.writeFileSync(
  path.join(outputDirectory, "index.html"),
  [
    "<!doctype html>",
    '<html lang="es">',
    "<meta charset=\"utf-8\">",
    '<meta http-equiv="refresh" content="0;url=paginas/proyectos/pagina-hub-proyectos.html">',
    "<title>INTIWO Proyectos</title>",
    '<a href="paginas/proyectos/pagina-hub-proyectos.html">Abrir INTIWO Proyectos</a>',
    "</html>",
    "",
  ].join(""),
  "utf8",
);

fs.writeFileSync(path.join(outputDirectory, ".nojekyll"), "", "utf8");
