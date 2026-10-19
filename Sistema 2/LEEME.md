# Sistema 2 - INTIWO (proyectos)

Solo proyectos. HTML (nombres reales; no usar index.html). IA 2026-10-13: el hub no lleva dropdowns; Ver mas abre otro documento.

- `paginas/proyectos/pagina-hub-proyectos.html` (dos cards)
- `paginas/catalogo/pagina-catalogo-tecnicos.html` (dropdown anio desde 2026 + 6 especialidades)
- `paginas/catalogo/pagina-catalogo-academicos.html` (mismo anio + 5 asignaturas; no codigo PC2B)
- `paginas/filtro/pagina-filtro-anio-seccion.html` (solo tecnico: nivel + seccion = DS2B)
- `paginas/listado/pagina-listado-proyectos-codigo.html` (cajas apiladas)
- `paginas/ficha/pagina-ficha-proyecto.html` (fase 3, URLs)
- `paginas/evaluar/pagina-evaluar-codigos-docente.html`
- `paginas/evaluar/pagina-evaluar-proyectos-codigo.html`

Cromo: identico a S1 salvo busqueda y boton Personalizar/Evaluar. CSS: `hub-y-pildoras-proyectos.css`, `catalogo-y-listado-proyectos.css`, `ficha-proyecto.css`.
Cliente: `js/supabase/cliente-supabase.js` (misma base que Sistema 1).
SQL en `supabase/` es copia de Sistema 1, no otra base.
Repo futuro: web-oficial-proyectos. Completar segun `IAs/BACKLOG.md` S2N-01..07.

## Despliegue y Supabase

En este repositorio, `.github/workflows/deploy-pages.yml` publica Sistema 1 y Sistema 2, y `.github/scripts/build-pages.mjs` genera la configuracion runtime para ambos desde las Actions Variables `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY`. En GitHub, seleccionar **Settings > Pages > Build and deployment > Source: GitHub Actions**. Solo usar la clave publica `sb_publishable_`; nunca una clave secreta. Ambos clientes comparten URL y clave. Si Sistema 2 se mueve a `web-oficial-proyectos`, ese repositorio necesitara configurar las mismas variables y su propio workflow de publicacion.

## Checklist para separar Sistema 2 en `web-oficial-proyectos`

Completar estos pasos cuando se autorice crear el repositorio separado. Hasta entonces, los enlaces relativos actuales que llevan de S2 a S1 son intencionales para el clone integrado.

1. **Preparar el repositorio nuevo.** Crear `Instituto-Nacional-Tecnico-Industrial/web-oficial-proyectos` y copiar el contenido de `Sistema 2/` a la raiz del nuevo repositorio (no crear otra carpeta `Sistema 2/`). Incluir `paginas/`, `compartido/`, `css/`, `iconos/` y `js/`. Revisar el contenido antes de publicarlo y no copiar credenciales locales, `.env` ni archivos de build `_site/`.

2. **Actualizar las referencias a Sistema 1.** Buscar en todo el repositorio nuevo `Sistema 1`, `TODO-SPLIT-REPO` y rutas como `../../../Sistema 1/` o `../../Sistema 1/`. Esto incluye los enlaces del menu y footer, el logo/imagenes del header, Configuraciones y las paginas institucionales. Cambiar cada destino a la URL oficial HTTPS de S1 acordada por el Instituto; dejar enlaces locales relativos para hub, ficha, Cuentas, CSS, JS e iconos propios de S2. No inventar el dominio final ni dejar rutas relativas que intenten salir del repositorio.

3. **Preparar Pages independiente.** No copiar sin cambios el workflow o `.github/scripts/build-pages.mjs` de este clone: hoy el script requiere las carpetas `Sistema 1/` y `Sistema 2/` y publica ambas bajo sus subcarpetas. Crear/adaptar el build de S2 para publicar el contenido del nuevo repositorio desde su raiz (con una pagina inicial/enlace al hub si se requiere). Configurar el workflow de Pages y en **Settings > Pages** elegir **GitHub Actions**. Probar rutas, recarga directa de hub/ficha y recursos con la URL real de Pages, que incluye el prefijo `/web-oficial-proyectos/`.

4. **Configurar el cliente Supabase sin duplicar proyecto.** En **Settings > Secrets and variables > Actions > Variables** del nuevo repositorio, crear `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY`, usando los mismos valores aprobados que S1. La clave publica debe comenzar `sb_publishable_`; nunca subir una clave secreta, `service_role` ni un archivo runtime ya generado. Adaptar el build independiente para generar `js/supabase/configuracion-runtime.js` en el artefacto de Pages. Ambos sistemas deben continuar usando el mismo proyecto Supabase; no crear una base separada para S2.

5. **Actualizar las URLs de Auth en el proyecto compartido cuando el flujo Auth esté implementado.** En Supabase, revisar **Authentication > URL Configuration**. Agregar el origen HTTPS del nuevo sitio a **Redirect URLs** y registrar callbacks/rutas concretos que realmente use S2. Mantener el **Site URL** institucional acordado para el flujo principal; no sustituirlo a ciegas por el URL de S2. Verificar correo de invitación, magic link/OAuth si aplica y retorno al sitio publicado. No habilitar patrones comodín amplios sin necesidad.

6. **Tratar los SQL como una sola base compartida.** `Sistema 2/supabase/` contiene copias del SQL de S1 para referencia, no un esquema independiente. No ejecutar nuevamente las copias en el mismo proyecto Supabase durante el split. Comparar con las migraciones ya aplicadas y continuar con una única fuente de cambios/migraciones coordinada.

7. **Validar antes de anunciar el split.** Confirmar en Actions que el despliegue termina en verde; probar hub, búsqueda, ficha, Cuentas, enlaces institucionales, imágenes, CSS y JS en móvil/escritorio; confirmar en DevTools que la configuración runtime apunta al mismo proyecto aprobado y solo contiene URL + clave publicable. Probar los redirects Auth cuando exista el flujo. Actualizar los enlaces Proyectos de S1 y el menú/footer de S2 con los dominios definitivos.
