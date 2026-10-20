# Handoff para continuar Sistema 2 en su repositorio propio

**Fecha de preparacion:** 2026-10-18 (UTC-6)  
**Proyecto origen:** `Instituto-Nacional-Tecnico-Industrial/web-oficial`  
**Repositorio destino previsto:** `Instituto-Nacional-Tecnico-Industrial/web-oficial-proyectos`  
**Objetivo:** trasladar Sistema 2, dejarlo desplegable de forma independiente y completar su integracion con Sistema 1 y con el mismo proyecto Supabase.  
**Este documento acompana a las carpetas `Sistema 2/` e `IAs/`; no reemplaza el backlog general ni autoriza cambios remotos.**

`IAs/plantillas-sistema-2/` contiene solo marcadores vacios `NO-EJECUTAR-*`, no codigo listo para pegar, ejecutar o desplegar. Consultar la tabla de destinos y limites en `IAs/BACKLOG-TRASLADO-SISTEMA-2.md` antes de completarlos. En particular, no duplicar en S2 el SQL canonico de Sistema 1 ni reemplazar la configuracion runtime del cliente Supabase por la plantilla de destinos.

## Instruccion prioritaria para la IA que reciba el repositorio

Antes de editar:

1. Leer completos `IAs/BACKLOG.md`, `IAs/RESOLUCIONES.md`, este documento y `IAs/BACKLOG-TRASLADO-SISTEMA-2.md`.
2. Leer `Sistema 2/LEEME.md` y revisar el codigo real de la tarea, no dar por cierto que un archivo candidato fue desplegado en Supabase.
3. Ejecutar el inventario de la lista de tareas y comprobar la version/commit que el Instituto copio. La copia puede contener cambios locales aun no publicados en el repositorio remoto.
4. No pedir, copiar ni registrar contrasenas, `service_role`, `NIE`, padrones, listas de alumnos ni datos personales. La URL y la clave `sb_publishable_` se configuran en GitHub Actions Variables; no se versionan valores reales ni `configuracion-runtime.js` generado.
5. No ejecutar SQL ni desplegar Edge Functions sin que Instituto pida instrucciones y confirme el paso. El permiso para trabajar en codigo no es permiso para modificar el proyecto remoto.
6. No retirar aun la copia de `Sistema 2/` del repositorio `web-oficial`. Mantener ambos despliegues mientras se valida el nuevo.

Si se encuentra una discrepancia entre este documento y el codigo, informar la discrepancia y actualizar el backlog/resoluciones antes de declarar una tarea terminada. No corregir ni borrar material ajeno que no sea necesario para el traspaso.

## Producto completo: dos sitios, un sistema institucional

INTIWO es una aplicacion web institucional formada por dos frontends estaticos:

- **Sistema 1:** sitio institucional `web-oficial`; Inicio/CMS, Matricula, Oferta, Personal, Ubicaciones, Historia, Configuraciones y Cuentas.
- **Sistema 2:** portafolio de proyectos; hub, catalogos tecnicos/académicos, filtro/listados, ficha, busqueda, Personalizar y Evaluar.
- Ambos consumen **un solo proyecto Supabase**, `bd_inti_web_oficial` (project ref conocido: `akvprrwjfstncadkybeh`), con Auth/Postgres/Storage. No crear una segunda base para el repositorio nuevo.
- Arquitectura: sitio estatico Jamstack + BaaS cliente-servidor. Pages sirve HTML/CSS/JS; el cliente web llama Supabase Auth/PostgREST/Realtime/Storage. No existe backend Node/PHP propio. Las operaciones que requieren Auth Admin o secretos solo pueden ejecutarse en Edge Function/backend confiable.
- GitHub Pages no protege datos: RLS, grants, RPCs y funciones del servidor son la autoridad. Esconder un boton o comprobar un rol en JavaScript solo mejora la interfaz y nunca sustituye la autorizacion en Supabase.

En el repositorio origen, el workflow actual publica ambos sistemas juntos:

- Raiz publicada: `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/`
- Origen compartido actual: `https://instituto-nacional-tecnico-industrial.github.io`
- Inicio publicado S1: `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/inicio/pagina-inicio-cms.html`
- Hub publicado S2: `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%202/paginas/proyectos/pagina-hub-proyectos.html`
- Hub publicado del repositorio independiente S2: `https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/paginas/proyectos/pagina-hub-proyectos.html`

El despliegue independiente de S2 ya esta publicado y su URL fue confirmada por el Instituto. El despliegue integrado bajo `/web-oficial/Sistema%202/` sigue existiendo como copia dentro del repositorio original; para navegar desde S1 a S2 se debe usar el sitio independiente `web-oficial-proyectos`.

## Navegacion S1 <-> S2: requisito obligatorio

### Destinos oficiales de Sistema 1 confirmados por Instituto (2026-10-18)

Usar estas URL exactas en los anchors del menu hamburguesa y footer de Sistema 2. Mantener `<a href="...">` sin `target="_blank"` para navegar en la misma pestaña:

| Etiqueta | Destino |
|---|---|
| Inicio | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/inicio/pagina-inicio-cms.html |
| Matrícula | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/matricula/pagina-matricula-nuevo-ingreso.html |
| Oferta Académica | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/oferta-academica/pagina-oferta-academica.html |
| Personal | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/personal/pagina-personal-instituto.html |
| Ubicaciones | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/ubicaciones/pagina-ubicaciones.html |
| Historia | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/historia/pagina-historia-instituto.html |
| Configuraciones | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/configuraciones/pagina-configuraciones.html |
| Cuentas | https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%201/paginas/cuentas/pagina-cuentas.html |

Estas URL corresponden a páginas, no a vistas por rol. Configuraciones usa una página común y adapta las opciones a la sesión/rol. Para los enlaces de navegación desde Sistema 1, el Instituto confirmó como destino el sitio independiente de Sistema 2:

https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/paginas/proyectos/pagina-hub-proyectos.html

Los accesos a otras páginas de S2 deben conservar el path de destino bajo ese mismo prefijo, por ejemplo `https://instituto-nacional-tecnico-industrial.github.io/web-oficial-proyectos/paginas/ficha/pagina-ficha-proyecto.html`.

Los botones institucionales del header/menu hamburguesa y del footer de S2 deben llevar a las paginas correspondientes de **Sistema 1** (Inicio, Matricula, Oferta, Personal, Ubicaciones, Historia, Configuraciones/Cuentas, segun el elemento). El link `Proyectos` y los destinos internos de S2 deben quedarse en el nuevo S2. Configuraciones y los formularios institucionales de cuenta viven en S1; no construir otro sistema de autenticacion o de administracion en S2.

Despues del split, no sirven rutas relativas como `../../../Sistema 1/...`, `../Sistema 1/...` ni `../../Sistema 1/...`. Cambiarlas por URL HTTPS absoluta y confirmada de S1 en los archivos de S2 que las usan: encabezado compartido, footer compartido y paginas que contienen copias del cromo. No hay un hub local de Cuentas en S2; su enlace «Cuentas» lleva al portal de Sistema 1. Revisar tambien enlaces a CSS/imagenes de S1. Todo recurso que S2 necesite para dibujarse debe quedar en su propio despliegue o usar un URL absoluto publico confirmado.

**Para navegar entre los dos sistemas:** usar enlaces HTML reales `<a href="URL">...</a>`; no reemplazarlos por `window.open`, handlers de navegacion ni `target="_blank"`. La navegacion institucional S1/S2 debe continuar en la misma pestana, preservando la experiencia de sitio integrado. Esto **no** significa borrar la decision existente de abrir el formulario externo de Google Forms en una pestana nueva: esa es una accion externa separada y ya tiene `rel="noopener noreferrer"`.

Los enlaces de S1 a S2 ya apuntan, en la copia local de `web-oficial`, a URLs HTTPS absolutas bajo `web-oficial-proyectos/`, incluida la URL confirmada del hub y los destinos específicos de ficha/gestión. En S2 también se cambiaron los anchors entre páginas y las rutas creadas por JavaScript para que apunten al mismo dominio independiente; esto hace que incluso la copia integrada antigua continúe la navegación en el sitio separado. El hub integrado bajo `web-oficial/Sistema%202/` se conserva como archivo, pero no debe ser destino de navegación. Publicar S1 en `web-oficial` y sincronizar/publicar todos los cambios de `Sistema 2/` en el repo `web-oficial-proyectos`.

**Nota de diagnóstico (2026-10-18):** el menú de Inicio S1 publicado ya muestra el destino independiente, mientras que la copia publicada de S2 aún mostraba links relativos `../../../Sistema 1/...`. Si se ve esa ruta integrada en la barra, es una página vieja ya abierta o un despliegue S2 sin sincronizar; los cambios locales no actualizan automáticamente la copia del otro repositorio ni cambian la URL de una pestaña abierta.

## Identidad, roles y permisos funcionales

- **Visitante:** anonimo, sin fila en `perfiles`; puede ver solo contenido/proyectos publicados y CMS publico.
- **Administrador:** administra usuarios, configura contenido institucional y ciclos/nombres; alcance institucional en Evaluar. El primer administrador es el usuario matriz definido en las resoluciones. El email matriz solo aplica al bootstrap; permisos normales deben depender de rol y politicas, no de comparar email en el frontend.
- **Docente:** ve/gestiona sus codigos y proyectos de su alcance, puede invitar/gestionar Editores permitidos y revisar/evaluar proyectos. No puede operar fuera de su propiedad/alcance.
- **Editor:** alumno lider asignado a proyecto tecnico y miembro activo del codigo correspondiente. Puede editar campos de contenido permitidos si su asignacion sigue vigente y la edicion no esta bloqueada. No puede publicar, archivar, cambiar permisos ni reasignar lideres.
- **Académico (rol `academico`):** docente de una de las cinco asignaturas académicas (Precalculo, Ciudadanía y valores, Ciencias y tecnología, Inglés, Lenguaje y Literatura). Puede crear proyectos en cualquiera de las cinco asignaturas, editar fichas de proyectos donde es autor, gestionar coautores, asignar grupos activos de 1.º/2.º como mano de obra, publicar/volver privados y archivar/reactivar esos proyectos. El creador se agrega como autor y no puede ser quitado. `edicion_bloqueada` solo afecta a Editores técnicos, no bloquea a los autores de la ficha académica. No gestiona proyectos ajenos, cuentas/invitaciones, codigos tecnicos, ciclos ni CMS; tampoco bloquea/habilita edicion. No se asignan materias por cuenta. Mantiene la ficha académica formal (Roboto Serif, sin color de texto). Solo Admin crea/desactiva cuentas Académico. Estas reglas deben estar aplicadas coherentemente en UI, RPC/RLS y SQL candidato de S1; no afirmar que se aplicaron remotamente.
- `perfil.id` debe ser el mismo UUID que `auth.users.id`. El email/clave pertenecen a Auth, no se duplican como credenciales en tablas.
- Un Editor puede pertenecer a mas de un codigo. `miembro_codigo` es una membresia persistente, distinta de la invitacion y distinta de la asignacion a una ficha.
- Una ficha/proyecto persiste si se desactiva o reemplaza a su Editor. Asignaciones y revocaciones deben conservar historial. La baja de usuario es logica; no borra proyectos, autoria ni visibilidad.
- Visitante/editor/docente/admin no deben poder autoasignarse o modificar `rol` manipulando PostgREST. Comprobarlo con RLS/grants/RPC y pruebas reales.

## Tema diurno/nocturno y consecuencia del split

Los dos sistemas comparten diseño, variables CSS institucionales y selector diurno/nocturno. Ambos ya implementan tema local para visitante y leer/escribir `perfiles.tema` para una sesion autenticada.

**Importante al separar dominios:** `localStorage`, cookies/local session del cliente Supabase y otros almacenamientos del navegador estan aislados por origen. En el despliegue conjunto actual los dos directorios comparten el mismo origen; en `web-oficial` y `web-oficial-proyectos` los origenes normalmente seran diferentes. Por tanto:

- seguir usando el mismo proyecto Supabase y perfil permite recuperar el tema persistido para un usuario cuando inicia sesion en cualquiera de los sitios;
- no asumir que el login se comparte automaticamente entre dominios; un usuario puede tener que autenticarse por separado en cada sitio;
- el tema anonimo guardado en `localStorage` tampoco se comparte automaticamente entre esos dominios; cada sitio puede recordar una preferencia local independiente;
- no transferir tokens Auth, contrasenas ni datos sensibles mediante query string, fragmento, `postMessage` improvisado o URL de retorno. Si Instituto exige compartir la preferencia anonima entre origenes, pedir una decision y diseñar una solucion segura; no simular que ya existe.

## Datos y DER acordados

El DER conceptual y sus decisiones vigentes estan en `IAs/BACKLOG.md` (seccion D, DB-00a..DB-00f y grupo C de Sistema 2) y `IAs/RESOLUCIONES.md`. El esquema candidato de proyectos se encuentra en el repositorio fuente S1, `Sistema 1/supabase/proyectos-core-v2.sql`; es una sola fuente candidata, no ejecutar una copia ubicada en S2.

### Cuentas y estructura academica

- `auth.users` + `public.perfiles` (1:1 por UUID), roles, estado de desactivacion, nombre, tema y atributos protegidos.
- `especialidades`: seis especialidades tecnicas MA/MI/SE/EL/DS/IT y cinco asignaturas academicas PC/CV/CT/IN/LL; no usar `GE`. La clave `slug`/prefijo identifica la entidad; el nombre visible puede variar por ciclo.
- `ciclos_lectivos`: comienza en 2026; Admin incorpora años. Nombres historicos viven en `especialidad_nombres` y no reescriben ciclos anteriores.
- `codigos`: grupos tecnicos por especialidad, nivel y seccion; la misma clave puede repetirse en distintos ciclos, la unicidad debe incluir el ciclo.
- `miembro_codigo`: membresia persistente de perfil a codigo.
- `invitaciones_correo`: invitacion/auditoria; aceptarla y crear perfil/membresia debe mantener coherencia transaccional.
- NIE: cotejo con padron institucional mediante HMAC calculado en servidor; nunca guardar NIE plano ni copiar padron/listas a Git, chat o frontend. HMAC secret y padron solo por proceso privado aprobado.

### Proyectos y etiquetas

- `proyectos` mantiene ID estable, ciclo, creador, titulo/contenido, URLs externas, visibilidad (`publicado`), bloqueo de edicion (`edicion_bloqueada`) y archivo logico (`archivado_en`) como estados independientes.
- Proyecto tecnico: pertenece a un `codigo_id` tecnico. Proyecto academico: referencia asignatura y ciclo, tiene uno o varios Docentes autores y codigos de 1.º/2.º como mano de obra; no se navega por una clave academica inventada como PC2B.
- `proyecto_editores`: asignaciones de Editor separadas de la identidad/contenido de la caja; conservar filas revocadas para historial.
- `proyecto_docente` y `proyecto_codigo_mano_obra`: autorias docentes y grupos participantes en academicos.
- `etiquetas` (catalogo) y `proyecto_etiqueta` (N:M); las etiquetas deben persistir en Supabase.
- En proyectos se guardan textos y URLs http/https, no binarios ni fotos de alumnos. No insertar listas escolares o calificaciones.

### CMS compartido

- Sistema 1 es propietario de Inicio CMS, footer general, contactos EDUCAME y matricula. El contenido CMS se almacena en el proyecto compartido y se lee publicamente con RLS; solo Admin puede escribir.
- Sistema 2 lee el footer general `footer_cms`. No crear una segunda tabla/proyecto Supabase ni CMS duplicado para S2.
- EDUCAME tiene WhatsApp/correo propios; no reemplaza el contacto general del footer.
- El tema del perfil (`perfiles.tema`) puede ser compartido por cuenta autenticada. Contenido de Inicio y contactos no se duplican en la base ni en el HTML de S2.

## Estado de integracion: codigo local vs remoto

### Ya existe localmente en el material de Sistema 2

- `js/supabase/cliente-supabase.js` crea el cliente con URL/clave publishable obtenidas desde `configuracion-runtime.js`; la plantilla fuente no debe contener valores reales.
- `js/auth/sesion-supabase.js` consulta `perfiles` por ID/Auth, publica el evento de estado y alimenta el rol de UI.
- Tema usa `perfiles.tema` cuando hay sesion y `localStorage` para visitante.
- Hub, catalogos, ciclos/nombres historicos, Evaluar, ficha, etiquetas y lista de Editor ya contienen partes de la integracion Supabase/RPC. Revisar cada consulta en el codigo actual; no inferir que los objetos existen en remoto.
- El JS de la ficha persiste datos del proyecto mediante Supabase cuando las tablas/RPC/permisos estan disponibles. Etiquetas usan las RPCs candidatas. La UI de Docente/Admin usa RPCs del SQL candidato.
- Footer S2 ya consulta `footer_cms`.
- Muchos enlaces de menu/footer/Logo/Cuentas y la hoja CSS de Cuentas referencian `Sistema 1` mediante rutas relativas: requieren conversion para el split.

### Incompleto o por demostrar

- **Catalogo/listado publico:** la ruta de `listado-cajas-codigo.js` en el codigo revisado termina pintando `[]` y textos de estado; no implementa aun una consulta remota de proyectos. Verificar y completar: tecnico por codigo/ciclo, academico por asignatura/ciclo, global por etiqueta. La busqueda tambien debe trabajar con datos reales, no solo con etiquetas/titulos estaticos.
- **Despliegue independiente:** el workflow/build del repo origen espera carpetas `Sistema 1/` y `Sistema 2/`. Copiar solo `Sistema 2/` no crea un workflow Pages valido; el repo nuevo necesita build/workflow independiente y el prefijo de Pages real.
- **Auth URL/callback:** el callback dinamico `window.location.href` solo funciona si el URL exacto esta en Redirect URLs de Auth. Despues del split se debe permitir solo el conjunto de rutas necesarias en el nuevo path. No abrir comodines para todo el dominio.
- **Sesion y tema:** diferentes origenes significan almacenamiento/session separados, aunque usen una sola base. Ver la seccion anterior.
- **RLS/RPC y esquema remoto:** las funciones JS pueden estar listas pero fallar hasta que el proyecto remoto tenga exactamente el esquema/policies/RPC correspondientes.
- **Aceptacion por roles:** visitante, Editor, Docente, Academico y Admin requieren prueba de lectura y escritura por cuentas autorizadas reales; interfaz visible no prueba los permisos.
- **Admin de proyectos:** operaciones de alta/ciclo/autoría/estado/asignaciones se apoyan en RPCs del SQL candidato; confirmar parametros y permisos contra la version desplegada.
- **Realtime:** la lista Editor intenta suscribirse a cambios; confirmar disponibilidad de Realtime y mantener recarga manual/visibilidad de errores como fallback.
- **SQL de proyectos y contactos:** hay borradores locales en el repo S1, pero no se debe afirmar que esten aplicados ni volverlos a ejecutar sin cotejo.

### Ultimo estado remoto que se conoce (no es una lectura en vivo)

El ultimo diagnostico estructural reportado en las resoluciones encontro Auth/email y estructuras de cuentas existentes; la funcion `invitar-cuenta` estaba desplegada segun el Instituto. La informacion recibida indicaba `perfiles`, `especialidades`, `codigos`, `miembro_codigo`, `invitaciones_correo`, funciones Auth/NIE y `contenido_inicio`; no reportaba entonces `proyectos`, ciclos, nombres historicos ni `footer_cms`. El proyecto tambien tiene SQL candidatos locales posteriores para proyectos, ciclos, nombres, CMS de contactos y otros cambios. Ese resultado es un corte historico: el Instituto dijo que habia ejecutado la mayoria de SQL anteriores. **No usarlo como fotografia actual ni ejecutar una migracion por deduccion.** Repetir el diagnostico de solo lectura cuando Instituto pida instrucciones y trabajar sobre el resultado reciente.

La lista de diagnosticos en `Sistema 1/supabase/diagnostico-proyectos-configuracion.sql` inspecciona estructura (columnas, constraints, RLS/policies, indices y triggers), no muestra filas de alumnos y no modifica la base. El archivo candidato `proyectos-core-v2.sql` sigue siendo del repo fuente S1 y no debe ejecutarse como SQL de S2.

## Orden recomendado de trabajo

Consultar `IAs/BACKLOG-TRASLADO-SISTEMA-2.md`; el orden minimo es:

1. Inventariar el paquete copiado, conservar version/fuentes y confirmar destino/URL del repo nuevo.
2. Eliminar dependencias de rutas relativas al vecino `Sistema 1`; convertir navegacion S1/S2 a anchors HTTPS absolutos same-tab y conservar los recursos locales de S2.
3. Preparar build y GitHub Pages independientes; configurar URL y publishable key como Actions Variables y probar rutas directas/recarga.
4. El enlace Proyectos de S1 ya apunta en la copia local al URL confirmado de S2; sincronizar/publicar los cambios y mantener temporalmente el S2 integrado en la publicacion antigua hasta validar ambos despliegues.
5. Revisar callbacks Auth de S2 y configurar la allowlist minima con el URL real publicado; comprobar inicio de sesion/cierre y retorno. No cambiar Site URL del proyecto sin una necesidad probada y aprobacion.
6. Revalidar las consultas/RPCs de S2 contra el esquema remoto con diagnostico reciente; producir instrucciones de SQL solo cuando el Instituto lo pida.
7. Completar listados publicos/busqueda remotos y pruebas autenticadas RLS por rol; comprobar navegacion S1↔S2 y tema.
8. Solo cuando el sitio nuevo funcione y S1 apunte al mismo, pedir aprobacion antes de quitar S2 del workflow/copia del repo `web-oficial`.

## Criterios de cierre del traspaso

- El repo nuevo publica en Pages y recarga directamente todas las rutas HTML activas sin 404 de assets/rutas.
- Links entre S1 y S2 son anchors HTML, se abren en la misma pestaña y apuntan a URLs oficiales verificados. La copia local ya usa URLs absolutos para esos cruces; falta sincronizar/publicar los cambios para que surtan efecto en ambos sitios.
- Footer y menu hamburguesa de S2 conservan todos los destinos de S1 y los destinos internos de S2; el enlace Proyectos de S1 llega al URL nuevo.
- El cliente de S2 usa la misma URL Supabase y `sb_publishable_` que S1, inyectadas en build; no hay service key ni runtime generado versionado.
- Auth retorna a destinos allowlisted del nuevo S2; se documenta que la sesion no cruza origenes automaticamente.
- Tema: preferencia Auth `perfiles.tema` compartida cuando el usuario se autentica en cada origen; visitantes pueden tener preferencias locales separadas, salvo decision segura aprobada.
- Listados y busqueda muestran proyectos reales publicados; filas privadas/archivadas solo son visibles a actores autorizados conforme a RLS.
- Pruebas verifican que Editor no cambia flags/archivo/asignacion, Docente no sale de sus codigos/proyectos, Academico crea en cualquiera de las cinco asignaturas y gestiona solo proyectos propios como autor sin permisos administrativos, Administrador tiene alcance institucional y anonimo no ve borradores.
- SQL/Edge solo se cambia y se declara aplicado con evidencia/permiso del Instituto; un build exitoso no equivale a una prueba de Supabase.

## Reglas finales

- La base compartida se gestiona desde el repo de Sistema 1 como fuente SQL canonica; `Sistema 2/supabase/` son copias/documentacion, no deben ejecutarse como segunda BD.
- No borrar el Sistema 2 del origen, no eliminar historial, no hacer commit/push ni publicar sin instruccion del Instituto.
- No almacenar secretos, padrones, contrasenas, NIE plano ni datos identificables de estudiantes en este repo o en el handoff.
- Mantener enlaces internos en misma pestana. No introducir `window.open` para saltar entre sistemas.
- Registrar avances y evidencia en `IAs/BACKLOG-TRASLADO-SISTEMA-2.md` y, si hay cambios en tareas canonicas, sincronizar las marcas en `IAs/BACKLOG.md` + `IAs/RESOLUCIONES.md`.
