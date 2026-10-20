# Backlog de traslado e integracion de Sistema 2

Este backlog acompana a `IAs/HANDOFF-SISTEMA-2.md`. Las tareas se deben cerrar con evidencia y sin inferir que un cambio local fue aplicado o desplegado. Ninguna tarea autoriza ejecutar SQL, cambiar Supabase, desplegar Edge Functions, publicar Pages, hacer push ni borrar la copia del origen sin instruccion expresa del Instituto.

Marcas: `[ ]` pendiente, `[~]` en curso, `[x]` implementado y validado en el alcance descrito. Un `[x]` de codigo local no significa que Supabase remoto este actualizado.

## Plantillas vacias

Los archivos `IAs/plantillas-sistema-2/NO-EJECUTAR-*` tienen **cero bytes intencionalmente**: son marcadores para que la siguiente IA redacte los entregables de las tareas relacionadas. No contienen codigo ejecutable, no se deben pegar en Supabase, desplegar ni importar como si ya estuvieran implementados. Antes de llenar cada una, leer esta tarea y sus criterios; copiar el resultado al destino final indicado y probarlo.

| Plantilla | Uso y destino |
|---|---|
| `NO-EJECUTAR-build-pages-s2.mjs` | Punto de partida de la tarea 8; el script validado va a `.github/scripts/build-pages.mjs` del repo nuevo. |
| `NO-EJECUTAR-deploy-pages-s2.yml` | Punto de partida de la tarea 9; el workflow validado va a `.github/workflows/deploy-pages.yml` del repo nuevo. |
| `NO-EJECUTAR-configuracion-destinos-s2.js` | Inventario/plan de URLs para tareas 4–7 y 12–13; no reemplaza `Sistema 2/js/supabase/configuracion-runtime.js` ni debe contener secretos. |
| `NO-EJECUTAR-callbacks-s2.js` | Hoja de inventario para la tarea 12; registrar rutas y decisiones, no desplegarla como modulo de la aplicacion. |
| `NO-EJECUTAR-pruebas-integracion-s2.test.mjs` | Punto de partida para pruebas de las tareas 11 y 14–23; las pruebas terminadas deben ubicarse en `tests/` y ejecutarse con el proyecto configurado. |
| `NO-EJECUTAR-candidato-cambios-proyectos.sql` | Borrador de trabajo para la tarea 17, solo si se requieren cambios nuevos tras el diagnostico. El SQL definitivo debe incorporarse una sola vez en la fuente canonica `Sistema 1/supabase/`; no ejecutar una copia desde S2 ni confundirla con el diagnostico de solo lectura existente en S1. |

La salida de la consulta de diagnostico remoto de la tarea 16 se revisa como resultado, no se guarda ni duplica como otro SQL: el script de solo lectura que se debe usar ya esta en `Sistema 1/supabase/diagnostico-proyectos-configuracion.sql`.

## URLs oficiales de Sistema 1 recibidas del Instituto

Usar estos destinos exactos para enlaces S2→S1; todos deben ser anchors `<a href>` en la misma pestaña. No son URLs distintas por rol:

| Destino | URL |
|---|---|
| Inicio | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/inicio/pagina-inicio-cms.html |
| Matrícula | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/matricula/pagina-matricula-nuevo-ingreso.html |
| Oferta Académica | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/oferta-academica/pagina-oferta-academica.html |
| Personal | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/personal/pagina-personal-instituto.html |
| Ubicaciones | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/ubicaciones/pagina-ubicaciones.html |
| Historia | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/historia/pagina-historia-instituto.html |
| Configuraciones | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/configuraciones/pagina-configuraciones.html |
| Cuentas | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/cuentas/pagina-cuentas.html |
| Proyectos (Sistema 2) | https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/paginas/proyectos/pagina-hub-proyectos.html |

Configuraciones es una página común que adapta sus opciones a la sesión/rol; no pedir direcciones diferentes por rol. Instituto confirmó la URL pública de S2 y se verificó que el hub y las páginas enlazadas de ficha/gestión docente responden. La copia local de `web-oficial` ya apunta los enlaces intersistema a los sitios publicados; en S2 se han fijado también los enlaces de páginas y rutas generadas por JavaScript al dominio independiente. Falta sincronizar/publicar esos cambios en ambos repositorios para que surtan efecto.

## Etapa A — Preparar la copia

1. [ ] **Confirmar el contenido trasladado.** Verificar que `Sistema 2/` y `IAs/` copiados corresponden a la version que Instituto quiere usar; anotar commit/hash si existe. Revisar que no haya `.env`, configuracion runtime real, `_site/`, contrasenas, service key, NIE plano o padron.
   - **Criterio:** inventario del arbol y origen versionado documentados, sin secretos/datos personales.
2. [ ] **Leer handoff y reglas del proyecto.** Leer de inicio a fin `IAs/BACKLOG.md`, `IAs/RESOLUCIONES.md`, `IAs/HANDOFF-SISTEMA-2.md`, este backlog y `Sistema 2/LEEME.md`.
   - **Criterio:** no se adopta ningun SQL por copiarlo; discrepancias apuntadas antes de editar.
3. [x] **Confirmar URL publica destino.** Instituto proporcionó la URL publicada y se verificó que abre el hub de Proyectos.
   - **URL confirmada:** `https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/paginas/proyectos/pagina-hub-proyectos.html`.

## Etapa B — Enlaces y recursos intersistema

4. [ ] **Eliminar referencias relativas a S1.** Buscar en todos los HTML/CSS/JS `Sistema 1`, `../../../Sistema 1`, `../../Sistema 1`, `../Sistema 1` y `TODO-SPLIT-REPO`.
   - **Criterio:** cada uso esta convertido a URL HTTPS de S1 confirmada o a un recurso que se copia correctamente a S2; no hay enlaces que escapen la raiz de Pages.
5. [ ] **Header/menu hamburguesa.** Logo, Inicio, Matricula, Oferta, Personal, Ubicaciones, Historia, Configuraciones y Cuentas deben redirigir a sus destinos S1 correctos; Proyectos y todas las páginas internas deben usar URLs absolutas del sitio independiente S2 (no rutas relativas a la copia integrada).
   - **Criterio:** enlaces HTML `<a href="...">`; mismo tab (sin `target="_blank"` ni `window.open`) para todas las rutas S1/S2; verificar cada destino.
6. [ ] **Footer y enlace de Cuentas.** Enlazar menu/footer/Cuentas a S1 por URLs absolutas. El portal/formularios de acceso viven solo en S1; S2 no debe cargar una hoja de estilos ni scripts locales para login. Resolver cualquier icono/imagen/css remoto para que no dependa de una ruta hermana inexistente.
   - **Criterio:** cargar directo cada pagina publicada y no encontrar 404 de CSS, imagen o enlace institucional; el enlace Cuentas abre S1 en la misma pestaña.
7. [ ] **Enlaces de navegación entre sistemas.** Los anchors de Proyectos en S1 y los destinos a S1/S2 en la copia local ya apuntan a sus URLs públicas absolutas. Sincronizar/publicar los cambios en ambos repositorios y verificar que desde el menú de S1 se llega a `web-oficial-proyectos` (no a `web-oficial/Sistema%202`).
   - **Criterio:** verificar tras publicar que la navegación cambia de sistema en la misma pestaña; mantener la copia actual S2 del despliegue viejo hasta completar validación.

## Etapa C — GitHub Pages independiente

8. [ ] **Build de S2 desde raiz.** Preparar el script de build independiente, preservando paths relativos, paginas y recursos y el prefijo real `/web-oficial-proyectos/`.
   - **Plantilla de trabajo:** `IAs/plantillas-sistema-2/NO-EJECUTAR-build-pages-s2.mjs`.
   - **Destino final previsto:** `.github/scripts/build-pages.mjs`.
   - **Criterio:** build local produce un artefacto completo sin requerir carpeta `Sistema 1/`; no commitea runtime generado.
9. [ ] **Workflow Pages propio.** Crear workflow que construya y publique el artefacto S2 en GitHub Pages.
   - **Plantilla de trabajo:** `IAs/plantillas-sistema-2/NO-EJECUTAR-deploy-pages-s2.yml`.
   - **Destino final previsto:** `.github/workflows/deploy-pages.yml`.
   - **Criterio:** validacion de GitHub Actions pasa; `Settings > Pages` usa GitHub Actions; revisar manualmente URL y recarga de rutas.
10. [ ] **Configurar el cliente Supabase en Actions.** Crear las variables de Actions `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` con los mismos valores del proyecto compartido aprobados por Instituto. El build genera `js/supabase/configuracion-runtime.js` en el artefacto, no en Git.
   - **Criterio:** ambos clientes apuntan al mismo project ref; solo clave publica `sb_publishable_`; no solicitar ni usar `service_role`.
11. [ ] **Prueba de paginas y assets.** Probar hub, catalogos, filtro, listados, ficha, guia, Evaluar, Cuentas, menu/footer, iconos, CSS/JS, dispositivos movil/escritorio y recarga directa con el URL publicado.
   - **Criterio:** sin errores 404, consola fatal, rutas rotas ni overflow nuevo; anotar fallos con URL/pagina.

## Etapa D — Auth, sesion y tema

12. [ ] **Auditar todos los callbacks S2.** Buscar `emailRedirectTo`, `redirectTo`, `window.location.href`, `auth.signUp`, recovery/invite y rutas `type=invite|recovery`.
   - **Plantilla de inventario, no codigo de produccion:** `IAs/plantillas-sistema-2/NO-EJECUTAR-callbacks-s2.js`.
   - **Criterio:** cada callback final va al destino exacto permitido; ninguna funcion retorna por accidente a un path ya eliminado.
13. [ ] **Preparar allowlist minima Auth.** Cuando S2 este publicado, registrar en Supabase Redirect URLs solo los callbacks exactos necesarios del nuevo sitio y validar la ubicacion final de la invitacion/recovery (S1 administra Cuentas).
   - **Criterio:** lista y resultado documentados; no wildcard para todo el dominio o para todo `/`.
   - **Bloqueo:** no editar dashboard ni cambiar Site URL sin instruccion explicita de Instituto.
14. [ ] **Probar autenticacion en ambos origenes.** Probar login/logout, sesion/perfil, callback invite/recovery y permisos por rol en S1 y S2.
   - **Criterio:** explicar que cada origen puede requerir login separado; no intercambiar tokens por URL.
15. [ ] **Probar tema.** Verificar que el perfil autenticado recupera/guarda `perfiles.tema` en ambos sitios; visitante sigue usando preferencia local.
   - **Criterio:** la preferencia de perfil se ve igual despues de iniciar sesion en ambos. Documentar que `localStorage` anonimo queda separado por origen; no inventar puente inseguro.

## Etapa E — Proyectos y verificacion Supabase

16. [ ] **Obtener diagnostico remoto reciente, solo cuando Instituto lo pida.** Ejecutar por el usuario `Sistema 1/supabase/diagnostico-proyectos-configuracion.sql` en SQL Editor y entregar el resultado estructural sin datos de filas.
   - **Criterio:** identificar objetos presentes/ausentes, RLS/grants/RPC/triggers actuales. No reutilizar un diagnostico antiguo como estado remoto de hoy.
17. [ ] **Cotejar funciones JS y contratos con el resultado.** Revisar `proyectos-core-v2.sql` en el repo S1 frente a estructura vigente y las consultas/RPC actuales de S2.
   - **Criterio:** entregar lista exacta de diferencias y archivos; SQL canonico solo en S1, una vez; nunca generar una migracion duplicada para ejecutar desde S2.
18. [ ] **Conectar listados publicos a datos reales.** Completar `Sistema 2/js/catalogo/listado-cajas-codigo.js`: actualmente prepara contexto/plantillas pero entrega lista vacia sin consulta remota.
   - **Criterio:** tecnico filtra codigo+ciclo; academico asignatura+ciclo; etiqueta lista proyectos publicados; errores visibles; anonimo no accede a privado/archivado.
19. [ ] **Conectar/verificar busqueda publica real.** Revisar si la busqueda deja de usar solo sugerencias estaticas y consulta proyectos/etiquetas visibles reales.
   - **Criterio:** query vacia, coincidencias, fuzzy/sugerencias y filtro etiqueta funcionan sobre datos permitidos por Supabase; no exponer drafts.
20. [ ] **Verificar fichas, evaluacion y ciclo.** Probar lectura/escritura de ficha, auto-guardado, preview, asignaciones, estado publicado, bloqueo, archivo, autorias academicas, ciclos y nombres historicos.
   - **Criterio:** cada RPC/consulta coincide con el SQL realmente desplegado; mensajes de error no aparentan exito.
21. [ ] **Pruebas de aceptacion RLS por rol.** Usar cuentas de prueba autorizadas de Visitante/anon, Editor, Docente, Academico y Admin; no pedir nominas reales.
   - **Criterio:** editar/leer proyecto ajeno y cambiar `rol`, `publicado`, `edicion_bloqueada`, archivo, autoria o asignaciones sin permiso se rechaza en servidor.
22. [ ] **Realtime y fallback Editor.** Validar que cambios de asignacion aparezcan en lista; si Realtime no esta habilitado, recarga manual/retorno a pestaña debe seguir funcionando con aviso.
   - **Criterio:** errores de suscripcion no esconden errores ni bloquean la carga manual.
23. [ ] **Cierre con S1 y preservacion del origen.** Confirmar en navegador navegacion S1→S2 y S2→S1; mantener el S2 antiguo hasta aprobacion para retirar o dejar de publicar la copia.
   - **Criterio:** evidencia de URLs y commit; no borrar la copia ni publicar/eliminar recursos remotos sin permiso.

## Inventario Supabase para no duplicar trabajo

| Elemento | Fuente canonica | Estado documentado | Instruccion |
|---|---|---|---|
| Proyecto Supabase/Auth | `bd_inti_web_oficial` | Proyecto unico; proveedor email confirmado habilitado; estado operativo actual debe revalidarse | No crear otra instancia |
| Perfiles, invitaciones, NIE/HMAC, membresias | SQL/Auth de S1 + Edge `invitar-cuenta` | Candidatos y uso remoto reportado; nunca afirmar que todos los incrementales estan aplicados sin diagnostico/evidencia | No redeplegar/re-ejecutar por rutina |
| `contenido_inicio` y bucket `inicio` | `Sistema 1/supabase/contenido-inicio-cms.sql` | Candidato local previo; la tarea de CMS lo usa; confirmar esquema actual antes de repetir | No copiar/ejecutar en S2 |
| `footer_cms` | `Sistema 1/supabase/tabla-footer-cms.sql` | Candidato local, tarea 201 requiere validacion remota | S2 solo lee la misma fila |
| EDUCAME/Matricula CMS | `Sistema 1/supabase/cms-contactos-programas.sql` | Candidato local, depende de tabla-footer-cms | No ejecutar hasta cotejo e instruccion |
| Proyectos, ciclos, nombres, etiquetas, RPC/RLS | `Sistema 1/supabase/proyectos-core-v2.sql` + seed de etiquetas | Candidato local revisado, no validado con PostgreSQL ni demostrado aplicado | Este backlog no autoriza SQL |
| Edge `invitar-cuenta` | `supabase/functions/invitar-cuenta/index.ts` en repo S1 | Despliegue reportado; el split no justifica reemplazo | No crear segunda funcion |

Los valores reales de Action Variables y el estado actual del dashboard no se documentan aqui. La lista es un inventario de archivos/categorias, no un plan listo para pegar en SQL Editor.
