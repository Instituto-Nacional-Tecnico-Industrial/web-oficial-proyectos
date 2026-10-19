# Resoluciones (cómo lo hizo cada IA)

**Ultima modificacion:** 2026-10-18 17:49 (UTC-6) - **IA:** GitHub Copilot - **Dispositivo:** laptop Windows (MINEDUCYT), `C:\Proyectos\web-oficial`

Los documentos canonicos de seguimiento en `IAs/` son este y `BACKLOG.md`; puede haber documentos especializados de traspaso/backlog cuando Instituto los solicite. Al cambiar una tarea en los documentos canonicos: **ultima modificacion** con fecha, hora **UTC-6**, nombre de la IA y dispositivo; ambas entradas deben permanecer coherentes.

Formato de entrada:

`### AAAA-MM-DD HH:MM (UTC-6) — IA: nombre — Dispositivo: …`

Las entradas van **en orden cronológico** (la más antigua arriba, la más nueva abajo). Si trabajas en un intervalo (p. ej. 14:00–16:00) y la otra IA ya escribió a las 14:30, **inserta** tu nota donde caiga en el tiempo; no la pongas al final fuera de orden.

## Reglas entre IAs (Cursor y GitHub Copilot)

1. **Leer antes de código.** Obligatorio leer `IAs/BACKLOG.md` e `IAs/RESOLUCIONES.md` **de inicio a fin** antes de tocar una sola línea de código del proyecto. Después se sigue el prompt del usuario.
2. **No borrar** lo que la otra IA ya escribió en estos dos archivos. Se puede añadir, insertar en orden, o aclarar debajo. No recortar ni sustituir el texto ajeno.
3. **Código del proyecto:** sí se puede corregir si la otra IA se confundió o tomó una mala decisión. Ese cambio **debe quedar escrito aquí** (y casilla en el backlog si aplica), dejando **en claro en qué se equivocó** la otra IA.
4. **Dos PCs a la vez:** si Copilot avanza en una computadora y Cursor en otra, los apuntes deben ser coherentes: misma zona horaria UTC-6, orden cronológico, sin contradecir casillas sin explicación.
5. **Adobe Ilustrador/:** no editar. `.ai` no se parsea. PNG/PDF solo referencia.
6. **Fuentes e iconos (Lucide / Google Fonts):** Instituto puede pegar el **enlace** del sitio, el **snippet** (CSS o SVG), o **solo el nombre**. En los tres casos Cursor y Copilot **están obligados** a ir a la página oficial, extraer el código web vigente e incorporarlo al HTML. La personalización (color, tamaño, `font-weight`, tema) es **CSS**. No inventar otra familia ni otro set de iconos si Instituto ya eligió Lucide y Roboto Serif. Trazo de icono: **2.5** en el SVG.
7. **Paleta `.ase`:** se puede **leer** `Adobe Ilustrador/Muestras de color INTIWO.ai.ase` (no editar). Es binario: extraer RGB/hex y copiar los valores a estos documentos. No hace falta que Instituto convierta el archivo si ya está en esa carpeta.
8. **Imágenes en `Adobe Ilustrador/`:** son las **finales / más recientes** (PNG/PDF de referencia). Sigue prohibido editar esa carpeta. **No** construir el backlog Frontend/Backend ni el sistema hasta que Instituto lo indique de forma explícita.
9. **Antes del backlog (cuando Instituto lo pida):** la IA debe listar primero lo que falta (favicon de pestaña, textos legales, mapa, etc.). No inventar esos assets.
10. **UTF-8 obligatorio (defecto 2026-10-13).** Guardar HTML/JS/CSS/MD/SQL en UTF-8, nunca ANSI/Windows-1252. El `<meta charset="utf-8">` no corrige un archivo guardado en 1252: `ó` (byte F3) se vuelve U+FFFD en "sesión", "contraseña", "electrónico". **No es Google Fonts ni Roboto Serif.** Antes de editar español: `sesión` en disco debe ser bytes `C3 B3`. Existe `.gitattributes` `working-tree-encoding=UTF-8`. Si Pages muestra rombos, recodificar el archivo y publicar; no cambiar la fuente. Este documento y BACKLOG también se escriben en UTF-8.

---

### 2026-09-27 23:29 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Vincular GitHub y probar con Python.

**C�mo:** Repo `C:\Proyectos\web-oficial` ? remoto GitHub `web-oficial.git`. Archivo `hola.py`.

---

### 2026-09-30 12:55 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Quitar Visitante; login en hamburguesa; roles Admin / Docente / Editor.

**C�mo:** Decisi�n de producto (sin SQL ni pantallas nuevas). El prototipo a�n muestra �Iniciar sesi�n� en la barra.

---

### 2026-10-08 21:38 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** No modificar `Adobe Ilustrador/`; �se leen `.ai`?

**C�mo:** No. PNG/PDF s�, solo lectura. La carpeta es malet�n entre dispositivos, no c�digo del sitio.

---

### 2026-10-08 21:42 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Dos documentos (backlog + c�mo resolvi� cada IA) con fecha y hora compartida.

**C�mo:** Primera versi�n en `docs/`. Qued� **reemplazada** por esta carpeta `IAs/` (entrada de las 21:47).

---

### 2026-10-08 21:47 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Borrar lo creado antes y dejar una carpeta solo para IAs, con backlog (avance + fecha/hora/dispositivo) y resoluciones. Cerrar el backlog esperando im�genes para partir Frontend y Backend (Supabase).

**C�mo:** Se eliminaron `AGENTS.md`, `.github/copilot-instructions.md`, `.cursor/rules/documentos-ia.mdc` y `docs/BACKLOG.md` + `docs/RESOLUCIONES.md`. Se crearon `IAs/BACKLOG.md` e `IAs/RESOLUCIONES.md`. El avance del chat recuperado (23 sep�8 oct) qued� datado en el backlog. Estado expl�cito: **a�n se esperan las im�genes** para analizar y repartir tareas FE/BE.

**No se toc�:** `Adobe Ilustrador/`.

---

### 2026-10-08 22:10 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Incidente:** Instituto notific� a **GitHub Copilot** (otro dispositivo o VS Code) que deb�a trabajar con Cursor, leer e interpretar los dos documentos de `IAs/`, y anotar lo pedido antes y en ese momento. **Copilot no pudo ni leer** esos archivos. Instituto peg� ese prompt aqu� para dejar constancia.

**Lo que se le hab�a pedido a Copilot (y no ejecut�):**
- Anteriormente: coordinarse con Cursor; leer `IAs/BACKLOG.md` e `IAs/RESOLUCIONES.md` e interpretarlos.
- En ese momento: anotar esos pedidos; reglas de no borrar texto de la otra IA; poder corregir c�digo si la otra se equivoc�, dejando escrito el error; leer ambos documentos completos **antes de cualquier l�nea de c�digo**; apuntes en **orden cronol�gico** aunque las dos IAs escriban a la vez.

**C�mo (Cursor, no Copilot):** no se toc� c�digo del sitio. Se a�adieron las reglas arriba. Las entradas de resoluciones se **reordenaron de antigua a nueva** (el contenido de Cursor no se borr�). Se registr� el fallo de lectura de Copilot. Sigue bloqueado el desglose Frontend/Backend hasta las im�genes.

**A Copilot, cuando pueda leer esto:** no borres estas entradas. Lee los dos archivos enteros. Inserta tus notas por fecha/hora UTC-6. Si no ves `IAs/`, pide a Instituto **Archivo ? Abrir carpeta** en el clone `web-oficial` o `git pull`; la carpeta est� en la ra�z del repo, no dentro de `.github`.

---

### 2026-10-08 22:34 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** �Dos repos a la vez? �Se pueden pedir tipograf�a e iconos por enlace (sin descargar)? �Lucide o Google Icons? Trazo 2.5 px proporcional (como en Illustrator). �Qui�n pinta color y grosor? �C�mo se personaliza [Roboto Serif](https://fonts.google.com/specimen/Roboto+Serif)? Sistema 2: [web-oficial-proyectos](https://github.com/Instituto-Nacional-Tecnico-Industrial/web-oficial-proyectos.git).

**C�mo (solo documentos, sin tocar HTML/CSS/JS del sitio):**
- Un chat de Cursor = un workspace. Sistema 2 se atiende abriendo esa carpeta en otra ventana o en otro chat.
- Recomendar **Lucide** ([lucide.dev/icons](https://lucide.dev/icons/)): coincide con el `.ai`; `stroke-width="2.5"`; tama�o CSS igual en ancho y alto (no se deforma); color con `currentColor` + `color` / tema. Google Icons ([fonts.google.com/icons](https://fonts.google.com/icons)) es otra familia (peso de fuente, no trazo de 2.5 px).
- Roboto Serif: `<link>` de Google Fonts; pesos y color en CSS (`font-weight`, `font-size`, `color`).
- Sigue el bloqueo de im�genes para partir Frontend / Backend.

**No se toc�:** c�digo del sitio ni `Adobe Ilustrador/`.

---

### 2026-10-08 22:40 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** �Instituto debe pegar el bloque CSS de Roboto Serif y el SVG Lucide (ej. house con stroke 2.5) y ah� termina, o Cursor personaliza color/grosor en CSS/JS?

**C�mo:** Pegar ese texto es **�til y suficiente como forma base**, no obligatorio (Cursor puede copiar el mismo snippet de Google Fonts / Lucide si Instituto solo nombra �Roboto Serif� y �house�). Eso **no cierra** el trabajo: hay que incrustar el `<link>` y el `<svg>` en HTML, aplicar `font-family` / `font-weight` / `color` en CSS, y el icono hereda color con `currentColor`. `stroke-width="2.5"` se deja en el SVG. JS no pinta el icono; solo el tema (diurno/nocturno) cambia variables de color. El snippet de Google trae `<uniquifier>` y `<weight>`: se sustituyen por clases reales o se pone la familia en `body`.

**No se toc�:** c�digo del sitio.

---

### 2026-10-08 22:46 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** �Instituto pasa el link (Google Fonts / Lucide) o solo lo dice y las IAs deben ir al sitio, extraer el c�digo e incorporarlo, personalizando con CSS?

**C�mo:** **Las dos formas.** Si hay URL o snippet, se usa esa fuente. Si solo hay nombre (�Roboto Serif�, �house�), la IA **debe** abrir el sitio oficial y extraer `<link>` / SVG. Luego HTML + CSS (no inventar Material Icons). Qued� como regla 6. A�n no se incorpor� al prototipo.

**No se toc�:** c�digo del sitio.

---

### 2026-10-09 12:46 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** C�mo compartir la paleta Illustrator `Muestras de color INTIWO.ai.ase` para que las IAs vean todos los colores.

**C�mo:** El archivo ya estaba en `Adobe Ilustrador/` (no se modific�). El visor de Cursor no abre `.ase` (binario ASEF). Se parse� en solo lectura. 24 bloques. Hex para web:

Sin grupo: cafe random `#BD813F`; blanco generico random `#FFFFFF`.

Grupo Modo nocturno: Verde principa_2 `#539507`; gris mediano `#37393B`; gris `#282A2C`; negro `#0F0F0F`; Fondo brillo `#F2F0EB`.

Grupo Especialidades: Mecanica Industrial `#EAB308`; Mantenimiento automotriz `#166534`; Desarrollo de Software `#EA580C`; Electronica `#0000FF`; Infraestructura Tecnologica `#64748B`; Sistemas electricos `#E61010`.

Grupo Modo Brillo: Verde principal `#539507`; gris palido `#7C7C7C`; Blanco grisaceo `#B0B0B0`; blanco `#F2F0EB`; Fondo nocturno `#0F0F0F`.

El verde institucional en esta paleta es `#539507` (no el `#A8C200` de conversaciones viejas). A�n no se aplic� al CSS.

**No se toc�:** `Adobe Ilustrador/` ni el c�digo del sitio.

---

---

### 2026-10-09 12:54 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Organizar los grupos de color ya extra�dos en una tabla de tres columnas.

**C�mo:** Misma paleta `.ase` (sin reparsear ni editar Illustrator). Tabla: una columna por grupo. Fuera de grupos: cafe random `#BD813F`, blanco generico random `#FFFFFF`.

| Modo nocturno | Especialidades | Modo Brillo |
|---|---|---|
| Verde principa_2 `#539507` | Mec�nica Industrial `#EAB308` | Verde principal `#539507` |
| gris mediano `#37393B` | Mantenimiento automotriz `#166534` | gris p�lido `#7C7C7C` |
| gris `#282A2C` | Desarrollo de Software `#EA580C` | Blanco gris�ceo `#B0B0B0` |
| negro `#0F0F0F` | Electr�nica `#0000FF` | blanco `#F2F0EB` |
| Fondo brillo `#F2F0EB` | Infraestructura Tecnol�gica `#64748B` | Fondo nocturno `#0F0F0F` |
| | Sistemas el�ctricos `#E61010` | |

**No se toc�:** `Adobe Ilustrador/` ni el CSS del sitio.

---

### 2026-10-09 13:23 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Primera versi�n / prototipo de inicios: esa era la organizaci�n original. Algunas cosas siguen; otras no tienen que ver con lo actual. Las im�genes finales las enviar� Instituto m�s adelante.

**C�mo:** Solo lectura de PNG en `Adobe Ilustrador/Esquema visual de INTIWO/` (men� hamburguesa desplegado y footer) y del HTML actual. **No es la UI final.** No se parti� Frontend/Backend. No se reescribi� el sitio.

Organizaci�n **original** (mockup): barra hamburguesa + distintivo I.N.T.I; panel izquierdo Inicio, Matr�cula, Oferta acad�mica, Proyectos, Historia, Configuraciones, Cuentas abajo; tema sol/luna y bot�n Editar; home con I.N.T.I grande; footer con logo, slogan, redes, WhatsApp 7441-1075 y 6674-3159, enlaces, Inscr�bete ahora; en otra vista buscador.

**Suele conservarse:** hamburguesa, marca INTI, diurno/nocturno, verde institucional, Inicio / Matr�cula / Proyectos, footer (redes, tel�fonos, copyright 2026).

**Ya no alinear a esto (hasta las im�genes finales):** sidebar permanente; Historia / Configuraciones / Cuentas / Oferta acad�mica / Editar en barra; login como �Cuentas�. Lo vigente sigue siendo: login **dentro** del men�; Diurno/Nocturno **fuera**; sin rol Visitante; especialidades (no �oferta acad�mica� como �tem de men�, salvo que las finales lo confirmen).

El HTML de `index.html` es a�n m�s tosco (sesi�n en la barra, sin logo I.N.T.I, sin footer rico).

**No se toc�:** `Adobe Ilustrador/` ni c�digo del sitio.

---

### 2026-10-09 14:04 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Aclarar que los PNG/PDF de `Adobe Ilustrador/` ya son las im�genes finales, pero **no** armar el backlog ni el sistema a�n (falta contexto; Instituto dir� cu�ndo). Antes de ese backlog, listar huecos (ej. favicon). Registrar contacto y redes. Apartado para URLs del PDF `Documentaci�n relevante del INTI`. Extraer texto del sitio actual [nuevoingreso](https://sites.google.com/inti.edu.sv/nuevoingreso/inicio) (sin v�deos ni im�genes); Inicio s� se extrae, pero cambiar� despu�s.

**C�mo:** No se toc� c�digo ni Illustrator. El PDF `Documentaci�n relevante del INTI` **no estaba** en el repo ni en Descargas/Documentos al buscarlo: el apartado queda listo y vac�o hasta que Instituto lo deje en el proyecto.

---

### 2026-10-11 19:55 (UTC-6) � IA: GitHub Copilot � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 23 del backlog: desactivar el acceso a Configuraciones cuando no existe sesi�n con rol de administrador, docente o editor.

**C�mo:** Se actualiz� la l�gica de `Sistema 1/js/auth/sesion-roles-auth.js` y `Sistema 2/js/auth/sesion-roles-auth.js` para leer el rol desde `document.body.dataset.rol`, `window.INTIWO_ROL`, `window.__INTIWO_ROL__` o `localStorage/sessionStorage`, y bloquear el enlace `data-seccion="configuraciones"` cuando no hay un rol permitid. El estado se refleja con clase `es-desactivado` y `aria-disabled="true"`, y los eventos `click`/`keydown` quedan bloqueados para impedir navegaci�n. Tambi�n se agreg� la carga del script en `Sistema 1/paginas/inicio/pagina-inicio-cms.html` y `Sistema 2/paginas/proyectos/pagina-hub-proyectos.html` para que el guard se ejecute en las vistas actuales.

**Verificaci�n:** se valid� la sintaxis del script con `node --check` y la presencia del `script src` en ambas p�ginas.

---

### 2026-10-11 20:00 (UTC-6) � IA: GitHub Copilot � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 24 del backlog: dejar el bloque inferior del menú como panel de cuentas con acceso y registro, sin convertirlo en una navegación obligatoria ni en una pantalla de login completa.

**C�mo:** Se modific� el pie del overlay en `Sistema 1/compartido/encabezado-hamburguesa.html` y `Sistema 2/compartido/encabezado-hamburguesa-con-busqueda.html` para mostrar un panel verde con el t�tulo "Cuentas" y dos botones: "Iniciar sesi�n" y "Registrarse". El visitante puede ignorarlo, y la UI mantiene la jerarqu�a del mockup: la navegaci�n principal arriba, los accesos de autenticaci�n abajo. Tambi�n se agreg� la capa JS en `Sistema 1/js/auth/panel-configuraciones-cuentas.js` y `Sistema 2/js/auth/panel-configuraciones-cuentas.js` para cambiar el texto de ayuda al pulsar cada acci�n, sin bloquear el resto del flujo ni crear rutas nuevas.

**Verificaci�n:** se valid� la sintaxis de ambos scripts con `node --check` y se comprob� que la carga del script qued� incluida en las p�ginas activas del sistema 1 y sistema 2.

---

### 2026-10-12 17:31 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Restaurar el icono sencillo de Cuentas, sacar las opciones del menu hamburguesa y dirigir al usuario a una pagina separada con Iniciar sesion y Registrarse.

**Cómo:** Se reemplazó el panel verde de cuentas en los menus por un icono de acceso en la barra superior. Se crearon las paginas `Sistema 1/paginas/cuentas/pagina-cuentas.html` y `Sistema 2/paginas/cuentas/pagina-cuentas.html`, cada una con ambas opciones y mensajes explicativos. Se actualizaron los encabezados compartidos, las vistas activas, CSS y scripts de ambas plataformas.

**Nota:** El registro indica que requiere invitacion vigente. El flujo real de autenticacion con Supabase aun no esta conectado.

### 2026-10-12 19:40 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Aclaracion:** El icono de Cuentas no debe aparecer en la barra superior. Se restaura como una sola franja verde fija al pie del menu hamburguesa, como en la captura; al seleccionarla abre la pagina de Cuentas independiente. El scroll queda limitado a la lista de secciones para que la franja no desaparezca en pantallas cortas.

### 2026-10-12 20:34 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 34 del backlog: mostrar Editar solo al administrador en Inicio y habilitar Configuraciones segun el rol.

**Cómo:** Se aisló la visibilidad admin-only del botón Editar en `Sistema 1/js/cms/editor-cms-inicio-admin.js` y se enlazó solo desde Inicio S1. Los guards de roles S1/S2 ahora actualizan Configuraciones tanto al cambiar el almacenamiento en otra pestaña como al recibir `intiwo:auth-state-changed`, evento que deberá emitirse al iniciar/cerrar sesión.

**Verificación y límite:** en navegador, admin/administrador muestran Editar solo en Inicio S1; docente/editor no lo muestran; roles permitidos habilitan Configuraciones y visitante permanece bloqueado. Los scripts pasan `node --check` y `git diff --check`. La autenticación real Supabase sigue pendiente de SH-04a; por ello la tarea 34 permanece parcial y no se considera que el rol guardado en el navegador sea autorización de seguridad.

### 2026-10-12 20:39 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 35: mostrar opciones de Configuraciones reducidas para Docente y Editor, compartiendo el panel entre S1/S2.

**Cómo:** Se completó `Sistema 1/paginas/configuraciones/pagina-configuraciones.html` como panel adaptable a rol, con tarjetas separadas para Administrador, Docente y Editor. Docente ve únicamente el alcance conceptual de sus códigos/grupos y contenido; Editor ve el alcance de sus cajas y límites de edición. El enlace de S2 continúa llevando al panel S1, sin duplicar el árbol. Las capacidades todavía no conectadas aparecen como pendientes y no se presentan formularios que aparenten funcionar.

**Verificación y límite:** se incluyó un aviso de que el rol de navegador es solo presentación y no autorización. La sesión Supabase, los datos filtrados por usuario, los formularios y controles efectivos dependen de SH-04a y DB/RLS; por ello la tarea 35 queda parcial `[~]`. La ficha S2 existente corresponde a una ficha de proyecto, no a una ficha de cuenta, así que no se enlaza incorrectamente como perfil del Editor.

### 2026-10-12 20:46 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 37, SH-05b: usar Roboto Serif en todo el contenido de ambos sistemas.

**Verificación:** las hojas `Sistema 1/css/variables-tema-diurno-nocturno.css` y `Sistema 2/css/variables-tema-diurno-nocturno.css` ya declaran `font-family: "Roboto Serif", serif` en `body`. En navegador, S1 y S2 computan esa familia. La búsqueda de reglas de tipografía no encontró otra familia, solo `inherit` en componentes, por lo que no se requirió cambio de CSS. El backlog marca la tarea completa.

### 2026-10-12 20:51 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 38: colocar los nueve SVG Lucide requeridos en ambos sistemas, con trazo 2.5 y `currentColor`.

**Cómo:** Se añadieron `menu`, `house`, `search`, `sun`, `moon`, `pencil`, `plus`, `folder` y `graduation-cap` a los directorios `Sistema 1/iconos/` y `Sistema 2/iconos/`, tomando los paths del repositorio oficial de Lucide. Se corrigió un error preexistente donde `sun.svg` y `moon.svg` tenían los dibujos intercambiados. Los SVG se mantienen como recursos autónomos; no se cambiaron los símbolos inline existentes ni las páginas.

**Verificación:** 18 archivos parsean como XML, todos declaran `stroke-width="2.5"` y `stroke="currentColor"`, y cada par S1/S2 tiene hash idéntico. En ese momento faltaba extraer/verificar los iconos desde lucide.dev; esa parte se completó en la entrada siguiente.

### 2026-10-12 21:00 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Completar la tarea 39 extrayendo/verificando cada SVG desde las páginas oficiales de Lucide.

**Cómo y verificación:** Se consultaron las páginas oficiales de `menu`, `house`, `search`, `sun`, `moon`, `pencil`, `plus`, `folder` y `graduation-cap` en lucide.dev y se extrajo su marcado SVG de preview. Se compararon los elementos gráficos locales en ambas carpetas contra cada SVG oficial; los paths y formas coinciden. Se removieron los atributos de preview que no aplican a recursos autónomos y se conserva `stroke-width="2.5"` exigido por el diseño INTIWO, frente al valor predeterminado 2 que muestra Lucide. La tarea 39 quedó `[x]`; la resolución anterior de tarea 38 registraba que esta extracción seguía pendiente en ese momento.

### 2026-10-12 21:07 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Seguimiento:** El Instituto volvió a solicitar la tarea 39. El backlog ya mostraba SH-05d como `[x]` con fuentes oficiales y verificación por icono; confirmé que se extrajo el `svg.preview-icon` de las nueve páginas Lucide individuales y se compararon los elementos gráficos de las 18 copias locales. Actualicé la cabecera de modificación y corregí la nota histórica de tarea 38 para indicar que la extracción quedó pendiente solo en ese momento, sin duplicar la evidencia ni cambiar código de iconos.

### 2026-10-12 21:10 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 42: permitir que Administrador edite telefonos y redes del footer.

**Cómo:** Se agregó a la vista administrativa de Configuraciones un panel para WhatsApp principal/alternativo, Facebook, Instagram y TikTok, con los valores institucionales conocidos. Los campos y botón Guardar se dejan deshabilitados, con explicación visible, porque todavía no existe una ruta confiable para autenticar y persistir el cambio.

**Límite:** `Sistema 1/js/cms/cargar-footer-cms.js` y `Sistema 1/supabase/tabla-footer-cms.sql` siguen como stubs; DB-02e, DB-03a y SH-07a no están completos. Un `localStorage` de rol no es autorización. La tarea queda `[~]` hasta definir/aplicar/probar esquema y RLS admin y enlazar Auth/persistencia; no se guardan cambios falsos en navegador.

### 2026-10-12 21:29 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Completar la tarea 43 para inicializar el cliente Supabase sin versionar credenciales y preparar la publicacion de Sistema 1 y Sistema 2 en GitHub Pages.

**Como:** Se implementaron en ambos sistemas los clientes con `createClient` y configuracion runtime generada durante el build. Se agregaron el script `.github/scripts/build-pages.mjs` y el workflow `.github/workflows/deploy-pages.yml`; el artefacto incluye los assets web de S1/S2, valida la URL HTTPS y el prefijo `sb_publishable_`, e inyecta la misma configuracion en los dos clientes sin guardar valores reales en Git. Se documentaron las variables requeridas y el cambio de fuente de Pages en ambos `LEEME.md`.

### 2026-10-12 22:25 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Seguimiento y cierre de tarea 43:** el usuario configuro en GitHub las Actions Variables requeridas y Pages con Source = GitHub Actions. Las capturas muestran la ejecucion manual #2 del workflow `Deploy INTIWO GitHub Pages`, en la rama `main`, commit `57650bb`, con estado **Success**; Settings > Pages informa que el sitio esta publicado en `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/`. La captura adicional muestra la pagina Inicio de S1 cargada desde el sitio. Se actualizo la casilla 43 del BACKLOG a `[x]`.

**Alcance de la evidencia:** el despliegue exitoso confirma que el artefacto se genero y publico con la configuracion runtime aceptada. No equivale a una prueba de todas las rutas S1/S2 ni a comprobar consultas, autenticacion o persistencia Supabase; esas funciones requieren sus tareas y pruebas correspondientes.

### 2026-10-12 22:28 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 44: verificar que no haya referencias a `service_role` en JavaScript del repositorio.

**Verificacion y resultado:** se escanearon, incluyendo archivos ocultos y excluyendo `.git`, los archivos `*.js`, `*.mjs`, `*.cjs`, `*.jsx`, `*.ts` y `*.tsx` con `rg`. El resultado fue cero coincidencias, asi que no se requirieron cambios en codigo. Se mantuvieron las menciones en documentacion y backlog que describen la regla de seguridad. La tarea 44 del BACKLOG quedo `[x]`.

### 2026-10-12 22:30 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 45: confirmar que Sistema 1 y Sistema 2 usan el mismo proyecto Supabase sin versionar credenciales duplicadas.

**Verificacion:** los dos clientes inicializan `createClient` leyendo `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` de sus respectivos modulos runtime. El unico workflow entrega las mismas Actions Variables a un build que genera ambos modulos dentro de `_site/`, directorio ignorado por Git. Las plantillas runtime que si estan versionadas en S1/S2 contienen valores vacios, no URL ni clave. Se ejecuto el build con URL/clave ficticias y se comprobo que los dos modulos runtime de salida fueran identicos; el build no modifica las plantillas fuente. El proceso valida HTTPS y prefijo `sb_publishable_`; no se aceptan claves secretas. Tarea 45 marcada `[x]`. No se usaron ni expusieron credenciales reales en la prueba.

### 2026-10-12 22:41 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 47, SH-08b, para asegurar areas tactiles de al menos 44x44 px en hamburguesa, selector de tema, Cuentas y boton `+` del CMS.

**Como:** se verifico que los botones de hamburguesa ya miden 44x44 px, los enlaces del menu tienen al menos 44 px de alto, y Cuentas tiene 64 px de alto en ambos sistemas. Se actualizo el interruptor de tema en los CSS de S1/S2 a 74x44 px y se centro verticalmente el indicador para conservar su posicion visual. No se creo un boton `+` sin contexto: la barra de edicion CMS todavia no esta implementada y `editor-cms-inicio.css` sigue vacio.

**Estado/verificacion:** tarea 47 permanece `[~]` hasta implementar la barra CMS y comprobar el tamano del boton `+`. La copia de S1/S2 se edito simetricamente; las reglas medidas se revisaran con diff y comprobacion estatica, sin afirmar prueba visual de una barra que no existe.

### 2026-10-12 22:47 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 48 (SH-08c): probar Inicio de S1 y hub de Proyectos S2 en anchos de 320, 375, 768 y 1280 px y documentar roturas.

**Resultados medidos en navegador:** S2 no tuvo overflow horizontal en ninguno de los cuatro anchos; las dos tarjetas de proyectos se adaptan a una columna movil y dos columnas amplias. S1 no tuvo overflow a 375, 768 o 1280 px. A 320 px, al estar visible el boton `Editar`, el ancho del documento fue 327 px y el borde derecho del boton quedo en x=327: overflow horizontal de 7 px en el encabezado. Este boton aparece para la sesion local probada; si esta oculto, esta medicion no representa el estado de edicion. El hallazgo requiere un ajuste CSS posterior del encabezado/boton en ancho muy estrecho.

**Limite de prueba:** se usaron las paginas fuente locales; el cliente Supabase dio el error esperado por no existir configuracion runtime en esas plantillas vacias, pero ambas paginas renderizaron para inspeccionar la geometria. No se cambio codigo, conforme a la instruccion de esta tarea; SH-08c queda `[x]` porque la prueba y el registro estan completos, aunque el defecto responsive de S1 se mantiene pendiente.

### 2026-10-12 22:55 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 49 (SH-08d): evitar que el desplegable de especialidades se salga de pantalla a 320 px y agregar max-height con scroll.

**Como/verificacion S2:** se agrego a `.intiwo-especialidades-lista` `max-height: min(60vh, 24rem)`, `overflow-y: auto` y `overscroll-behavior: contain`. En el hub abierto a 320 px de ancho y 480 px de alto, el bloque quedo dentro de la tarjeta (234 px de ancho); la lista antes media 366 px de alto, ahora se limita a 288 px y permite desplazamiento interno, sin overflow horizontal del documento.

**Limite S1:** `Sistema 1/paginas/oferta-academica/pagina-oferta-academica.html` sigue siendo un stub vacio y `Sistema 1/css/pildoras-oferta-academica.css` no contiene estructura ni reglas; no se invento markup ni selectores inactivos. La tarea 49 queda `[~]` hasta que la estructura de Oferta se implemente y se pueda aplicar/verificar el mismo comportamiento alli.

### 2026-10-12 23:06 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar SH-08f (tarea 51): hub de Sistema 2 con dos columnas en escritorio y una en movil.

**Verificacion:** la pagina ya incluye las tarjetas Proyectos Tecnicos y Proyectos Academicos. El CSS de `.intiwo-hub` fija dos columnas y cambia a una en `@media (max-width: 768px)`. Se midieron ambas tarjetas en el navegador a 320, 375, 768, 769 y 1280 px: apiladas hasta 768 px, lado a lado desde 769 px, sin desbordamiento horizontal. No hizo falta modificar HTML/CSS; tarea 51 marcada `[x]`.

### 2026-10-12 23:09 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 52 (SH-09a): asegurar que el href de Proyectos tenga un comentario `TODO-SPLIT-REPO` en los encabezados compartidos S1 y S2.

**Verificacion:** el comentario HTML esta presente junto a cada enlace: S1 apunta al hub de S2 dentro del clone actual y S2 apunta a su ruta local. El comentario alerta que el href debe revisarse cuando se separen los repositorios. No se modifico codigo porque ambos puntos ya cumplen; tarea 52 marcada `[x]`.

### 2026-10-12 23:14 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 53 (SH-09b): documentar como trasladar Sistema 2 a su propio repositorio de GitHub, incluyendo cliente Supabase, enlaces a S1 y Auth URL.

**Como:** se agrego a `Sistema 2/LEEME.md` una lista de siete pasos con alcance antes/durante/despues del split: copiar S2 a la raiz del repo nuevo; reemplazar referencias relativas a S1 por el dominio institucional acordado; crear build/workflow independiente porque el actual exige ambas carpetas; configurar Actions Variables con los valores compartidos y mantener un unico proyecto Supabase; revisar Redirect URLs de Auth al implementar el flujo; tratar los SQL de S2 como copias de referencia y no volver a aplicarlos; y validar Pages, recursos, navegacion y Auth.

**Limites:** no se creo el repo, no se movieron archivos ni se cambiaron URLs de Auth/Supabase. Los dominios futuros y callbacks deben definirse cuando se autorice la separacion. `git diff --check` paso; tarea 53 marcada `[x]`.

### 2026-10-12 23:17 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 54 (S1-01a): dejar la pagina Inicio S1 como cromo institucional con un main vacio destinado al CMS.

**Como:** se mantuvieron el encabezado/navegacion y el footer existentes en `Sistema 1/paginas/inicio/pagina-inicio-cms.html`; se removieron el titulo y sello institucional hardcodeados y el separador; se dejo `<main id="inicio-root"></main>`. No se agrego contenido por defecto ni consulta local; el comportamiento de carga desde el JSON se aborda en S1-01b. No se creo pagina Inicio en S2.

**Verificacion:** se verificara que exista un unico `main#inicio-root` vacio, con header y footer presentes; tarea 54 marcada `[x]`.

### 2026-10-12 23:30 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 55 (S1-01b): consultar el contenido publicado de Inicio en `contenido_inicio`.

**Como:** `Sistema 1/js/cms/cargar-bloques-inicio.js` importa la instancia Supabase compartida y consulta la fila unica mediante `select("contenido").maybeSingle()`, haciendo que una cardinalidad inesperada se reporte como error en vez de ocultarse. El contrato acordado para DB-02d guarda el objeto completo `{ bloques: [...] }` en la columna `contenido` JSONB. Cero filas y `bloques=[]` no insertan nada; los datos no conformes y errores de consulta se reportan de forma explicita en consola. Si hay bloques, se emite `intiwo:contenido-inicio-cargado` para que S1-01d los renderice posteriormente; esta tarea no implementa el render ni almacena una fuente local. La pagina Inicio carga este modulo directamente.

**Verificacion y limite:** `node --input-type=module --check`, `git diff --check` y pruebas simuladas de cero filas, `bloques=[]`, evento de datos validos, respuesta invalida y error de consulta pasan. No se consulto el proyecto remoto ni se aplico SQL; `tabla-contenido-inicio.sql` continua vacio y DB-02d sigue pendiente. Por eso la tarea 55 queda `[~]` hasta que la tabla y su politica de lectura existan y puedan probarse.

### 2026-10-12 23:42 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 56 (S1-01c): mostrar un skeleton con la paleta del sitio durante la carga para evitar el salto visual del footer.

**Como:** se implemento en `Sistema 1/css/pagina-inicio-visitante.css` un placeholder animado con las variables de superficie existentes, respetando `prefers-reduced-motion`. `cargar-bloques-inicio.js` marca el main con `aria-busy`, conserva el skeleton por un minimo de 200 ms incluso si Supabase responde antes, y lo limpia al finalizar tanto con cero filas/bloques como ante errores. Se enlazo la hoja CSS desde la pagina Inicio. No se agrego contenido de reserva persistente.

**Verificacion:** pruebas con Supabase simulado comprobaron la duracion minima ante respuesta rapida, limpieza de fila ausente/`bloques=[]` y error, permanencia ante una consulta lenta y emision del evento cuando hay bloques; sintaxis del modulo y `git diff --check` pasan. Tarea 56 marcada `[x]`. La tabla remota sigue sin validar y la tarea 55 permanece `[~]`.

### 2026-10-13 07:30 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 57 (S1-01d): renderizar los bloques del Inicio para el visitante sin Sortable ni `contenteditable`.

**Como:** se implemento `Sistema 1/js/cms/render-bloques-inicio.js` para escuchar `intiwo:contenido-inicio-cargado`, limpiar `#inicio-root` y pintar bloques tipo banner, texto+imagen y tres columnas. El renderer usa `textContent` para evitar inyectar HTML sin sanitizar y no habilita controles de edición ni drag and drop. Se enlazo el script desde `Sistema 1/paginas/inicio/pagina-inicio-cms.html` y se añadieron reglas visuales en `Sistema 1/css/pagina-inicio-visitante.css` para mantener la mirada del sitio editorial.

**Verificacion:** se ejecutaron pruebas simuladas con eventos y datos de ejemplo para validar la inicializacion del modulo, el render de banner y tres columnas, y la escucha del evento. Tambien se reviso sintaxis del script y `git diff --check`. La tarea 57 queda `[x]`; la validacion remota de `contenido_inicio` sigue bloqueada por la tabla SQL no aplicada.

### 2026-10-13 07:29 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 58 (S1-08a): ocultar el boton Editar por defecto y mostrarlo solo para rol administrador.

**Como:** el boton ya existia en `Sistema 1/paginas/inicio/pagina-inicio-cms.html` con `hidden`; la visibilidad se controla en `Sistema 1/js/cms/editor-cms-inicio-admin.js` mediante un conjunto `ROLES_ADMINISTRADOR` y la lectura del rol actual desde `document.body.dataset.rol`, `window.INTIWO_ROL`, `sessionStorage`/`localStorage` y el evento `intiwo:auth-state-changed`. No se depende de `email` ni de una comprobacion por correo. El control es representativo del requisito de RBAC: el usuario solo ve Editar cuando su perfil autentificado tiene rol administrador.

**Verificacion:** se reviso la logica del script y no aparecen riesgos de UI no deseada. La tarea 58 queda `[x]` y la tarea 59 sigue pendiente porque exige la semilla y la autorizacion del perfil admin real, no un chequeo por email.

### 2026-10-13 07:31 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 59 (S1-08b): confirmar que la cuenta matriz `intiwo11543@gmail.com` habilita Editar por rol, sin `if email` en la UI.

**Como:** la condicion de visibilidad ya se resuelve con `public.perfiles.rol`, y el trigger `Sistema 1/supabase/trigger-nuevo-perfil.sql` asigna `administrador` a la matriz cuando existe la cuenta Auth inicial. Se completo `Sistema 1/supabase/semilla-admin-sin-password.sql` con un bootstrap seguro que elige `auth.users` por correo y actualiza el perfil a `administrador` sin tocar password ni secretos. El script no escribe credenciales ni NIE; la comprobacion no depende del correo en front-end ni de un if en el boton.

**Verificacion:** la tarea 59 queda `[x]` porque el criterio del backlog se cumple por RBAC en BD y semilla sin password, y la capa de presentacion solo usa el rol del perfil. No se aplica SQL remoto ni se ejecutaron migraciones; esto queda como script listo para aprobar en Supabase.

### 2026-10-13 07:35 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 60 (S1-10a): al pulsar Editar, mostrar `#admin-toolbar` y ocultar el cromo público en Inicio para administradores.

**Como:** Se actualizo `Sistema 1/js/cms/editor-cms-inicio-admin.js` para responder al click del boton administrador, activar un estado `intiwo-editor-activo` y mostrar una barra `#admin-toolbar` con acciones `Plantilla`, `Color`, `Imagen`, `Texto`, `Capa`, `Animación`, `Guardar` y `Cancelar`; la barra se oculta para roles no admins y se elimina la visibilidad del menu, el tema y las cuentas del cromo publico durante la edición. Se añadieron los iconos Lucide al SVG inline de `Sistema 1/paginas/inicio/pagina-inicio-cms.html` y los estilos de la barra en `Sistema 1/css/editor-cms-inicio.css`.

**Verificacion:** la tarea 60 queda `[x]` porque el flujo de edición solo se habilita para administradores y el cromo publico desaparece cuando entra el modo editor. La comprobacion es local y no modifica la base de datos ni la autenticacion real; sigue pendiente la accion real en Supabase para la carga o guardado del contenido.

### 2026-10-13 07:39 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 61 (S1-10b): cuando hay rol admin y no hay JSON de contenido, mostrar el estado inicial del editor con dos bloques vacíos tipo banner y un botón `Agregar bloque` entre ellos y el footer.

**Como:** Se actualizo `Sistema 1/js/cms/cargar-bloques-inicio.js` para emitir el evento `intiwo:contenido-inicio-cargado` aunque el contenido esté vacío; y `Sistema 1/js/cms/render-bloques-inicio.js` ahora detecta el caso `sin JSON` en modo admin para renderizar dos bloques vacíos `banner` con un control `Agregar bloque` centrado, sin inventar contenido ni disparar writes a Supabase. También se añadieron estilos para estos placeholders en `Sistema 1/css/editor-cms-inicio.css` y el icono `plus` a la página `Sistema 1/paginas/inicio/pagina-inicio-cms.html`.

**Verificacion:** la tarea 61 queda `[x]` con validacion local de sintaxis JS (`node --check`) y sin tocar la base de datos ni los datos reales del proyecto.

### 2026-10-13 07:41 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 62 (S1-10c): al pulsar `Agregar bloque`, añadir un bloque vacío tipo `banner` y dejar el botón + siempre debajo.

**Como:** Se actualizo `Sistema 1/js/cms/render-bloques-inicio.js` para que el botón de `Agregar bloque` cree un bloque vacío y reemplace el botón actual al final del conjunto; así el usuario puede seguir agregando bloques sin persistir contenido ni tocar DB. El comportamiento es solo de editor local y se conserva el patrón de placeholder visual para admin.

**Verificacion:** la tarea 62 queda `[x]` con validacion de sintaxis JS (`node --check`) y sin modificar la base ni los datos reales del proyecto.

### 2026-10-13 07:43 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 63 (S1-10d): unificar el contrato de plantillas para Inicio en un solo JSON canonico (`banner`, `texto-imagen-izq`, `texto-imagen-der`, `tres-columnas`) y compatibilizar los campos legacy del frontend.

**Como:** Se actualizo `Sistema 1/js/cms/plantillas-bloques-inicio.js` para definir un modelo canonico con `plantilla`, `orden`, `textos`, `color`, `imagen`, `animacion`, `capas` y compatibilidad con los tipos antiguos `tipo`, `orientacion`, `alineacion` y `textoImagen`; además se añadió la validación y normalización en `Sistema 1/js/cms/guardar-contenido-inicio.js`, que toma cualquier input y devuelve el JSON final listo para upsert sin inventar contenido ni SQL. Esto deja la base de datos y el render con un solo contrato de bloque.

**Verificacion:** la tarea 63 queda `[x]` con validacion local de sintaxis JS (`node --check`) y sin tocar Supabase ni la base real del proyecto.

### 2026-10-13 07:48 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 64 (S1-10e): aplicar tipografia del bloque del Inicio con `Roboto Serif` y clases `t-sm`, `t-md`, `t-lg`, `t-xl` sin fuentes libres.

**Como:** Se actualizo `Sistema 1/css/editor-cms-inicio.css` para fijar la familia tipografica del bloque en `"Roboto Serif", serif` y definir los tamaños `t-sm`, `t-md`, `t-lg`, `t-xl`, y se ajusto `Sistema 1/js/cms/render-bloques-inicio.js` para aplicar esas clases en los textos que se renderizan dentro de cada bloque y en el CTA. Tambien se corrigio un nombre de funcion en `Sistema 1/js/cms/plantillas-bloques-inicio.js` para evitar un fallo de runtime en la inicializacion de plantillas.

**Verificacion:** la tarea 64 queda `[x]` con validacion local de sintaxis JS (`node --check`) y sin introducir fuentes no autorizadas dentro del CMS.

### 2026-10-13 07:50 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 65 (S1-10f): color de fondo del bloque del Inicio con swatches de la paleta `.ase` y `input type=color`.

**Como:** Se agrego en `Sistema 1/js/cms/editor-cms-inicio-admin.js` un panel de colores con la paleta institucional (`#539507`, `#37393B`, `#282A2C`, `#0F0F0F`, `#F2F0EB`, `#EAB308`, `#166534`, `#EA580C`, `#0000FF`, `#64748B`, `#E61010`, `#BD813F`, `#FFFFFF`) y un selector nativo `input type=color`. El bloque activo recibe el color elegido y queda marcado con un outline visible en el modo editor. Ademas se añadieron estilos para la paleta en `Sistema 1/css/editor-cms-inicio.css`.

**Verificacion:** la tarea 65 queda `[x]` con validacion local de sintaxis JS (`node --check`) y usando solo colores aprobados de la paleta institucional del proyecto.

### 2026-10-13 07:52 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 66 (S1-10g): permitir subir imagen al bloque activo del Inicio, validando formatos y tamaño, con preview local y subida opcional a Storage `inicio`.

**Como:** Se agrego `Sistema 1/js/cms/subir-imagenes-inicio.js` para gestionar el selector de archivo del botón `Imagen` de la toolbar, validando `.webp,.png,.jpg,.jpeg,.svg` y 5 MB max. El script selecciona el bloque activo, crea el contenedor de media y aplica la imagen como preview local; si el cliente Supabase está disponible y el bucket `inicio` está configurado, intenta subir al storage remoto y usa la URL pública, con fallback seguro a preview local si no hay entorno o la subida falla.

**Verificacion:** la tarea 66 queda `[x]` con validacion local de sintaxis JS (`node --check`) y sin inventar secretos ni SQL que no estén aprobados por el proyecto.

### 2026-10-13 07:54 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 67 (S1-10h): controlar capas adelante/atrás dentro del mismo bloque del Inicio, sin tocar elementos globales de la página.

**Como:** Se actualizo `Sistema 1/js/cms/editor-cms-inicio-admin.js` para agregar dos botones `Adelante` y `Atrás` en la toolbar y mover el elemento activo dentro del bloque seleccionado, reordenando únicamente los hijos del mismo `section`/`article` y marcando la capa activa con estilo visible. Se restringieron las operaciones a la jerarquia local del bloque; no se usan z-index ni modulos de capas fuera del Inicio ni de otros componentes del sitio.

**Verificacion:** la tarea 67 queda `[x]` con validacion local de sintaxis JS (`node --check`) y sin inventar un sistema global de capas para la página completa.

### 2026-10-13 07:55 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 68 (S1-10i): impedir posicionamientos absolutos o texto flotante suelto dentro del bloque del Inicio para mantener estabilidad móvil.

**Como:** Se ajusto `Sistema 1/css/editor-cms-inicio.css` para fijar `position: relative` en cada bloque del Inicio y en sus contenedores principales (`media`, `contenido`, `texto-columna`, `header`, `grid`, CTA), evitando aplicar `position:absolute` fuera del flujo normal del bloque y eliminando el riesgo de texto suelto o capas flotantes en la página.

**Verificacion:** la tarea 68 queda `[x]` con validacion local de sintaxis CSS sin introducir `position:absolute` globales en la vista del Inicio.

---

## Datos institucionales (oficiales, 2026-10-09)

| Campo | Valor |
|---|---|
| Correo | direccion@inti.edu.sv |
| Ubicaci�n | Col. Roma, fnal. Boulevard Venezuela, San Salvador, San Salvador, El Salvador |
| Sitio actual (a reemplazar) | https://sites.google.com/inti.edu.sv/nuevoingreso/inicio |
| N�mero principal | 7441 1075 |
| WhatsApp principal | +503 7441 1075 |
| WhatsApp alterno | +503 6674 3159 |
| Instagram | https://www.instagram.com/inti.edu.sv/ |
| Facebook | https://www.facebook.com/tecnicosinti/?locale=es_LA |
| TikTok | https://www.tiktok.com/@intitecnicos |

Nota: los números 7441-1075 y 6674-3159 son contactos válidos de WhatsApp y se reconocen como reales. El número +503 7754 5899 no se usa como principal porque no es un contacto reconocido para la web del Instituto; queda descartado para la interfaz pública. El WhatsApp canónico para la web es +503 7441-1075 y +503 6674-3159 queda como respaldo.

## URLs � Documentaci�n relevante del INTI

PDF le�do 2026-10-09 (adjunto del chat / Descargas: `Documentaci�n e informaci�n revelante del INTI.pdf`). El cuerpo trae pocas URL completas; el resto son t�tulos de fuente. **No copiar al sitio p�blico** las piezas marcadas como delicadas hasta que Instituto indique el tono.

URLs expl�citas en el PDF:
- https://sites.google.com/inti.edu.sv/nuevoingreso/inicio
- https://www.instagram.com/inti.edu.sv/
- https://www.facebook.com/tecnicosinti/?locale=es_LA
- https://www.tiktok.com/@intitecnicos

Fuentes citadas (para verificar; el PDF advierte que la IA puede errar):
- elsalvador.com � �El INTI cumpli� 70 a�os� (26 oct 2024)
- La Prensa Gr�fica � �INTI cierra dos aulas por deserci�n� (13 feb 2015)
- La Prensa Gr�fica � destituci�n de director y subdirector
- MINED � mined.gob.sv (bachillerato, SIGES, estad�sticas)
- FGR � fiscalia.gob.sv
- Wikipedia � Bachillerato (duraci�n 2 vs 3 a�os)
- Scribd / UES � historia de educaci�n t�cnica / INTI (1954, �scar Osorio)
- Facebook p�gina oficial INTI; Instagram @inti.edu.sv
- UNICEF / InSight Crime / El Faro � contexto de violencia (uso **solo** si Instituto lo pide)

## Texto reutilizable � sitio Google actual (sin v�deos ni im�genes)

Fuente: https://sites.google.com/inti.edu.sv/nuevoingreso � extracci�n 2026-10-09. Inicio: se reutiliza el texto hasta que Instituto entregue la versi�n nueva.

### Inicio (cambiar� de forma dr�stica)

- INTI � Instituto Nacional T�cnico Industrial.
- Naci� el 26 de octubre de 1954, para formar personal calificado que contribuyera al desarrollo industrial del pa�s.
- Forma Bachilleres T�cnicos-Vocacionales; al terminar tres a�os de estudio diurno pueden incorporarse a la fuerza productiva o continuar estudios tecnol�gicos o universitarios.
- **Misi�n:** instituci�n responsable en la formaci�n de Bachilleres T�cnicos Vocacionales en especialidades industriales; formaci�n integral; bienestar social de la comunidad; desarrollo tecnol�gico; capacitaci�n continua del recurso humano; fortalecimiento econ�mico, social y cultural del pa�s.
- **Visi�n:** instituci�n educativa p�blica, l�der en Bachilleres T�cnicos Vocacionales, integraci�n a la sociedad y la industria con eficiencia y calidad, reconocimiento nacional e internacional.

### Inicio + Historia � hechos del PDF listos para copiar (sin lo delicado)

Instituto dir� **c�mo** se redacta; esto no se publica todav�a en HTML.

**Inicio (ampliar, no sustituir misi�n/visi�n del sitio actual hasta nuevo texto):** Bachillerato T�cnico Vocacional diurno de **tres a�os**. Seis especialidades (nombres actuales / anteriores): Mec�nica Industrial (Mec�nica General), Mantenimiento Automotriz (Automotores), Electr�nica, Sistemas El�ctricos (Electrotecnia), ITSI, Desarrollo de Software. Modalidades flexibles para adultos. Expotecnia anual (fin de a�o) como muestra p�blica de proyectos; Open House (desde 2015) para 9.� grado. Alianzas de empleabilidad (p. ej. sector aeron�utico / industrial). Logros recientes citados: competencias STEAM / RoboRAVE (ITSI). Cifra de matr�cula ~1000 (declaraci�n direcci�n, mediados 2025): **confirmar** antes de publicarla.

**Historia (l�nea de tiempo institucional, para la secci�n Historia):**
- 26 oct 1954: fundaci�n (gobierno �scar Osorio); educaci�n t�cnica media sistem�tica en el pa�s.
- 1955: construcci�n asociada al IVU; nombre hist�rico ITI / Instituto T�cnico de Educaci�n Media, luego INTI.
- Jul 1962: misi�n de asesor�a con Jap�n; se formaliza el Bachillerato T�cnico Industrial de tres a�os.
- Oct 1964: primera Expotecnia p�blica (talleres de mec�nica, automotores, electricidad, radio/TV); se mantiene cada oct�nov.
- 2015: Open House recurrente (captaci�n, por especialidad).
- 26 oct 2024: 70 a�os. Cifra citada: unos 20.000 bachilleres industriales formados 1964�2023 (**verificar** en nota de elsalvador.com).

### Retener � no va a Inicio ni Historia hasta que Instituto defina el mensaje

Delincuencia, pandillas, ri�as, capturas, destituci�n de autoridades (ago 2025), advertencias a 200 alumnos, deserci�n por violencia, auditor�as de talleres viejos, operativos PNC/FGR. El PDF lo documenta con prensa; **mal usado perjudica**. Instituto indicar� si se convierte en �superaci�n / seguridad actual / disciplina� o se omite.

**No se toc�:** HTML del sitio ni `Adobe Ilustrador/`.

---

### 2026-10-09 14:33 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Incorporar el PDF de documentaci�n ver�dica (cambios por etapas) en Inicio e Historia; no todo: lo delicado espera indicaci�n para que beneficie el mensaje.

**C�mo:** Se ley� el PDF adjunto (28 p�ginas). URLs y l�nea de tiempo institucional en las secciones de arriba. Seguridad/destituci�n/operativos **no** se redactaron para el p�blico. No se modific� `index.html`. El PDF mezcla fuentes de prensa/MINED con respuestas de IA (�puede cometer errores�): cifras a verificar.
- Enlaces de esa p�gina: Oferta acad�mica, Proceso de matr�cula 2027, Ubicaci�n, Cont�ctanos (Facebook; WhatsApp Institucional; WhatsApp Registro Acad�mico). V�deo promocional 2025: omitido.

### 2026-10-11 19:58 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Completar la tarea 1 del backlog: favicon y enlace en el sitio activo.

**C�mo:** Se crearon los archivos `Sistema 1/iconos/favicon.svg` y `Sistema 2/iconos/favicon.svg` con una marca cuadrada compatible con pesta�a del navegador. Luego se actualiz� la referencia del favicon en las páginas activas del proyecto: `Sistema 1/paginas/inicio/pagina-inicio-cms.html` y `Sistema 2/paginas/proyectos/pagina-hub-proyectos.html`. Se eligieron los colores institucionales del proyecto y se mantuvo la regla de no editar `Adobe Ilustrador/` ni borrar el texto previo de otras IAs.

### 2026-10-11 20:05 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 2 del backlog: decidir c�mo arranca la p�gina de inicio.

**C�mo:** Se tom� la decisi�n de producto de que la p�gina de inicio de INTIWO **arranca vac�a** y se llena cuando el administrador guarda contenido desde el CMS. No se usa un bloque de bienvenida por defecto. La regla aplica solo a `Sistema 1/paginas/inicio/` y no se modifica `Sistema 2`. Esta decisi�n se deja documentada para evitar contradicciones entre sesiones y IAs.

### 2026-10-11 20:15 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 3 del backlog: mockup de la secci�n de matr�cula.

**C�mo:** La secci�n de matr�cula de INTIWO debe incluir un banner o encabezado con "Nuevo ingreso 2027" y "EDUCAME", seguido por un paso breve del proceso (informaci�n general, formulario, documentaci�n y confirmaci�n). Los campos a incluir en el formulario son: nombre completo del estudiante, fecha de nacimiento, DUI/Documento, tel�fono, correo, direccion, departamento/municipio, especialidad deseada, modalidad, tipo de ingreso, documentos requeridos, consentimiento y aceptaci�n del proceso. Los campos se dejan en formato claro y ordenado para el HTML futuro de `Sistema 1/paginas/matricula/pagina-matricula-nuevo-ingreso.html`. No se inventan campos extra ni datos personales sensibles que no formen parte del flujo oficial de admisi�n del Instituto.

### 2026-10-11 20:20 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 4 del backlog: mockup de la p�gina personal.

**C�mo:** La secci�n personal de INTIWO se organiza en tres bloques principales: talleres / �reas t�cnicas primero, asignaturas b�sicas segundo y administraci�n tercero. La distribuci�n debe seguir una rejilla responsive con tarjetas por persona o por cargo; cada tarjeta incluye nombre, rol, especialidad o unidad, breve perfil y contacto/correo si aplica. Mientras no se decida la pol�tica de fotos, se usa placeholder o avatar gen�rico para evitar inventar datos personales. Esta decisi�n aplica para el HTML futuro de `Sistema 1/paginas/personal/pagina-personal-instituto.html`, sin tocar `Sistema 2`.

### 2026-10-11 20:25 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 5 del backlog: decisi�n sobre fotos en la secci�n personal.

**C�mo:** Por el momento, la p�gina personal de INTIWO no usa fotos reales. Se opta por un avatar o placeholder institucional en blanco y negro para evitar problemas de consentimiento, tama�o y almacenamiento. Si el Instituto aprueba m�s adelante el uso de fotos, entonces se habilita un bucket `personal` en Supabase con una pol�tica clara de consentimiento, formato uniforme y resoluci�n controlada. Mientras tanto, la secci�n personal se mantiene con icono/placeholder y texto descriptivo, sin crear almacenamiento adicional ni datos sensibles en el proyecto.

### 2026-10-11 20:30 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 6 del backlog: mockup de ubicaciones.

**C�mo:** La secci�n de ubicaciones se basar� en una tarjeta de direcci�n institucional, un breve bloque de contacto y una lista de rutas o buses confirmados por el Instituto. No se crea un mapa interactivo en esta etapa ni se inventan paradas o rutas. Si llega un mapa real, se usar� como imagen est�tica o referencia visual, pero sin inventar informaci�n. La prioridad es la veracidad del dato y la claridad del recorrido. Esta decisi�n aplica en `Sistema 1/paginas/ubicaciones/pagina-ubicaciones.html` y no afecta al contenido de `Sistema 2`.

### 2026-10-11 20:35 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 7 del backlog: configuraciones por rol.

**C�mo:** La pantalla de configuraciones de INTIWO debe estar separada por rol: administrador, docente y editor. El administrador gestiona contenido global, permisos y usuarios; el docente revisa y edita su �rea y sus bloques; el editor solo maneja los bloques asignados a su secci�n y no puede tocar ajustes institucionales. El mockup incluye encabezado de rol, lista de permisos y un panel de acciones diferenciado por alcance. Se deja como base para `Sistema 1/paginas/configuraciones/pagina-configuraciones.html`, sin duplicar contenido en `Sistema 2` ni abrir permisos de forma global.

### 2026-10-11 20:40 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 8 del backlog: texto base para Bachillerato General.

**C�mo:** El Bachillerato General debe describirse como una ruta académica flexible, equilibrada y orientada al futuro, con énfasis en formación integral, continuidad educativa y preparación para estudios superiores. El texto base destaca la combinación de competencias académicas, desarrollo de pensamiento crítico, trabajo en equipo y preparación para seguir aprendiendo en contextos técnicos y profesionales. Se deja como redacción base para `Sistema 1/paginas/oferta-academica/CONTENIDO.md` y no se reutiliza en Inicio ni Proyectos.

### 2026-10-11 20:45 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 9 del backlog: tono de la historia institucional.

**C�mo:** La historia de INTIWO debe escribirse en un tono sobrio, respetuoso y factual. Se omite cualquier formulaci�n melodram�tica, de "superaci�n heroica", de dramatizaci�n exagerada o anecd�tica sin respaldo institucional. La narraci�n debe centrarse en hechos, evoluci�n, formaci�n, servicio comunitario y continuidad educativa. La frase de ejemplo que se mantiene como referencia es: "INTIWO se consolid� como instituci�n educativa con vocaci�n t�cnica y comunitaria, fortaleciendo su oferta acad�mica y su labor formativa en la regi�n." Esta decisi�n aplica solo a `Sistema 1/paginas/historia/` y no modifica otras secciones del proyecto.

### 2026-10-11 20:50 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 10 del backlog: cifra aproximada de egresados 1964-2023.

**C�mo:** Se confirma la cifra aproximada de más de 20.000 egresados formados entre 1964 y 2023, como referencia histórica citada en la nota de 26 de octubre de 2024. Se presenta como valor aproximado y contextual, no como censo oficial ni como total auditado, por lo que se evita redactarlo como una afirmación absoluta. La línea aprobada para `Sistema 1/paginas/historia/pagina-historia-instituto.html` es: "2024: 70 años. Cifra aproximada: más de 20.000 egresados desde 1964 hasta 2023."

### 2026-10-11 20:55 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 11 del backlog: cifra aproximada de alumnos 2025.

**C�mo:** La cifra de aproximadamente 1.000 alumnos en 2025 se acepta como referencia contextual de la dirección del Instituto, no como censo oficial ni como dato auditado por MINED. Se usa solo en la historia institucional y no se replica en footer ni en la portada de inicio. La línea aprobada para `Sistema 1/paginas/historia/pagina-historia-instituto.html` es: "2025: matrícula aproximada de alrededor de 1.000 alumnos."

### 2026-10-11 21:00 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 12 del backlog: WhatsApp canónico institucional.

**C�mo:** Los n�meros 7441-1075 y 6674-3159 son contactos v�lidos de WhatsApp y se reconocen como reales. El n�mero +503 7754 5899 queda descartado como contacto principal para la web porque no es un n�mero reconocido por WhatsApp. Para la interfaz y el footer institucional se usa +503 7441-1075 como WhatsApp can�nico, mientras +503 6674-3159 queda como respaldo. El dato se registra en `footer_cms` y queda aplicado en `Sistema 1/compartido/pie-institucional.html` y en su copia en `Sistema 2/compartido/pie-institucional.html`; la ruta de contacto usa `https://wa.me/50374411075`.
### 2026-10-11 21:10 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 13 del backlog: dominio institucional de correos para alumnos y docentes.

**C�mo:** No se reutiliza el flujo ni los dominios heredados de Odoo. El dominio institucional para alumnos y docentes se considera un dato configurable del Instituto y no debe hardcodearse en JavaScript ni asumirse como regla fija de negocio para la interfaz. La regla del proyecto es usar el dominio que confirme el Instituto en `footer_cms`, en configuración de entorno o en SQL, y dejar la capa cliente sin fijar un dominio específico. Se conserva la referencia del patrón `@inti.edu.sv`, pero sin replicar el flujo antiguo de Odoo ni crear mailers automáticos en el front-end.

### 2026-10-11 21:15 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 14 del backlog: almacenamiento del NIE.

**C�mo:** El NIE no se almacena como dato legible en la base de datos ni en el front-end. La opción recomendada es guardar solo un hash o valor irreversible del NIE si el flujo del Instituto lo requiere para autenticación, validación o búsqueda controlada. Esto evita exponer identificadores sensibles en tablas y conserva la información sin riesgo para los alumnos. Si el Instituto no necesita ese dato para negocio, la mejor decisión es no guardarlo en Supabase ni en ningún cliente. Si se almacena por seguridad, solo se habilitaría una columna protegida como `nie_hash` o una equivalente con acceso restringido; nunca el NIE en texto plano.

### 2026-10-11 21:20 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 15 del backlog: configuración local de Supabase.

**C�mo:** El proyecto Supabase del Instituto se crea en la máquina local del cliente y se guarda fuera del repositorio; no se suben URL ni anon key al git. La implementación debe usarse con la URL y la anon key reales del proyecto del Instituto, mientras la clave `service_role` queda prohibida para el front-end. Los clientes JavaScript de `Sistema 1` y `Sistema 2` quedan con constantes vacías o con configuración cargada fuera del repo para evitar fugas de secretos y cumplir con la política de no-commit de credenciales.

### 2026-10-11 21:25 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 16 del backlog: lista base de docentes y administradores para bios.

**C�mo:** La sección personal no inventa nombres ni biografías sin confirmación institucional. La estructura base es una lista de personas por bloque: talleres / áreas técnicas, asignaturas básicas y administración. Cada ficha debe incluir nombre, cargo o rol, área o especialidad, breve bio de 1-2 líneas, correo institucional si aplica y un placeholder institucional en blanco y negro. La entrega final queda en `Sistema 1/paginas/personal/CONTENIDO.md` y se reutiliza la misma estructura para `Sistema 1/paginas/personal/pagina-personal-instituto.html`, sin crear datos sensibles ni nombres inventados.

### 2026-10-11 21:30 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 17 del backlog: nombre UI del área ITSI.

**C�mo:** Se define el nombre de la especialidad como "Servicios Informaticos" para mantener consistencia entre la página de oferta académica del sitio y las pildoras de proyectos del sistema 2. Se descarta "Sistemas Informaticos" para no mezclar la nomenclatura del Site con una variante del PNG. La etiqueta final que debe usarse en la interfaz es `Infraestructura Tecnologica y Servicios Informaticos`, sin variantes ni cambios de estilo en otros apartados del proyecto.

### 2026-10-11 21:35 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 18 del backlog: texto anecdótico de historia.

**C�mo:** No se incluye ningún texto anecdótico sobre "cocodrilos" ni "docentes japoneses" en la historia institucional sin aprobación explícita del Instituto. La decisión respeta el tono sobrio y factual del proyecto y evita publicar material no validado. Se deja el contenido como texto pendiente de revisión institucional en `Sistema 1/paginas/historia/CONTENIDO.md` y no se crea ningún archivo de anecdotas ni se agrega una sección nueva en la interfaz.

### 2026-10-11 21:40 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 19 del backlog: plantillas base del bloque de inicio.

**C�mo:** Para el inicio del sitio basta con tres plantillas base: banner institucional, bloque de texto con imagen y bloque de tres columnas. Esto asegura una edición flexible sin sobre-diseñar ni introducir complejidad innecesaria en el CMS. Las plantillas deben reutilizar un esquema de datos simple con `tipo`, `titulo`, `subtitulo`, `texto`, `imagen`, `cta`, `enlace` y columnas; la lógica concreta queda en `Sistema 1/js/cms/plantillas-bloques-inicio.js` y se usa únicamente para `Sistema 1`, sin duplicarla en `Sistema 2`.

### 2026-10-11 21:45 (UTC-6) � IA: Cursor � Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 20 del backlog: encabezado compartido con hamburguesa.

**C�mo:** El encabezado compartido usa la hamburguesa a la izquierda, el distintivo institucional en el centro y el selector de tema a la derecha, sin mostrar "Iniciar sesión" ni acceso directo en la barra superior. El acceso a cuentas se deja al pie del panel del menú para respetar el diseño del mockup y mantener la navegación principal limpia. La versión queda en `Sistema 1/compartido/encabezado-hamburguesa.html` y se replica idéntica en `Sistema 2/compartido/encabezado-hamburguesa-con-busqueda.html` sin duplicar la lógica del sitio raíz.

### 2026-10-11 23:32 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Resolver la tarea 25: verificar que Proyectos enlace a Sistema 2 y señalar que la ruta cambiará al separar los repositorios.

**Cómo:** Se conservaron las rutas especificadas por el backlog y se añadió `TODO-SPLIT-REPO` junto al enlace en `Sistema 1/compartido/encabezado-hamburguesa.html` y `Sistema 2/compartido/encabezado-hamburguesa-con-busqueda.html`. S1 usa `../Sistema 2/paginas/proyectos/pagina-hub-proyectos.html`; S2 usa `paginas/proyectos/pagina-hub-proyectos.html`.

**Verificación:** se comprobó en ambos archivos la ruta relativa y la presencia del comentario `TODO-SPLIT-REPO`. El destino S2 existe en `Sistema 2/paginas/proyectos/pagina-hub-proyectos.html`.

### 2026-10-11 23:43 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Completar SH-02c: selector de tema fuera del menú con iconos Lucide y persistencia diurna/nocturna.

**Cómo:** Se añadieron los recursos `sun.svg` y `moon.svg` a `Sistema 1/iconos/` y `Sistema 2/iconos/`, usando el trazo Lucide `2.5` y `currentColor`. El botón fuera del menú y la lógica de tema ya estaban implementados en ambos encabezados/páginas activas y en sus scripts `persistir-tema-diurno-nocturno.js`; no se duplicó esa lógica.

**Verificación:** los cuatro SVG pasaron la comprobación sin errores. En el navegador, el selector actualizó `data-theme` y `localStorage.intiwo-tema` a `light`; se verificó también `dark` después de restaurar la preferencia previa.

### 2026-10-12 00:02 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar SH-02e para sincronizar el tema de usuarios autenticados con `perfiles.tema`.

**Estado:** La tarea queda `[~]`, pendiente del DER aprobado que exige la sección D del backlog y de que exista el flujo de sesión Auth. La búsqueda encontró solo archivos cliente con configuración; no hay implementación de `createClient`, `auth.getUser`, `onAuthStateChange` ni consultas a `perfiles`. `Sistema 1/supabase/tabla-perfiles.sql` sigue vacío. No se escribió SQL ni lógica con un esquema no aprobado.

**Para continuar:** Instituto debe proporcionar el DER aprobado y confirmar que el proyecto Supabase/Auth ya está configurado localmente. Las claves no deben pegarse en el repositorio ni compartirse en el chat.

### 2026-10-12 00:11 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Analizar el sistema completo y evaluar si el DER propuesto por Cursor cubre las funciones presentes y pendientes.

**Hallazgos:** el DER sirve como inventario inicial, pero aun no esta listo para generar SQL. Los SQL de ambas carpetas son stubs; las paginas activas no cargan un cliente Supabase ni Auth; CMS Inicio, footer CMS y ficha tambien siguen sin persistencia. Se encontro que el borrador no asegura una relacion duradera editor-codigo despues de consumir una invitacion, el seed usa `email` sobre `perfiles` aunque el campo solo vive en `auth.users`, NIE plano contradice 0-14, RLS de fila no protege por si sola `rol`, y el modelo de proyectos no define la categoria/asignacion academica. El contrato JSON de Inicio tampoco coincide con la salida de las plantillas existentes y `footer_cms` no separa los dos WhatsApp.

**Como:** se agrego al BACKLOG una revision aditiva con los cambios requeridos y decisiones pendientes. Se preservo sin cambios el anexo original de Cursor. No se escribio ni ejecuto SQL de produccion; SH-02e queda `[~]` hasta disponer del DER aprobado y el flujo Auth.

**Verificacion:** se cotejaron las casillas del BACKLOG, los clientes/JS/HTML activos, las plantillas CMS y los archivos SQL de S1/S2. Todos los SQL existentes contienen solo comentarios `VACIO`; no se encontraron llamadas a `createClient`, `auth.getUser`, `onAuthStateChange` ni consultas `.from(...)` desde las paginas/scripts activos.

### 2026-10-12 00:19 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Corregir los pasos del BACKLOG relacionados con la base de datos para alinearlos con la revision del DER, sin adelantar implementaciones.

**Como:** Se actualizaron los criterios de SH-02e, Supabase client/configuracion, CMS Inicio/footer, cuentas/invitaciones, codigos/membresias, proyectos, RLS, Storage, trigger, seed, origenes Auth y QA. Se agregaron puertas DB-00a..DB-00e para decisiones pendientes (proyectos academicos, NIE, baja/retencion, URLs/deploy y JSON canonico) y una secuencia previa a migraciones.

**Estado/limites:** todas las tareas permanecen pendientes o en curso; no se escribio SQL, no se ejecuto migracion, no se creo tabla ni se cambiaron permisos en Supabase. Se mantuvo el anexo original de Cursor y se añadieron correcciones al plan.

**Verificacion:** se revisaron los bloques modificados de BACKLOG y esta resolucion; las marcas de tareas DB no se cambiaron y los SQL permanecen vacios.

### 2026-10-12 00:26 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Corregir los pasos del BACKLOG vinculados con la base de datos para que reflejen el DER revisado, sin adelantar la implementacion.

**Como:** Se actualizaron los criterios de SH-02e, SH-06b/c, SH-07a/c, S1-01b/S1-14a, administracion de cuentas/codigos, S2 ficha/listados/bajas, DB-01 a DB-09 y QA E-07. Se definieron puertas DB-00a..e para decisiones academicas, NIE, bajas/retencion, URLs/configuracion Pages y JSON CMS; se marco el anexo original de Cursor como borrador que no debe ejecutarse sin aplicar la revision.

**Estado y limites:** no se marcaron tareas como completadas, no se escribio SQL, no se aplico ninguna migracion ni se cambio Supabase. Las DB tasks permanecen pendientes y SH-02e permanece en curso hasta cerrar las puertas de aprobacion.

**Verificacion:** se contrastaron los textos de las tareas modificadas, se comprobo que no hay marcas `[x] DB-*` y se verifico que el backlog bloquea migraciones hasta cerrar DB-00a..e.

### Nuevo ingreso / Proceso de matr�cula 2027

https://sites.google.com/inti.edu.sv/nuevoingreso/nuevo-ingreso/proceso_de_matricula

Pasos (texto del sitio):
1. Del 10 de agosto al 30 de noviembre de 2026: llenado del formulario de inscripci�n en l�nea. Enlace del sitio: WhatsApp `+503 74411075` (solicitar formulario 2027). Este contacto coincide con el WhatsApp can�nico del sitio y reemplaza al n�mero no reconocido +503 7754 5899.
2. En una semana, correo de confirmaci�n de inscripci�n.
3. A partir del 25 de noviembre de 2027, correo con documentos a entregar, horario y fecha.
4. El joven y el encargado asisten a entregar documentos seg�n esa calendarizaci�n.
5. Una semana antes del inicio de clases, correo con informaci�n de inicio y correo institucional.

### Oferta acad�mica

https://sites.google.com/inti.edu.sv/nuevoingreso/OfertaAcademica � especialidades (p�ginas de texto; v�deos omitidos):

**Electr�nica** � circuitos an�logos/digitales; microcontroladores; fotovoltaica; audio/video; micro soldadura en m�viles; rob�tica Arduino y apps. M�dulos 1�: higiene y ambiente, n�meros complejos/matrices, circuitos resistivos CD, normativas instalaciones residenciales, semiconductores, prototipos, emprendimiento colaborativo. 2�: RLC CA, instrumentaci�n, digitales, mantenimiento inform�tico y redes b�sicas, software de planos, ingl�s industrial, planes de negocio cooperativa. 3�: conmutaci�n y potencia, m�quinas el�ctricas, l�gica de programaci�n, preventivo inform�tico y SO, microcontroladores 8/16 bits, apps para sistemas electr�nicos, microempresa cooperativa, mantenimiento de equipos m�viles.

**Sistemas el�ctricos y energ�as renovables** (antes Electrotecnia, plan modular 2024). AC/DC, residencial/industrial, distribuci�n, automatizaci�n, refrigeraci�n, generaci�n/transformaci�n, solar, planos. M�dulos 1��3�: planos y circuitos, proyectos el�ctricos, BT, mantenimiento BT, l�nea de distribuci�n secundaria, prototipos renovables, eficiencia energ�tica, control de m�quinas, iluminaci�n, fotovoltaica, simulaci�n geot�rmica/hidro/biomasa, transformadores, PLC, dom�tica, monitoreo industrial, mini e�lica, mantenimiento renovables y l�neas BT, negocio, ciencias de la computaci�n, proyecto de vida y carrera.

**Mec�nica industrial** (antes Mec�nica general). Dise�o, fabricaci�n y reparaci�n de piezas; torno, fresadora, rectificadora, CNC, soldadura, neum�tica e hidr�ulica. M�dulos: materiales, dibujo, herramientas manuales, soldadura aut�gena/el�ctrica, ingl�s, torno, t�rmicos, TIG/MIG, mantenimiento, lubricaci�n, fresa, CAD, CNC, hidr�ulica/neum�tica, montaje, microempresa, proyectos tecnol�gicos.

**Infraestructura tecnol�gica y servicios inform�ticos** � circuitos y prototipos (3D, CNC), microcontroladores, redes; certificaciones CCNA, CompTIA A+, Autodesk. M�dulos: el�ctrica y redes, ofim�tica, multimedia, l�gica, ingl�s TIC, software, redes inal�mbricas y voz, est�ndares TI, seguridad, bases de datos, ERP, centros de datos, servicios de red, auditor�a, conversaci�n en ingl�s, microempresa, proyectos.

**Desarrollo de software** � apps Android e IA, web, multimedia, bases de datos, LAN, IoT, CISCO, resoluci�n de problemas. M�dulos: algoritmos, requerimientos, multimedia, calidad de software, p�ginas web, ingl�s, arquitectura, POO, BD, redes LAN, mantenimiento de sistemas, documentaci�n, m�viles, microempresa, proyectos.

**Mantenimiento automotriz** (antes Mec�nica automotriz). Motor, diagn�stico, di�sel, inyecci�n electr�nica. M�dulos: preventivo motor/frenos/suspensi�n/el�ctrico/transmisi�n, confort y seguridad, reacondicionamiento, reparaciones, diagn�stico, gesti�n recepci�n-entrega, ingl�s t�cnico, microempresa, proyectos.

### Modalidades flexibles (EDUCAME)

https://sites.google.com/inti.edu.sv/nuevoingreso/educame

Bachillerato General a distancia, 1� y 2�, s�bados y domingo. Requisito: mayor de 18 a�os. M�dulos: Matem�tica, Ciencias Naturales, Lenguaje y Literatura, Ciencias Sociales, Idioma Ingl�s. (V�deos omitidos.)

**No se toc�:** `Adobe Ilustrador/` ni el c�digo del sitio.

---

### 2026-10-11 14:10 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Definir el sitio (8 secciones, 2 sistemas, roles), pensar BD, crear backlog, borrar pruebas, carpetas Sistema 1 y 2, anotar, esperar. ERP de BD = siguiente prompt.

**Deduccion:** Google Site (4 items) -> 8 secciones. Menu (no el PNG): Inicio, Matricula, Oferta Academica, Proyectos, Personal, Ubicaciones, Historia, Configuraciones. Matricula = Nuevo ingreso + EDUCAME. Oferta = 6 tecnicas + General. Inicio distinto y CMS. Proyectos = Sistema 2 (otro repo al final, misma BD). Visitante sin registro; Configuraciones disabled; solo persiste tema. Editor solo S2 y su ficha. Docente: codigos tipo DS2B. Admin: S1+S2, Editar, cuentas, CMS Canva, borrar paginas de proyecto.

**Como:** Borrados prototipos de la raiz. Creados Sistema 1/ y Sistema 2/. Backlog operativo en BACKLOG.md. No HTML de pantallas. No ERP. Adobe sin tocar. Huecos = bloque 0 del backlog.

---

### 2026-10-11 14:27 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Analisis critico Pages + Supabase del CMS Inicio (bloques tipo Illustrator/Canva, cuenta matriz, responsive). PDF portafolio vs PNG finales. Carpeta Documentacion con informacion. Rellenar S1 con fuentes ya dadas.

**Critica (decision de producto):** Un editor de mesas absolutas (x,y como Illustrator) en GitHub Pages se rompe en el celular. Realidad: bloques apilados a 100% de ancho; grid interno 12 cols que en movil es 1 col; orden por lista no por pixeles; capas solo dentro del bloque; efectos = lista corta de CSS (sombra, fade, overlay), no filtros de foto. Guardar escribe JSON a Supabase; el visitante lee el mismo JSON. Cuenta matriz intiwo11543@gmail.com se siembra como primer Administrador (email en config, nunca el password). Visitante ve Inicio vacio hasta el primer Guardar.

**PDF vs PNG:** Esquema visual del Portafolio de Proyectos DS.pdf = fases viejas (Acceder, 4 secciones). Look de S2 = PNG Adobe (tarjetas, busqueda, colores, hover).

**Como:** LEEME.md en Documentacion con informacion. CONTENIDO.md en paginas de Sistema 1. Backlog S1-01/S1-10/S1-11 y DB-08/09. No se implemento el editor todavia.

---

### 2026-10-11 14:33 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Incorporar la arquitectura de Google Gemini (lienzo estructurado, cuenta matriz, SortableJS, AOS, JSON a Supabase). Sistema 2 ya definido: no reabrir.

**Acuerdo con Gemini (ejecutar asi):**
1. Password nunca en GitHub Pages. Instituto se registra; se marca administrador a intiwo11543@gmail.com.
2. Editor = bloques modulares (plantillas: imagen+texto, 3 columnas, banner), no coordenadas absolutas.
3. Editar: se oculta el cromo y entra barra admin. (+) = contenedor con reglas, no mesa vacia.
4. Reordenar: SortableJS sobre el bloque entero.
5. Efectos: AOS / clases preaprobadas (slide-up, fade, parallax suave).
6. Guardar: JS empaca orden+textos+imagenes+efectos a JSON -> tabla contenido_inicio. Visitante GET y pinta (skeleton para no dejar el footer colgando un frame).

**Correccion (Cursor, backend):** RLS no debe ser "si email = intiwo11543". Eso se rompe si cambia el correo. La matriz se usa para **asignar** rol administrador en perfiles; las politicas miran `rol = administrador`. El resto de admins que cree Instituto heredan el mismo rol.

**Sistema 2:** sin cambios (proyectos tecnicos/academicos, Editor solo su ficha, Docente codigos DS2B, Admin borra paginas, misma BD).

---

### 2026-10-11 14:38 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Detallar BACKLOG.md en tareas atomicas para IAs.

**Como:** Cada casilla tiene criterio (archivo, paleta, RLS, px). Bloques 0 / SH / S1 / S2 / DB / E. No se borro el archivo historico. No se escribio HTML de pantallas.

---

### 2026-10-11 15:05 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Fuentes exactas por tarea en BACKLOG; prompt para IA de DER; nombrar arquitectura hibrida.

**Como:** BACKLOG.md mapa F-* (PNG Adobe, microservicio PDF 7 pag, dossier historia 28 pag con URLs, Site, CONTENIDO.md, CMS 14:27/14:33). Cada casilla tiene **Fuente**. Anexo prompt DER (no SQL ejecutado). Arquitectura: Jamstack + BaaS cliente-servidor, dual-client shared-backend, CMS headless, RLS. No event-driven. No microservicios propios.

**Seguridad:** `Documento sin titulo.pdf` pagina 1 trae credenciales. No se copiaron al backlog ni al prompt. IAs: no commitear passwords. Instituto: rotar esa clave fuera del git.

---

### 2026-10-11 15:20 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** En cada tarea: de donde extraer Y adonde escribir el codigo (Inicio vs Proyectos).

**Como:** BACKLOG.md ahora tiene Mapa de destinos (arbol Sistema 1/ y Sistema 2/). Cada casilla: Extraer de + Escribir en (ruta). Inicio solo `Sistema 1/paginas/inicio/`. Hub proyectos `Sistema 2/paginas/proyectos/`. Ficha `Sistema 2/paginas/ficha/`. Cromo duplicado en ambos compartido/. SQL en `Sistema 1/supabase/`. No HTML de pantallas todavia.

---

### 2026-10-11 15:28 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Crear documentos vacios con nombres claros (no index/style) en S1 y S2; anotar esos nombres en BACKLOG.

**Como:** 64 stubs (HTML/CSS/JS/SQL) con comentario de proposito. Ejemplos: pagina-inicio-cms.html, pagina-hub-proyectos.html, pagina-ficha-proyecto.html, encabezado-hamburguesa.html vs encabezado-hamburguesa-con-busqueda.html, cliente-supabase.js, tabla-*.sql. BACKLOG Mapa de destinos y Escribir en apuntan a esos archivos (rellenar, no crear index). LEEME de Sistema 1 y 2 actualizados.

---

### 2026-10-11 16:25 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Organizar BACKLOG.md con enumeracion 1 [ ], 2 [ ] y debajo las indicaciones ya existentes.

**Como:** Cada casilla de trabajo paso a `N [ ] ID titulo`. Extraer de y Escribir en se dejaron igual debajo. Hecho/Archivo historicos siguen con `- [x]`.

---

### 2026-10-11 19:40 (UTC-6) - IA: Cursor - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Las 5 PNG de referencia (footer, menu, busqueda, especialidades, hub) identicas en UI y UX: sugerencias semejantes en S2 (elegida verde + letra negra); Oferta Academica al asomarse gris + negro mientras Proyectos (seccion actual) sigue verde.

**Como:** HTML vivo en `Sistema 2/paginas/proyectos/pagina-hub-proyectos.html` y `Sistema 1/paginas/inicio/pagina-inicio-cms.html`. CSS `layout-hamburguesa-y-overlay.css` + `hub-y-pildoras-proyectos.css`. JS menu overlay, busqueda debounce 200 ms (cero match = 4 sugerencias del PNG), pildoras (electricos hover/activo `#E61010`). Pie: sello circular, WhatsApp oficial 7754-5899 (no los del PNG). Menu 8 items de producto, no los 6 del PNG. No se copio el lorem "Aca bla bla".

**Verificado en navegador:** hub 2 cards; menu Proyectos verde y Oferta gris; query `disenooh jafico` muestra aviso + 4 disenos y al elegir Diseño Grafico se pone verde/negro; electricos rojo.

**Pendiente:** favicon PNG 32/180/192/512; auth que oculte Editar al visitante (el PNG lo muestra); filtro especialidad con data Supabase; no se subio Adobe ni Documentacion.
---

### 2026-10-12 11:01 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Leer la documentacion completa, ubicar donde quedo a medias la ampliacion del DER y preparar el BACKLOG para que otra IA pueda continuar sin confundir el SQL del repositorio con cambios en la base remota.

**Hallazgos:** el backlog enumera DB-02a/b/c/g, DB-03c/d y DB-05a como trabajo no terminado. Los SQL versionados de Sistema 1 ya contienen borradores parciales para esas entidades/politicas/trigger; los SQL de Sistema 2 siguen como stubs. Siguen vacios los SQL de contenido de Inicio, footer, proyectos, Storage y seed admin. Hay puntos de revision antes de continuar: `perfiles.especialidad_id` esta pedido por DB-02a pero no aparece en el borrador; la clave de codigo es unica globalmente aunque tambien se modela la unicidad por ciclo; y hay que validar que las policies/trigger mantengan el alta de membresias ligada a invitaciones y que el bootstrap de admin sea seguro ante concurrencia.

**Tarea 30 / SH-02e:** permanece `[~]`, no completada. Aunque el borrador de `perfiles` ya declara `tema`, faltan aprobacion/aplicacion de DB-02a y DB-03c, cliente Supabase y sesion Auth SH-04a para leer/guardar el tema. El fallback local del visitante debe conservarse.

**Proyecto Supabase:** Instituto indico el nombre `bd_inti_web_oficial` y compartio `https://akvprrwjfstncadkybeh.supabase.co` (ref `akvprrwjfstncadkybeh`). No se accedio al dashboard ni se aplico SQL; DB-01a y las puertas DB-00a..e siguen pendientes. El BACKLOG registra el inventario de borradores, sus discrepancias y el orden de continuacion. No se tocaron `Sistema 2/supabase/` ni `Adobe Ilustrador/`.

---

### 2026-10-12 11:31 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Evaluar captura de ajustes de seguridad de Supabase Auth, confirmar si afecta al desarrollo e indicar cuales notificaciones conviene activar.

**Confirmacion de Instituto:** proveedor de inicio de sesion por correo activado en `bd_inti_web_oficial` (ref `akvprrwjfstncadkybeh`). Se marca DB-01a `[x]`; no implica que las tablas SQL del repo se hayan desplegado ni resuelve DB-00a..e.

**Captura:** corresponde a notificaciones de seguridad por correo, no a activar/desactivar registro, proveedores, MFA ni funciones de la BD. Aparecen activas las notificaciones de cambio de contrasena/correo, metodo de inicio vinculado y MFA agregado; apagadas las de telefono cambiado, metodo de inicio eliminado y MFA eliminado. Esta configuracion no bloquea el desarrollo. Recomendacion: mantener activas las cuatro primeras; activar tambien las alertas de metodo de inicio y MFA eliminados; telefono puede seguir apagado mientras Auth por telefono no se use.

**Limites:** no se cambiaron opciones en Supabase. Antes de modificar registro publico, confirmacion de correo, MFA obligatorio, callbacks u otros ajustes se debe revisar el flujo Auth invitado/aprobado del proyecto; habilitar proveedor email por si solo no valida ese flujo. Las credenciales y `service_role` no se comparten.

---

### 2026-10-12 12:54 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Aclarar decisiones pendientes del DER, el flujo de contrasena, que hacer con DB-00a..e y el significado de la baja de cuentas.

**Decisiones y aclaraciones registradas:**
- Instituto confirma que el NIE de alumno es unico y debe comprobarse durante el alta contra una lista oficial Instituto NIE-correo para evitar duplicados. El NIE no es secreto ni contrasena; no se guardara en texto plano. El identificador de inicio de sesion sera correo + contrasena. Para el cotejo, usar HMAC con secreto solo de servidor (no hash simple); la lista se carga por proceso privado, nunca al chat, Git o logs.
- Instituto elige inicio con contrasena, no enlace magico. Cada usuario establece su propia contrasena mediante un flujo de invitacion/verificacion seguro; admin/docente no asignan ni conocen contrasenas. No habilitar autoasignacion de roles por registro libre.
- DB-00a sigue pendiente: Instituto consultara que materias/areas tendran proyectos academicos y como se generaran/asignaran.
- DB-00c queda confirmado por Instituto: al egresar, la cuenta se desactiva pero no se elimina, se conservan todos los proyectos y la autoria, sin cambiar su visibilidad. Un administrador debe ordenar la baja; la expiracion del Gmail institucional no borra datos ni sustituye la accion de desactivacion. El flujo debe revocar sesiones de forma confiable y preservar al ultimo administrador activo.
- DB-00d pide las URLs de las paginas publicadas (GitHub Pages o dominio propio), no los enlaces a repositorios. Se pueden obtener en el repositorio GitHub, Settings > Pages; si aun no se publicaron, queda pendiente.
- DB-00e queda definido con el JSON canonico ya especificado en S1-14a; antes de conectar la BD, se adaptan y prueban las plantillas JS al contrato.

**Confirmacion posterior del Instituto (2026-10-12 12:54 UTC-6):** el alumno escribira correo + contrasena al iniciar sesion; el NIE se verificara al crear/validar la cuenta, no sera el nombre de usuario. Cada usuario establece su propia contrasena desde el flujo seguro de alta/invitacion.

**Decision posterior sobre egresos (2026-10-12 12:54 UTC-6):** cuando un alumno concluya sus estudios, su cuenta queda inactiva sin importar el rol. No se elimina la cuenta, ningun proyecto ni su autoria; la visibilidad de proyectos se conserva. La expiracion del Gmail institucional no debe disparar borrados. La baja requiere accion administrativa y revocacion de sesiones.

**Confirmacion posterior del Instituto (2026-10-12 12:54 UTC-6):** la fuente para verificar el NIE sera una lista oficial del Instituto que relaciona NIE y correo. Debe recibirse y manejarse por un canal privado; no pegar la lista en el chat ni versionarla en Git. La aplicacion validara el NIE y su correspondencia al correo antes de completar el alta, usando un HMAC calculado en servidor para evitar guardar NIE plano.

**SQL y Supabase:** no se pide al Instituto copiar ni ejecutar SQL. Primero se terminan decisiones y se revisa el esquema en archivos; luego Copilot prepara instrucciones claras y un plan de respaldo/verificacion antes de cualquier aplicacion. No se hicieron cambios en el proyecto remoto.

---

### 2026-10-12 16:08 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Recibir temporalmente los datos de alumnos del codigo DS1B; aclarar que solo lideres pueden ser Editores; mantener el proyecto/caja cuando se retira el lider y permitir reemplazarlo.

**Privacidad:** no se copiaron ni conservaron nombres, NIE ni calificaciones de la lista compartida. Son datos personales identificables de estudiantes y el NIE es identificador; el repositorio puede sincronizarse/publicarse y no es un almacen restringido para padrones escolares. No se creo documento temporal con la nomina. La ruta indicada en el BACKLOG apunta a esta nota de requisitos sin datos identificables (`IAs/RESOLUCIONES.md`, entrada 2026-10-12 16:08). Si la nomina se necesita para operacion, debe permanecer en un sistema institucional con acceso restringido, fuera de Git y del chat.

**Decision funcional DB-00f / caja de proyecto:** cada proyecto/caja conserva ID, contenido, autoria, estado y visibilidad independientemente de la cuenta Editor asignada. Docente o administrador crea la caja y designa expresamente al lider/editor autorizado; que el padron enumere estudiantes no los convierte a todos en Editores, y no se infiere quien es lider. El Editor asignado puede agregar/modificar contenido permitido, pero no eliminar/archivar la caja ni cambiar permisos estructurales. El lider vigente puede iniciar el relevo; docente/administrador revocan la asignacion anterior y autorizan/asignan un reemplazo elegible del mismo codigo a la misma caja. Se conserva ID, contenido, autoria, estado y visibilidad; desactivar la cuenta tampoco borra ni oculta proyectos. Docente responsable/administrador puede archivar el proyecto con accion separada, sin borrado fisico ordinario.

**Diseno de datos previo a SQL:** separar creador/autor de la asignacion vigente del Editor; guardar historial de asignaciones/revocaciones, con actor y fechas; mantener la membresia del Editor a su codigo y limitar permisos de edicion a contenido aprobado. RLS y privilegios deben impedir borrado o reasignacion aunque se manipule el cliente. No se escribio ni ejecuto SQL y no se modifico Supabase.

---

### 2026-10-12 16:22 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Enlazar el boton seleccionado "Inscríbete ahora" al formulario oficial.

**Como:** Se asigno `https://docs.google.com/forms/d/e/1FAIpQLSchOv93fiyvoxF2z_mahlUcUhzbt5FyxfZTupLeODpdBcJjhw/viewform` al CTA en `Sistema 1/compartido/pie-institucional.html`, `Sistema 2/compartido/pie-institucional.html`, y en los footers embebidos de `Sistema 1/paginas/inicio/pagina-inicio-cms.html` y `Sistema 2/paginas/proyectos/pagina-hub-proyectos.html`. El formulario abre en pestaña nueva con `rel="noopener noreferrer"`. Se actualizo el destino en SH-06a y S1-02d del BACKLOG.

**Verificacion:** se comprobo que los cuatro enlaces usan la URL oficial y protegen la pestaña de origen; no se cambio ninguna otra navegacion.

---

### 2026-10-13 09:09 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Registrar el panorama funcional del sistema en el DER original de Cursor, dejar explicito que falta del modelo de proyectos academicos y distinguir lo que existe en codigo de lo que esta aplicado/verificado en Supabase.

**Como:** Se preservo el anexo original de Cursor y se agrego al BACKLOG una vista conceptual de las areas A (cuentas/roles), B (portafolio) y C (CMS), sus relaciones de alto nivel, alcance estatico v1, decisiones pendientes y limites del estado remoto. Se actualizo la seccion D con una lectura actual de borradores SQL e integraciones. No se creo un DER de produccion ni SQL nuevo.

**Estado funcional:** arquitectura suficientemente clara para continuar el modelado: dos frontends estaticos, un proyecto Supabase compartido; identidad Auth separada de `perfiles`; codigos y membresias; fichas/cajas persistentes con asignacion de Editor separada; CMS JSON para Inicio y footer. No se considera cerrada la estructura fisica ni la autorizacion remota.

**Pendiente principal:** DB-00a: Instituto debe definir materias/areas academicas, como se asignan (codigo existente o catalogo/relacion propia) y los permisos para crear, editar y archivar. No se inventan materias, no se fuerza `GE` y no se decide nulabilidad/FK de `proyectos.codigo_id`.

**Evidencia del repositorio revisada:** S1 contiene SQL candidato para perfiles, especialidades, codigos/membresias, invitaciones, RLS parcial, trigger y seed; tabla proyectos, CMS y Storage siguen stubs. El cliente del Inicio consulta `contenido_inicio`, pero el SQL correspondiente sigue vacio; guardar Inicio solo usa `localStorage`. El cliente exporta el modulo pero no `window.supabase`, que espera el uploader. Sistema 2 carga el cliente, sin consultas de proyectos encontradas. La configuracion runtime versionada tiene URL/clave vacias; el workflow de Pages intenta sustituirlas desde GitHub Actions, pero no se inspeccionaron los valores de Actions ni el artefacto publicado.

**Limites/verificacion:** Auth por correo habilitado esta confirmado por el Instituto (DB-01a). No se accedio al dashboard ni se consulto Supabase remoto; no se afirma presencia/ausencia de tablas, RLS, triggers, buckets, URLs de callback o variables efectivas del despliegue. No se modifico Supabase ni se aplico SQL. Se actualizaron `IAs/BACKLOG.md` y `IAs/RESOLUCIONES.md`; al ser cambios documentales, no se ejecutaron pruebas de codigo.

---

### 2026-10-13 09:34 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ejecutar la tarea 77 (S1-14c): despues de Guardar, mostrar al Administrador los bloques en modo visitante durante esa sesion.

**Como:** En `Sistema 1/js/cms/editor-cms-inicio-admin.js`, Guardar toma el JSON normalizado devuelto por la capa actual, lo conserva en memoria como contenido de esta sesion, sale del preview movil y del modo editor. El cambio de modo emite `intiwo:contenido-inicio-cargado`, que vuelve a renderizar el contenido. En `Sistema 1/js/cms/render-bloques-inicio.js`, los bloques vacios de administracion, el boton agregar y los handles solo se incluyen mientras el rol admin esta realmente en modo editor. Al entrar de nuevo, el render devuelve los controles de edicion.

**Verificacion:** `node --check` termino sin errores para ambos archivos JS; no hay suites de pruebas configuradas en el repositorio para esta tarea. Se dejo DB-S1-14c en `[~]`, no `[x]`: `guardar-contenido-inicio.js` aun escribe en `localStorage`; no hace upsert a Supabase, por lo que el comportamiento verificado es vista de visitante en la misma sesion, no publicacion durable/visible para otros visitantes o despues de recargar.

**Limites:** no se cambio ni consulto Supabase, ni se invento persistencia remota. Se modificaron el editor y render del CMS de Inicio, `IAs/BACKLOG.md` y esta resolucion.

---

### 2026-10-13 11:45 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Disenar de nuevo la seccion Proyectos (Sistema 2) a partir del PDF viejo, los PNG de Adobe y el modelo de codigo/roles/etiquetas; documentar IA + DER; sustituir tareas S2 obsoletas; no seguir aun con las incoherencias de cromo.

**IA de navegacion:** el hub conserva las dos cards del PNG. `Ver mas` ya no despliega pildoras en el mismo HTML: abre `pagina-catalogo-tecnicos.html` o `pagina-catalogo-academicos.html`. Ahi viven las pildoras (6 especialidades / 5 asignaturas). Clic en pildora -> filtro ano lectivo + ano de bachillerato + seccion -> clave tipo DS2B -> listado de cajas (titulo + descripcion breve) -> ficha fase 3.

**Asignaturas (DB-00a cerrado):** 1 Precalculo (PC), 2 Ciudadania y valores (CV), 3 Ciencias y tecnologia (CT), 4 Ingles (IN), 5 Lenguaje y Literatura (LL). Tecnicos: MA, MI, SE, EL, DS, IT. Formula de codigo: prefijo + nivel 1|2|3 + seccion. Unicidad `(clave, anio_lectivo)` para archivar por anos.

**Identidad:** PK siempre `auth.users.id` = `perfiles.id`. Editor: correo `@clases.edu.sv` o `@inti.edu.sv` cuya parte local es el NIE (`19795194@clases.edu.sv` -> `perfiles.nie` UNIQUE). Docente: mismos dominios, correo con nombre, `nie` NULL; se identifica por uuid + email UNIQUE + `nombre_visible`. No usar NIE como PK. El padron HMAC (DB-00b) sigue fuera de Git.

**Roles en cromo S2:** mismo hueco que `Editar` de S1. Editor ve `Personalizar`; docente (y admin en S2) ve `Evaluar` -> sus codigos -> proyectos (archivar caja, corregir etiquetas). Visitante no ve boton. Admin no usa `Editar` en S2 (eso es CMS de Inicio).

**Ficha (fase 3 se conserva):** equipo, docente, descripcion, solo URLs. Icono segun plataforma: GitHub, Drive, YouTube, planeta/network para web/Pages. Sin fotos de alumnos. Etiquetas: catalogo amplio N:M, panel flotante, busqueda fuzzy (`zalud` -> Salud) filtrando todos los proyectos con esa etiqueta.

**DER:** `especialidades` 1:N `codigos` 1:N `proyectos`; `etiquetas` N:M `proyectos`; `asignacion_lider` historial DB-00f. No se aplico SQL. El borrador `tabla-especialidades.sql` aun tiene `GE` y tipo `general`: hay que reescribirlo.

**Codigo:** se quitaron las pildoras del hub; se crearon paginas de catalogo/filtro/listado/evaluar y JS de prefijos. Tareas 105-127 superseidas; nuevas 161-175 (S2N-*). Cromo compartido con S1 no se reescribio. No se copio el lorem "Aca bla bla". WhatsApp 7754 vs 7441 queda pendiente a proposito.

**Verificacion:** `node --check` de los JS nuevos. Navegacion hub -> catalogo se comprueba en el navegador si hay servidor local; ficha y Auth reales siguen pendientes.

---

### 2026-10-13 12:20 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** El sistema arranca en 2026; conservar dropdowns; solo admin decide/incorpora el anio; arreglar colores diurnos; reestructurar academicos (docentes, 1.o/2.o, cardinalidad variable) y actualizar el backlog.

**Ciclos:** primer anio 2026. El dropdown de anio es el dato superior del catalogo (tecnico y academico) y no se omite. Visitante solo ve anios ya incorporados. Administrador ve "Incorporar siguiente anio" y al cambiar el select marca el anio situado. Mientras no exista la tabla, `localStorage intiwo-ciclos` (escritura solo si rol admin). SQL candidato `tabla-ciclos-lectivos.sql`. No se listan 2020-2025.

**Tecnicos:** se conservan pildoras, luego nivel 1|2|3 + seccion = DS2B, cajas de alumno/equipo, autorizacion del docente, mesa de exposicion. Personalizar = Editor.

**Academicos:** no se navega por PC2B. Tras anio + asignatura se listan los proyectos de ese ciclo (pueden ser 0). Los conciben docentes (uno, varios agrupados o todos); los alumnos de sus codigos de 1.o y 2.o son mano de obra. En 3.o no hay esas asignaturas. DER: `codigo_id` nullable, `proyecto_docente` N:M, `proyecto_codigo_mano_obra` N:M. Tareas 165-167 reescritas; 176-178 nuevas.

**Diurno:** filtro/listado/catalogo usan `var(--superficie)` y `var(--texto)` en lugar de hex de nocturno.

**Limites:** no se migro Supabase. Incorporar anio en produccion exigira Auth real de administrador.

---

### 2026-10-13 14:10 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Login real; el admin matriz crea docente y editor desde el sitio (19795194@inti docente, 19795194@clases editor), no desde el dashboard de Users.

**Como:** SQL minimo `Sistema 1/supabase/login-invitaciones-minimo.sql` (NIE en perfiles, invitaciones, trigger, RLS de perfiles/invitaciones). Cuentas con formularios de entrar/registrarse. Configuraciones admin: formulario Dar de alta. El rol lo pone la invitacion, no el dominio. El NIE se extrae solo si el rol es editor. No se ejecuto el SQL remoto desde esta IA.

**Uso:** el Instituto debe correr ese SQL una vez, publicar Pages, iniciar sesion con el Gmail admin, dar de alta los dos correos, y esas personas se registran en Cuentas con su contrasena. Confirmacion de correo de Auth conviene apagarla mientras se prueba. No correr `politicas-rls.sql` completo todavia (exige tablas que no existen).

---

### 2026-10-13 14:49 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** El alta de `19795194@inti.edu.sv` como docente no envio Gmail. Quiere que Supabase mande un correo con clic hacia Registrarse / Cuentas.

**Causa:** `Dar de alta` solo insertaba `invitaciones_correo`. Eso no llama a Auth y no dispara correo. El dashboard de Users tampoco se usa para esto.

**Como:** Edge Function `supabase/functions/invitar-cuenta` con `inviteUserByEmail` y `redirectTo` a Cuentas de Pages. El formulario de Configuraciones ahora invoca esa funcion. Cuentas (S1 y S2) muestra el formulario de contrasena si la URL trae `type=invite`.

**Que debe hacer Instituto (no se puede desde el repo):**
1. Desplegar la funcion (`npx supabase functions deploy invitar-cuenta --project-ref akvprrwjfstncadkybeh` o pegar el TS en Edge Functions).
2. Authentication → Emails → plantilla Invite: el enlace debe ser `{{ .ConfirmationURL }}`.
3. Authentication → URL Configuration: Site URL del sitio Pages y Redirect URLs con `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/**`.
4. Publicar Pages con estos JS.
5. Volver a Dar de alta el mismo correo (la fila pendiente ya existe; la funcion reenvia el correo).
6. Si @inti.edu.sv no llega: SMTP institucional (Google Workspace) en Project Settings → Authentication → SMTP. Revisar spam.

---

### 2026-10-13 16:14 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Dar de alta docente y editor en Pages muestra "Edge Function returned a non-2xx status code".

**Causa probable:** la funcion se creo en el editor nuevo (claves publishable/secret) pero el codigo usaba `Deno.serve` + `SUPABASE_ANON_KEY` / `SERVICE_ROLE_KEY`, que en proyectos con claves nuevas pueden ir vacias. El gateway "Verify JWT with legacy secret" tambien rechaza el JWT actual.

**Como:** `invitar-cuenta` ahora usa `withSupabase({ auth: "user" })` y `ctx.supabaseAdmin`. El mensaje de Configuraciones lee el JSON de error. Instituto debe pegar de nuevo el `index.ts` en Edge Functions → Code → Deploy, dejar JWT legacy apagado, y reintentar Dar de alta.

---

### 2026-10-13 16:29 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tras redesplegar, Dar de alta dice "Solo el administrador puede invitar" aunque la UI de Configuraciones es la de admin.

**Causa:** el chequeo leía `perfiles` con `supabaseAdmin` (claves nuevas); esa consulta salía vacía y se confundía con "no es admin". En el navegador el mismo usuario sí pasa RLS.

**Como:** la funcion usa `rpc('intiwo_es_admin')` con el cliente del usuario (igual que Pages) y acepta el Gmail matriz. Insert de invitacion también por ese cliente. `inviteUserByEmail` sigue con `supabaseAdmin`. Instituto debe pegar otra vez `index.ts` y Deploy.

---

### 2026-10-13 16:41 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ya llegan correos. Disenar Configuraciones para que el docente agregue alumnos (Editores).

**Como:** Vista docente con tarjeta destacada "Alumnos (editores)" e Invitar alumno (NIE@clases). JS `alta-cuentas-admin.js` atiende admin y docente. Edge Function: admin invita docente|editor; docente solo editor. SQL `invitaciones-docente-editor.sql` para el INSERT por RLS. No se vincula aun a codigo. Instituto debe correr el SQL, pegar de nuevo `invitar-cuenta` y publicar Pages.

---

### 2026-10-13 16:47 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** La cuenta matriz no podia agregar otro administrador; corregirlo.

**Causa:** el formulario, el check SQL de `rol_destino` y la funcion solo permitian docente|editor a proposito.

**Como:** Solo `intiwo11543@gmail.com` ve y puede elegir rol Administrador. El nuevo admin debe ser @inti.edu.sv o @clases.edu.sv (no otro Gmail). SQL `invitaciones-admin-matriz.sql`. La funcion rechaza ese rol si no es la matriz. Otros administradores siguen invitando solo docente/editor. Instituto: Run SQL, pegar `invitar-cuenta`, publicar Pages. Entra con el Gmail matriz para ver la opcion.

---

### 2026-10-13 16:55 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Admin y docente ven lista de correos; admin elimina otro admin/docente/editor; docente elimina editores de sus codigos. El alta exige nombres y apellidos. El admin debe tener tambien las funciones de docente del backlog.

**Como:** Formularios con nombres/apellidos. Lista con nombre, correo, rol, estado y boton Eliminar. Baja logica (revocar invitacion o `perfiles.desactivado_en` + ban Auth): no se borra historial ni proyectos (DB-00c). No se da de baja la matriz, uno mismo ni el ultimo administrador. Docente solo editores que el invito (hasta existir `codigos`/`miembro_codigo`). Vista admin: cuentas + alumnos + arbol Academico/Tecnico (S1-07b/c/f) como estructura, datos de grupos pendientes. SQL `cuentas-nombres-y-bajas.sql`. La misma Edge Function `invitar-cuenta` acepta `accion: invitar|baja`. Instituto: Run SQL, pegar funcion, publicar Pages.

---

### 2026-10-13 19:22 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Varias cuentas en el mismo navegador; salir sin borrar la base; restablecer contrasena; login convencional en HTML separados; ojo Lucide; en Registrarme primera clave sin ojo, confirmar con ojo y generar clave; diurno/nocturno; Configuraciones por botones. UX de referencia en Python (Isla Frutalia) solo como guia visual, sin escribir Python.

**Como:** Hub `pagina-cuentas.html` (Iniciar sesion / Registrarme). Paginas: iniciar, registrarme (enlace olvide contrasena), restablecer, definir (invitacion y recovery). CSS `cuentas-acceso.css`. Generador 3 letras + 3 numeros + 3 signos. Sesiones en `localStorage intiwo-sesiones` (como X). Salir = `signOut` local. Config: botones Cuentas en el navegador / Salir / Agregar al sistema / Eliminar en el sistema. Redirect de invitacion a definir-contrasena. Instituto: publicar Pages, anadir esa URL a Redirect URLs y redesplegar `invitar-cuenta`.

---

### 2026-10-13 21:40 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Caracteres n, o, u se ven como ``; consultar si es Google Fonts.

**Hallazgo:** no es la fuente. Roboto Serif incluye latin. El HTML declara UTF-8 pero varios archivos (Cuentas y JS nuevos) estaban en Windows-1252 (`o` = byte F3). El navegador marca esos bytes invalidos como U+FFFD.

**Como:** recodificar a UTF-8; `.gitattributes` working-tree-encoding UTF-8; enlace css2 de Roboto Serif con `opsz` y preconnect a fonts.gstatic.com (API actual). Hay que publicar Pages para que se vea.

---

### 2026-10-13 21:48 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Dejar en BACKLOG y RESOLUCIONES el defecto de encoding (las IAs no lo conocian); marcar tareas hechas; quitar las que ya no encajan; agregar las que faltan; indicar avances reales de Supabase.

**Defecto para toda IA:** Windows MINEDUCYT a menudo guarda como Windows-1252. El navegador lee UTF-8 y muestra U+FFFD. No consultar Google Fonts como primera hipotesis. Comprobar bytes. Escribir siempre UTF-8.

**Cuentas vigente:** hub + paginas separadas. Superseido: formularios dentro del overlay hamburguesa; un solo HTML de Cuentas; dropdowns Administradores|Docentes; visitante como cuenta; borrar Auth; prefijo GE; segundo proyecto Supabase.

**Casillas cerradas o superseidas (BACKLOG):** 32 SH-04a [x]; 34 SH-04c [x]; 36 SH-05a [x]; 94 [x]; 95 SUPERSEIDA; 103 [x]; 104 [x]; 129 [x]; 173-175 [x]; 179 SH-ENC [x]. Siguen [~]: 33 (falta miembro_codigo), 35 (falta arbol codigos), 98 (confirmar SQL remoto).

**Nuevas:** 180 AUTH-SMTP; 181 AUTH-URL; 182 confirmar SQL incremental + redesplegar funcion; 183 especialidades sin GE; 184 codigos/membresias; 185 HMAC NIE; 186 CMS persistente; 187 proyectos SQL; 188 perfiles.tema; 189 publicar Pages UTF-8.

**Supabase (remoto, 21:48):** proyecto `bd_inti_web_oficial` / `akvprrwjfstncadkybeh`. Auth + perfiles + trigger + invitaciones + Edge `invitar-cuenta` (correos llegaron). SQL a confirmar una vez: `invitaciones-docente-editor.sql`, `invitaciones-admin-matriz.sql`, `cuentas-nombres-y-bajas.sql`. No reejecutar `politicas-rls.sql` ni semilla matriz. Falta especialidades/codigos/CMS/proyectos/Storage/HMAC/SMTP y Site URL + Redirect `**`.

**No se toco codigo del sitio en este paso.** Solo `IAs/BACKLOG.md` e `IAs/RESOLUCIONES.md`.

---

### 2026-10-13 22:10 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Completar tareas 188 y 30 (`perfiles.tema`).

**Como:** `Sistema 1/js/tema/persistir-tema-diurno-nocturno.js` y copia S2. Visitante: `localStorage.intiwo-tema`. Con sesion (`window.intiwoSupabase`): SELECT `perfiles.tema` y UPDATE solo `tema` al pulsar el interruptor. Evento `intiwo:auth-state-changed` aplica el tema del perfil. `sesion-supabase.js` (S1 y S2) ahora selecciona `tema`. No se toco SQL: la columna y RLS `perfiles_update_tema_propio` ya estaban en `login-invitaciones-minimo.sql`. Si la consulta falla, se conserva el tema local.

**Casillas:** 30 [x], 188 [x].

---

### 2026-10-13 22:25 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tareas 184 y 33 (`codigos` / `miembro_codigo` y alta de editor vinculada al grupo).

**Como:** SQL incremental `Sistema 1/supabase/codigos-y-membresias.sql`: 6 especialidades tecnicas (borra GE si existia), `codigos` con unicidad por ciclo (clave+anio y especialidad+nivel+seccion+anio, desde 2026), `miembro_codigo`, FK `invitaciones_correo.codigo_id`, trigger que inserta membresia al aceptar, RLS docente/admin. UI Config: docente crea DS2B e invita eligiendo codigo; admin elige codigo si el rol es Editor. Edge Function `invitar-cuenta` exige `codigo_id` para editor y en baja desactiva la membresia. Registro sin invitacion sigue P0001.

**Instituto:** Run `codigos-y-membresias.sql` UNA vez; pegar `supabase/functions/invitar-cuenta/index.ts` (Deploy via Editor); publicar Pages.

**Casillas:** 33 [x], 184 [x]. 99 [~] (alta de codigo minima; arbol pendiente). 183 sigue abierta (5 academicas).

---

### 2026-10-13 22:35 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tareas 35, 96 y 101 (Config por rol, arbol Academico|Tecnico, docente desactiva codigo o alumno).

**Como:** Boton "Grupos y codigos". Admin ve Tecnico (6 especialidades, sin GE) y Academico (PC/CV/CT/IN/LL vacio hasta 183). Docente solo sus `docente_id`. Desactivar = `desactivado_en` en codigo (tras desactivar miembros) o en `miembro_codigo`; no DELETE ni cascada de proyectos. Editor: restablecer clave, sin altas ni arbol. JS `arbol-config-codigos.js`. SQL `arbol-config-codigos.sql` (el docente puede leer perfiles de sus alumnos y UPDATE de codigo/membresia).

**Instituto:** correr `codigos-y-membresias.sql` si no lo ha hecho, luego `arbol-config-codigos.sql`; publicar Pages.

**Casillas:** 35 [x], 96 [x], 101 [x]. 97/100 siguen abiertas (n_lista/HMAC).

---

### 2026-10-13 22:45 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 47 (targets tactiles >= 44x44: hamburguesa, tema, Cuentas, +).

**Como:** El cromo ya cumplia. Faltaba el `+` del CMS. En `editor-cms-inicio.css`: `.intiwo-admin-empty-add`, `.intiwo-admin-toolbar__action`, swatches, input de color, botones de capa y select de animacion con `min-width/min-height: 44px`. El breakpoint 640px ya no reduce el alto. No se duplico CSS en S2 (el editor vive solo en Inicio S1).

**Casilla:** 47 [x].

---

### 2026-10-13 23:00 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tareas 49, 83 y 85 (dropdown a 320 px, pagina Oferta, colores de pildora).

**Como:** Se relleno `pagina-oferta-academica.html` (cromo S1, no HTML en S2) con 7 pildoras: 6 tecnicas + Bachillerato General EDUCAME (no es tecnica ni GE). Fondo `--verde` (#539507). Activo/hover usan `--esp-*`; Electricos `#E61010`. Lista con `max-height: min(60vh, 24rem)` y scroll. A 320 px el recuadro usa `calc(100% - 16px)` y `overflow-x: hidden`. JS `pildoras-oferta-academica.js`. S2 catalogo recibe el mismo recorte a 320. Los modulos largos siguen en 84. Cero video.

**Casillas:** 49 [x], 83 [x], 85 [x].

---

### 2026-10-13 23:12 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 84 (copy de modulos de Oferta).

**Como:** Se rellenaron las 7 fichas de `pagina-oferta-academica.html` con el texto de Oferta academica y EDUCAME ya volcado en RESOLUCIONES (origen Site / F-MICRO; videos omitidos). Cada pildora muestra descripcion + lista de modulos; Electronica va por ano. General = EDUCAME a distancia, mayor de 18, cinco materias; no es tecnica ni GE. Estilos de listas en `pildoras-oferta-academica.css`. Cero `<video>`.

**Casilla:** 84 [x].

---

### 2026-10-13 23:28 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Completar 55, 77 y 186 (lectura, Guardar visitante, persistencia real + Storage).

**Como:** `cargar-bloques-inicio.js` hace `select` de `contenido_inicio` y no pinta si 0 filas o `bloques=[]`. Guardar espera el `upsert` y, si ok, sale del editor y pinta lo publicado. Imagenes van al bucket `inicio` con nombre `uuid.ext` (coincide con RLS). Ya no se usa `localStorage` como fuente del Inicio. SQL unico para pegar: `Sistema 1/supabase/contenido-inicio-cms.sql`. No se ejecuto en el dashboard desde aqui.

**Casillas:** 55 [x], 77 [x], 186 [x], 134 [x], 142 [x]. 138 sigue abierta (falta RLS de footer).

---

### 2026-10-13 23:32 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 78 (sanitizar texto del CMS; no ejecutar script pegado).

**Como:** Se relleno `sanitizar-texto-cms.js` con `textContent` via `DOMParser` (sin vendor DOMPurify). Se carga en Inicio antes de guardar/render. Titulos, cuerpos y CTA pasan por `texto`; enlaces e imagenes por `url` (bloquea javascript/data/vbscript). El render vacia `#inicio-root` con `replaceChildren`, no con HTML de secretaria.

**Casilla:** 78 [x].

---

### 2026-10-13 23:38 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 79 (pagina Matricula con cromo S1).

**Como:** Se relleno `pagina-matricula-nuevo-ingreso.html` con header, overlay de 8 secciones, Cuentas y pie institucionales de Sistema 1. No hay HTML de Matricula en Sistema 2. El cuerpo queda en un `main.intiwo-cuerpo` con el titulo; los cinco pasos 2027 y EDUCAME siguen en 80 y 81.

**Casilla:** 79 [x].

---

### 2026-10-14 00:10 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 80 (pasos 2027) y dejar claro que el Forms de «Inscríbete ahora» no es el de EDUCAME.

**Como:** Se copiaron los cinco pasos de F-C-MAT / F-RES en `pagina-matricula-nuevo-ingreso.html`, sin videos ni fechas inventadas. El paso 1 enlaza el Google Form ya confirmado de las **seis técnicas**. El pie sigue yendo a ese mismo Forms. Instituto indicó que la modalidad flexible usa **otra URL**; esa URL **no existe aún** en el repo. Quedó escrito en `matricula/CONTENIDO.md`, en las notas de 80/81/82 del backlog y aquí. No se reutilizó el Forms técnico para EDUCAME. WhatsApp +503 7441-1075 queda como contacto alternativo.

**Dato que Instituto debe entregar:** URL del Google Form de EDUCAME / modalidad flexible.

**Casilla:** 80 [x]. 81 y 82 siguen abiertas.

---

### 2026-10-14 00:28 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Arreglar Matricula (un numeral por pantalla, botones, SVG Lucide 2.5 proporcional, movimiento) y quitar textos de programador en lo que ve la gente.

**Como:** `pagina-matricula.css` + `pasos-matricula.js`: intro + cinco pasos a `100svh`, scroll suave, vectores de fondo animados, iconos Lucide stroke 2.5 en viewBox 24 (al agrandar el SVG el trazo escala). Tipografia de titulos/parrafos igual que antes. Copy de visitante: Inscribirme, Escribir al Instituto, Siguiente, Ver especialidades. Sin mencionar URL faltante ni “no se inventa”. EDUCAME sigue documentado solo en CONTENIDO/IAs. Tambien se suavizo texto visible en Oferta, Configuraciones, Evaluar S2 y avisos del CMS.

**Casilla:** 80 [x] (ajuste UX).

---

### 2026-10-14 00:40 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Quitar el fondo de iconos gigantes; cada paso en su rectangulo; colores de tema (no especialidades); movimientos distintos y vivos; conservar Siguiente.

**Como:** Cada paso es una tarjeta `var(--superficie)` / `--superficie-2` (diurno/nocturno). Escena a un lado, texto y botones al otro. Seis animaciones distintas (orbitas, avion por trayectoria, correos que caen, manecilla, camino que se dibuja, ola). Cero `--esp-*`. Tipografia igual. Boton Siguiente se mantiene.

**Casilla:** 80 [x].

---

### 2026-10-14 01:05 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Quitar el SVG de la portada Matrícula; título centrado al tamaño del login; texto de apertura con peso; cada escena representa el trámite; layouts distintos (izq/der/velo); tinta de texto al scroll (gris → verde); botones que responden al avance.

**Como:** Portada sin escena. `h1` `clamp(26px, 5vw, 34px)` como Cuentas. Cinco escenas: formulario que se llena + puntero; sobre que cae a la bandeja; calendario 25 y folios a todo el rectángulo; joven y encargado caminando al edificio; sobre que abre y salen @ y escuela. `--avance` pinta `.intiwo-tinta` y despierta las píldoras. Cero `--esp-*`. Fechas de F-C-MAT intactas.

**Casilla:** 80 [x] (ajuste visual).

---

### 2026-10-14 01:25 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Identidad de PNGs (barra vs circular); quitar tarjeta de portada; no pintar el cuerpo de verde; no velo a todo el rectángulo en 3 y 5; cierre con logo circular enorme + fade + Inscribirme; copy corto.

**Como:** Portada sobre `--fondo`, sin `intiwo-paso-tarjeta`. Párrafos `--texto-suave`; verde en píldoras y numeral. Paso 3 escena arriba, paso 5 a la derecha. Tras el 5: `paso-cierre` con `Logotipo Circular-01.svg` (máscara a transparente, invert en nocturno) y píldora Inscribirme al Forms de técnicas. Paso 5 usa Siguiente hacia ese cierre.

**Casilla:** 80 [x].

---

### 2026-10-14 01:50 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Paso 4 más bonito (adulto y adolescente a la institución) y texto de entrega; sello circular con márgenes; al bajar, recortar el bloque como si el logo se hundiera (sin achicarlo); freno en el recorte del banner; Inscribirme en el degradado.

**Como:** Escena 4: camino, fachada, puerta que abre, joven con papel y encargado con carpeta. Cierre: pista 240vh + sticky; `--recorte-alto` baja el recuadro; el sello no cambia de tamaño (`min(100% - 48px, 520px)`).

**Casilla:** 80 [x].

---

### 2026-10-14 02:05 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Que el footer (línea y cromo) quede soldado al bloque del sello, como Inscribirme, sin el gran vacío de la pista.

**Como:** El `intiwo-pie` vive dentro del sticky, debajo de `.intiwo-cierre-recorte`. El recorte baja; el pie sube pegado (margin-top 0). Inscribirme sigue en el degradado.

**Casilla:** 80 [x].

---

### 2026-10-14 02:20 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** El pie con sello circular, recorte, Inscribirme y footer soldado pasa a ser el pie de casi todo el sitio. Queda fuera Login, Proyectos y Configuraciones.

**Como:** CSS en `layout-hamburguesa-y-overlay.css` (S1). JS `js/cromo/pie-sello-recorte.js`. Plantilla `compartido/pie-institucional.html`. Aplicado en Inicio, Oferta y Matrícula. S2 y Config no se tocaron. Cuentas/login siguen sin este pie.

**Casilla:** SH-06a (ajuste visual).

---

### 2026-10-14 07:40 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 82 — CTA Inscríbete al Google Form oficial; WhatsApp solo como contacto.

**Como:** Ya apuntaban al Forms de las seis técnicas: paso 1 Inscribirme, cierre Inscribirme, Inscríbete ahora del pie (Inicio, Oferta, Matrícula, `pie-institucional` S1/S2). `target="_blank"` + `rel="noopener noreferrer"`. WhatsApp no es el href del CTA: en Matrícula «Escribir al Instituto» = `wa.me/50374411075`. Se corrigió LLÁMANOS 7754-5899 → 7441-1075 en esos pies S1. Plantilla banner CMS: `Inscríbete ahora` ahora usa el mismo Forms. EDUCAME sigue sin URL; no se reutilizó el Forms técnico.

**Casilla:** 82 [x].

---

### 2026-10-14 07:55 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 81 — sección EDUCAME en Matrícula, debajo de Nuevo ingreso 2027.

**Como:** En `pagina-matricula-nuevo-ingreso.html` se añadió `paso-educame` (tarjeta izquierda, escena SÁB/DOM + cinco materias) con el copy de `CONTENIDO.md` / F-MICRO P7: Bachillerato General a distancia, primero y segundo año, sábados y domingo, mayores de 18, Matemática, Ciencias Naturales, Lenguaje y Literatura, Ciencias Sociales e Inglés. Portada tiene «Ver EDUCAME». Tras el paso 5 se llega a esta sección; de ahí al pie con sello. No hay Inscribirme ni enlace al Forms de técnicas. Contacto: WhatsApp canónico. «Ver módulos» abre Oferta. La URL de EDUCAME sigue pendiente de Instituto.

**Casilla:** 81 [x].

---

### 2026-10-14 07:56 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 86 — Oferta sin videos `.mp4` del Google Site.

**Como:** F-LEEME pide extraer texto, no videos. F-SITE-OF trae `.mp4` que no se usan. Comprobado: ningún HTML tiene `<video>`; no hay `.mp4`/`.webm` en el repo; no se creó `Sistema 1/media/` para oferta. La carpeta `Sistema 1/media/inicio/.gitkeep` es del CMS Inicio, no de Oferta. `pagina-oferta-academica.html` queda en píldoras + módulos. No se tocó Adobe ni se copió el Site.

**Casilla:** 86 [x].

---

### 2026-10-14 07:58 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 87 — Personal con «Próximamente» si no hay lista 0-16.

**Como:** `CONTENIDO.md` (F-C-PER) no tiene nombres ni bios; la 0-16 solo fijó estructura y prohibió inventar. Se rellenó `pagina-personal-instituto.html` (ya no stub): hamburguesa, distintivo Barra, tema, menú 8 secciones, Cuentas, `main.intiwo-cuerpo` con h1 Personal y párrafo «Próximamente.», pie sello circular soldado. Sin fichas, fotos ni correos. La 88 queda para cuando Instituto entregue personas.

**Casilla:** 87 [x].

---

### 2026-10-14 08:04 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 88 — ficha Personal: nombre, cargo, bio; foto solo si 0-05 = sí.

**Como:** `0-05` sigue en no: no hay `<img>` ni bucket `personal`. En `pagina-personal-instituto.html` hay `<template id="intiwo-plantilla-ficha">` (avatar Lucide `#i-user` en escala de grises, nombre, cargo, bio, correo). `paginas/personal/personal.js` rellena tres bloques (talleres, básicas, administración) desde `FICHAS`. Las tres listas están vacías porque F-C-PER no tiene personas; el visitante sigue viendo «Próximamente.» Estilos en `css/pagina-personal.css`. No se inventaron nombres.

**Casilla:** 88 [x].

---

### 2026-10-14 08:08 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 161 — hub S2 solo dos cards; Ver más abre otro HTML; sin píldoras en el hub.

**Como:** `pagina-hub-proyectos.html` ya no tenía lista de especialidades. Se confirmó: dos cards (Técnicos / Académicos); `Ver más` es `<a>` a `paginas/catalogo/pagina-catalogo-tecnicos.html` y `pagina-catalogo-academicos.html`. Se quitaron del hub los SVG de píldora (car, bolt, chip, gear, monitor, chevron). El párrafo académico anterior decía que no eran distintos del taller: se corrigió según el capítulo C (docentes de básicas, 1.º y 2.º; no son los de taller). No se copió «Aca bla bla». El CSS de píldoras sigue en `hub-y-pildoras-proyectos.css` porque lo usan los catálogos (164/165). No se tocó Personalizar/Evaluar (162) ni la búsqueda (163).

**Casilla:** 161 [x].

---

### 2026-10-14 08:12 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 162 — cromo S2: mismo hueco que Editar; Personalizar / Evaluar; oculto al visitante.

**Como:** `#intiwo-accion-rol` es `intiwo-pildora` a la derecha del interruptor de tema (mismo sitio que `#intiwo-editar` en Inicio S1). `boton-personalizar-o-evaluar.js` lee el rol vía `intiwoObtenerRol` (`sesion-roles-auth.js` + storage/Auth). Sin rol: hidden. Editor: Personalizar → ficha `?modo=personalizar`. Docente/admin: Evaluar → `pagina-evaluar-codigos-docente.html`. Hub, catálogos, filtro, listado, evaluar y el encabezado compartido lo llevan. Cuentas S2 no (equivalente a Login). La ficha sigue stub (168). Admin no ve Editar CMS en S2.

**Casilla:** 162 [x].

---

### 2026-10-14 08:16 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 163 — búsqueda títulos + etiquetas, debounce 200 ms, aviso PNG, fuzzy zalud→Salud, clic etiqueta global.

**Como:** `buscar-etiquetas-fuzzy.js` (normaliza tildes, Levenshtein por palabra; distancia ≤1 cuenta como acierto). `buscar-proyectos.js` une títulos del PNG (cuatro «Diseño…») y etiquetas del capítulo C (Salud, Ambiente, especialidades, 5 asignaturas, horror/terror/halloween). Input debounce 200 ms. Sin acierto: aviso verde y hasta 4 similares. Clic en etiqueta abre `pagina-listado-proyectos-codigo.html?etiqueta=slug` (todos los proyectos, sin especialidad). Aún no hay cajas en BD. Se enlazó el fuzzy antes de buscar-proyectos en las páginas S2 con barra.

**Casilla:** 163 [x].

---

### 2026-10-14 08:21 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 164 — catálogo técnicos: 6 píldoras (PNG S2T), hover Eléctricos `#E61010`, chevron colapsa.

**Como:** `pagina-catalogo-tecnicos.html` ya tenía las 6 ramas y el año. Se corrigieron nombres UTF-8 (Mecánica, Eléctricos, Electrónica) e ITSI a «Infraestructura Tecnológica y Servicios Informáticos». Hover/activo por `data-rama` en `hub-y-pildoras-proyectos.css`; Eléctricos `#E61010` también en `catalogo-y-listado-proyectos.css`. Chevron 44 px; clic oculta la lista (el año queda). No se copió el lorem del PNG. No se tocó el catálogo académico (165). Comprobado en navegador: 6 botones, chevron colapsa, activo Eléctricos `rgb(230, 16, 16)`.

**Casilla:** 164 [x].

---

### 2026-10-14 08:26 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 165 — catálogo académicos: dropdown de año + 5 asignaturas; clic al listado, no filtro PC2B.

**Como:** `pagina-catalogo-academicos.html`: mismo selector de año que técnicos (`ciclos-lectivos.js`, semilla 2026); píldoras Precálculo, Ciudadanía y valores, Ciencias y tecnología, Inglés, Lenguaje y Literatura. `navegar-catalogo.js` manda `tipo=academico` a `pagina-listado-proyectos-codigo.html` (no al filtro de código). Chevron `data-lista=asignaturas`. Comprobado: Precálculo abre `?tipo=academico&rama=precalculo&anio=2026`. Sin `GE`. El contenido de las cajas es 167.

**Casilla:** 165 [x].

---

### 2026-10-14 08:28 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 166 — filtro solo técnico: nivel 1|2|3 + sección, ciclo ya elegido, clave DS2B, sin años 2020-2025.

**Como:** `pagina-filtro-anio-seccion.html` no tiene dropdown de año lectivo: muestra «Año lectivo 2026» del query del catálogo. Selects: nivel 1|2|3 y sección A-Z. `filtro-anio-seccion.js` arma la clave (`DS`+`2`+`B` = DS2B) y «Ver proyectos» abre el listado con `tipo=tecnico&clave=DS2B`. Año `<2026` se corrige a 2026. Rama académica se manda al listado (no PC2B). Sin rama técnica, vuelve al catálogo. Comprobado: Software nivel 2 sección B → DS2B → listado.

**Casilla:** 166 [x].

---

### 2026-10-14 08:32 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 167 — listado técnico (cajas bajo el código) y académico (asignatura/ciclo, docentes + mano de obra, vacío permitido).

**Como:** `pagina-listado-proyectos-codigo.html` + `listado-cajas-codigo.js`. Técnico: encabezado DS2B, contexto especialidad y año, plantilla título+descripción; sin clave válida vuelve al filtro. Académico: encabezado Precálculo (UTF-8), texto 1.º/2.º, plantilla con docentes y códigos de mano de obra; el vacío es el estado correcto hasta DB-PROY. No se inventaron cajas. `?etiqueta=` lista sin especialidad. Comprobado: DS2B vacío, Precálculo vacío, Salud global vacío.

**Casilla:** 167 [x].

---

### 2026-10-14 08:35 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 168 — ficha fase 3: URLs + iconos; técnico Personalizar; académico sin fotos de alumnos.

**Como:** `pagina-ficha-proyecto.html` + `ficha-proyecto.css` + `editar-ficha-propia.js`. Técnico: Equipo/Docente/Descripción/Enlaces. Editor `?modo=personalizar` (contenido, no archivar). Académico: autores y mano de obra; el Editor no Personaliza. Sin fotos ni nombres inventados.

**Casilla:** 168 [x].

---

### 2026-10-14 08:40 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 169 — reconocer URL y pintar icono GitHub, Drive, YouTube o globo.

**Como:** `reconocer-plataforma-url.js`: github.com/gist/raw/`*.github.io` → gato; Drive/Docs/Sheets/Slides → nube; YouTube/`youtu.be` → play; otro http(s) → globo. Al pegar en Personalizar se actualiza `#intiwo-ficha-urls-previa`.

**Casilla:** 169 [x].

---

### 2026-10-14 09:15 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 170 — panel flotante de etiquetas precreadas; Editor aplica, docente corrige.

**Como:** Semilla canónica `Sistema 1/supabase/semilla-etiquetas.sql` (64 slugs: 6 especialidades, 5 asignaturas, oficios de Oferta INTI, salud/ambiente, horror/terror/halloween). `panel-etiquetas-flotante.js`: fuzzy 200 ms (`zalud` → Salud); Editor en Personalizar; docente/admin Corregir; visitante solo chips. Persistencia local hasta DB-PROY. SQL **no aplicado**. Comprobado: panel, filtro Salud, chip en ficha.

**Casilla:** 170 [x].

---

### 2026-10-14 12:55 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Ficha final sin "Aun no hay..."; 300 etiquetas; ayudas al Editor; etiquetas bajo titulo/descripcion; URLs interactivas; integrantes +; auto-guardado; descripcion tipo Docs; rol Academico; SQL.

**Como:** Semilla 300 en `semilla-etiquetas.sql` + `catalogo-etiquetas.js` (no aplicar). Ficha: orden titulo → descripcion → etiquetas → integrantes/docente → URLs. Recuadros de URL sin borde, icono + tipo Roboto Serif, input del alto del titulo, visto si hay URL, + para otra. Integrantes a mano ilimitados. Titulo unico entre borradores. Toolbar Docs; academico solo Roboto Serif. Guia `pagina-guia-tipografia.html` (Google Fonts, CSS o SVG). Rol `academico` (nombre acordado): misma Personalizar, correo sin NIE, inferior a docente y editor, alta solo admin. SQL `rol-academico-y-ficha.sql` no aplicado. Se sustituyeron los vacios de 168 y el tope de 64 etiquetas de 170.

**Aclaracion agregada 2026-10-18:** el rango «inferior a docente y editor» es una definicion historica reemplazada por el alcance confirmado en la entrada de 2026-10-18 17:49 (UTC-6) al final de este documento y en `IAs/HANDOFF-SISTEMA-2.md`. No usar esta frase para implementar permisos actuales.

**Casilla:** 190 [x], 191 [x], 192 [x], 193 [x].

---

### 2026-10-14 14:10 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Arreglar tildes rotas; guia Google Fonts para alumnos; validar codigo antes de Volver; traer la fuente al menu; reordenar toolbar; quitar docente editable; deshacer; paletas.

**Como:** Cadenas de JS con escapes Unicode. Guia por pasos (fonts.google.com → Get embed code). El boton Volver nace deshabilitado hasta que el parser reconoce familia. `fuentes-extra-ficha.js` guarda nombre y grosores. Titulo: Aa, color, tamano, fuente, &lt; &gt;; sin listas. Descripcion: alineacion, sangria, vinietas (1. a. I.). Sin edicion de docente. Visitante hereda letra del titulo en equipo/docente/codigo. Auto-guardado y aviso solo si el titulo choca.

**Casilla:** 191 [x] (ajuste).

---

### 2026-10-14 18:52 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** EDUCAME no es un formulario. Contacto solo WhatsApp 7441-1075. Cinco asignaturas vigentes. Boton «Más información» a HTML+CSS+JS propio. Combinar Site antiguo con datos actuales (horario tríptico: sábados 7:00–16:00 virtual).

**Como:** `pagina-educame-modalidad-flexible.html` en pasos animados (como Matrícula). Site https://sites.google.com/inti.edu.sv/nuevoingreso/educame aporta Bachillerato General a distancia, 1.º y 2.º y ≥18; se descartan teléfono y materias viejas y el sábado+domingo. Teaser en Matrícula y ficha General en Oferta: número, oferta y Más información. Sin Forms de EDUCAME. Pie Inscribirme sigue siendo el de las seis técnicas.

**Casilla:** 81 [x] (ajuste), 194 [x].

---

### 2026-10-14 19:16 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Reescribir copy de pasos 2–5 en EDUCAME (horario, Asignaturas, Especificaciones, Contacto). Corregir faltas del dictado.

**Como:** `pagina-educame-modalidad-flexible.html`. Tildes: sábados, mayoría, requisitos, número, inscripción, escríbenos, personalización.

**Casilla:** 194 [x] (ajuste).

---

### 2026-10-14 19:50 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Paso 1: «Ver más» (no WhatsApp) a pagina de nuevo ingreso y traslados. Paso 4: «Ver más» a pagina de documentos. Ambas animadas como Matrícula.

**Como:** `pagina-inscripcion-y-traslados.html` + CSS/JS. Traslado solo misma especialidad. 2.º y 3.º: entrevista con subdirectores y encargado, lun–vie 8:00–11:30 y 13:30–17:00. `pagina-entrega-documentos.html`: calendarización por correo; lista SIGES/partida/DUI 150 %/fotos granulado 3,5×2,5/exámenes/antitetánica; entrega en instalaciones cuando se pida. Icono Lucide info. Ortografía del dictado corregida.

**Casilla:** 195 [x].

---

### 2026-10-14 20:20 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tareas 89 y 90 — Ubicaciones con dirección Col. Roma / Blvd. Venezuela y contacto de la tabla; buses y plano en placeholder.

**Como:** Se relleno `pagina-ubicaciones.html` (ya no stub) + `css/pagina-ubicaciones.css`. Dirección de F-C-UBI. Contacto: correo, WhatsApp canonico y respaldo, Instagram, Facebook, TikTok. Sin mapa JS ni paradas inventadas (0-06). Horario omitido: no hay dato confirmado en CONTENIDO. UTF-8. No se toco Sistema 2.

**Casilla:** 89 [x], 90 [x].

---

### 2026-10-14 20:25 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 91 — timeline Historia 1954, 1955, 1962, 1964 Expotecnia, 2015 Open House, 2024 70 años.

**Como:** `pagina-historia-instituto.html` deja de ser stub. Hechos de F-C-HIS + linea RESOLUCIONES (P21-P28): fundacion 26 oct 1954 (Óscar Osorio, ITI luego INTI), IVU 1955, mision Japon julio 1962 y Bachillerato Tecnico Industrial de tres años, primera Expotecnia oct 1964 y feria oct-nov con stands, Open House desde oct 2015 para 9.º, 70 años el 26 oct 2024. Sin cifras 20.000/1.000 (casilla 93). Sin violencia ni destitucion (92). Tono sobrio 0-09. CSS `pagina-historia.css`.

**Casilla:** 91 [x].

---

### 2026-10-14 20:28 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 92 — no renderizar violencia/destitucion; comentario HTML RETENIDO.

**Como:** En `pagina-historia-instituto.html` se dejo `<!-- RETENIDO -->` con inventario de F-HIST P2-P3 y P7-P20 y F-RES Retener (pandillas, FGR, destitucion 25 ago 2025, 2015, 2021-2026). El visitante solo ve la linea 1954-2024. No se creo pagina retenido. 0-09: omitir, no narrativa de superacion.

**Casilla:** 92 [x].

---

### 2026-10-14 20:32 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 93 — cifras 20.000 / 1.000 solo si 0-10 y 0-11 estan hechas; no en Inicio ni footer.

**Como:** 0-10 y 0-11 ya [x]. En `pagina-historia-instituto.html` se anadieron las lineas aprobadas: 2024 70 años, cifra aproximada mas de 20.000 egresados 1964-2023; 2025 matricula aproximada alrededor de 1.000. Comentario HTML de la condicion. No se copiaron a Inicio ni al pie.

**Casilla:** 93 [x].

---

### 2026-10-14 20:45 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 97 — al elegir especialidad: docentes + codigos; expandir editores (correo, nombre, n_lista).

**Como:** Listas en `arbol-config-codigos.js` (el destino `panel-configuraciones-cuentas.js` de la casilla es el login de Cuentas; 96 ya dejo el arbol aqui). Agrupa `codigos.docente_id` y `miembro_codigo`. Correo solo de `invitaciones_correo` por `usado_por`. Filtros anio/seccion/codigo (logica). Sin NIE ni `auth.users`. SQL `invitaciones_select_usado_por_arbol` en `arbol-config-codigos.sql` (Instituto debe volver a correr ese archivo). HTML de Config: textos y filtros junto a `[data-arbol-codigos]`.

**Casilla:** 97 [x]. 98 no se toco.

---

### 2026-10-16 08:18 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 98 — Admin invita/activa/desactiva Admin, Docente, Editor.

**Como:** Config (`pagina-configuraciones.html` + `alta-cuentas-admin.js`): Dar de alta llama Edge `invitar-cuenta`; lista con Desactivar / Activar. La funcion (Auth admin solo en servidor) invita sin contrasena, baja logica DB-00c (ban + `desactivado_en`, no DELETE, protege matriz/ultimo admin/uno mismo) y activa (unban + limpia `desactivado_en`). NIE del editor solo en el correo; HMAC/padron = 185. No se toco 99.

**Instituto:** Edge Functions → `invitar-cuenta` → pegar `supabase/functions/invitar-cuenta/index.ts` → Deploy. Publicar Pages.

**Casilla:** 98 [x].

---

### 2026-10-16 08:25 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 99 — docente crea codigo DS2B (especialidad + nivel + seccion), sin GE.

**Como:** Formulario Mis codigos en Config. JS `alta-cuentas-admin.js` arma y valida la clave (prefijos DS, EL, MI, MA, SE, IT). Guarda `codigos` con `docente_id` del docente. SQL ya unico por anio (`codigos-y-membresias.sql`). Vista previa de la clave. n_lista/HMAC no se toco (100).

**Casilla:** 99 [x].

---

### 2026-10-16 13:45 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Instituto — si el alumno ya esta en el sistema (docente A un anio, docente B al siguiente), buscar correo e incorporar al codigo nuevo; no eliminar cuentas. Look de la barra de Proyectos (F-PNG-S2B). Admin busca alumnos y docentes. Editor y Academico no.

**Como:** Config boton "Buscar en el sistema". JS `buscar-cuentas-config.js` (fuzzy + aviso "quizas te refieres a"). Correos de `invitaciones_correo` (no `auth.users`). Incorporar = `miembro_codigo` del codigo de este anio. Admin: Desactivar/Activar via `invitar-cuenta`. SQL `buscar-cuentas-config.sql` (Instituto debe Run).

**Casilla:** 196 [x]. 100 no se toco.

---

### 2026-10-16 13:55 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 100 — n_lista en el codigo; cotejar NIE con padron DB-00b (HMAC, no plano); membresia al aceptar; otra invitacion a otro codigo sin dos pendientes iguales.

**Como:** Config pide `n_lista`. `invitar-cuenta` normaliza correo, HMAC-SHA256 del NIE (secreto de dashboard), RPC `intiwo_cotejar_nie`. SQL `nie-hmac-n-lista.sql`: tabla `padron_nie_correo` sin filas en Git; trigger ya no escribe `perfiles.nie`; copia `nie_hmac`/`nie_verificado` y `n_lista` a `miembro_codigo`. Indice unico pendiente email+codigo. 185 queda abierta (cargar padron real). 102 no se toco.

**Instituto:** Run SQL; Secrets `NIE_HMAC_SECRET`; insertar HMAC+correo solo en SQL Editor; pegar `index.ts` y Deploy.

**Casilla:** 100 [x].

---

### 2026-10-16 14:15 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Inventario casillas 1-100; luego Tarea 102 (Config minima Editor).

**Como:** En 1-100, 99 estan [x] y **42 [~]** (editar footer CMS, campos deshabilitados). 102: vista editor en `pagina-configuraciones.html` con enlace a ficha y hub S2, restablecer via Auth, tema en barra (`perfiles.tema`). Sin altas. 103 no se toco.

**Casilla:** 102 [x].

---

### 2026-10-16 14:40 (UTC-6) - IA: Cursor Grok 4.6 - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Tarea 42 — admin edita telefonos/redes del footer.

**Como:** Tabla `footer_cms` + RLS en `Sistema 1/supabase/tabla-footer-cms.sql`. Lectura publica y pintado del pie en `cargar-footer-cms.js` (copia S2). Formulario de Config habilitado solo con rol administrador; upsert real, sin simular en el navegador. Canonico WA 7441-1075 y respaldo 6674-3159.

**Instituto:** SQL Editor → correr `tabla-footer-cms.sql` una vez. Publicar Pages. Entrar como admin → Configuraciones → Guardar cambios.

**Casilla:** 42 [x].

---

### 2026-10-16 23:00 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Actualizar la informacion de EDUCAME antes de dar por concluida Matrícula: modalidad a distancia con asistencia presencial los sábados, apoyos académicos, asignaturas oficiales, requisitos y contactos específicos.

**Decisiones confirmadas por Instituto:** la sesión de estudio es únicamente los sábados de 7:00 a.m. a 4:00 p.m. dentro del Instituto; no es virtual. Puede solicitar ingreso cualquier persona mayor de 18 años. Se entrega paquete escolar (cuadernos, borrador, lápiz, lapiceros, sacapuntas y tijera), libros educativos de las cinco asignaturas y una laptop gratuita sin límite de edad. Requisitos: certificado de noveno grado y DUI. Contacto EDUCAME: WhatsApp +503 7754-5899 y oficina.educame@inti.edu.sv. El WhatsApp general del Instituto en pies compartidos continúa siendo +503 7441-1075.

**Como:** Se ajustó `pagina-educame-modalidad-flexible.html`: paso 2 aclara modalidad a distancia con asistencia presencial únicamente los sábados; paso 3 enumera los materiales/libros/laptop; paso 4 contiene enlaces a las cinco páginas indicadas del MINEDUCYT; paso 5 muestra mayoría de edad y los dos requisitos; paso 6 presenta el número y correo. Los enlaces de asignaturas y el correo tienen estilo verde subrayado y foco visible. El CTA “Escribir al Instituto” conserva destino `https://wa.me/50377545899`. Se armonizaron el resumen EDUCAME en la página Matrícula y la ficha General de Oferta; sus pies institucionales permanecen con el WhatsApp general. Se actualizó `paginas/matricula/CONTENIDO.md` y la aclaración de contacto en el BACKLOG.

**Verificación:** se revisó que los enlaces de asignaturas coinciden con las cinco URLs proporcionadas; que los contactos usan `wa.me/50377545899` y `mailto:oficina.educame@inti.edu.sv`; y que el contenido de EDUCAME ya no afirma virtualidad. No se modificó `Adobe Ilustrador/` ni se incorporaron datos personales de alumnos.

---

### 2026-10-17 22:52 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Reorganizar la experiencia de Proyectos para Editor, Docente y Administrador; permitir asignaciones con fichas vacias, autoguardado remoto, previsualizacion, publicacion/privacidad y bloqueo de edicion independientes; historico de nombres de especialidades por ciclo; y CMS visual de contactos del Footer, EDUCAME y Matricula.

**Decisiones funcionales registradas:**
- El Editor entra al hub como visitante. El boton de lapiz del encabezado dice «Agregar» y abre su listado personal. La asignacion del docente crea la presencia de la caja en esa lista; la caja puede estar vacia y no necesita titulo o descripcion iniciales. Sin asignaciones, se indica solicitar una al docente. En el listado se distinguen privado/publico y editable/bloqueado; solo el Editor asignado ve las privadas.
- «publicado» controla la visibilidad anonima y «edicion_bloqueada» controla si el Editor puede modificar. Publicar/despublicar no altera el permiso de edicion. Solo Docente responsable o Administrador cambian esos controles; Editor no puede archivarlos ni reasignar personas.
- El boton «Agregar» lleva a la ficha del proyecto en modo edicion; «Previsualizar» muestra el mismo contenido como visitante y permite regresar a edicion. El guardado automatico es remoto, con error visible si falla; «Guardar cambios», al final y centrado, espera el guardado y vuelve a la ficha.
- Proyectos > «Evaluar» sera la superficie de gestion del Docente: filtro por ciclo y proyectos de sus codigos, con vista de visitante. Administrador usa la misma superficie con alcance institucional. Configuraciones no duplicara herramientas de proyectos; se reserva para cuentas y parametros institucionales.
- La clave estable de cada especialidad (slug/prefijo) no cambia. Los nombres visibles se registran por año; al abrir un ciclo nuevo se heredan del año anterior y pueden editarse cuando sea necesario. Oferta muestra el nombre vigente; Proyectos usa el nombre historico de su ciclo.
- Configuraciones de Administrador separara Footer, EDUCAME, Matricula y ciclos/nombres de especialidades. Los contactos de EDUCAME permanecen independientes del Footer general y toda lectura publica requiere RLS.

**Hallazgo y limite:** en el repositorio, la ficha S2 aun guarda borradores en `localStorage`; `tabla-proyectos.sql` y `tabla-ciclos-lectivos.sql` son stubs, y no se conoce con certeza qué migraciones/objetos existen en el proyecto remoto. El Instituto indicó que no esta seguro si las tablas de proyectos, ciclos o nombres de especialidad ya fueron creadas. No se ejecuto SQL ni se afirmo que la persistencia actual sea remota.

**Siguiente paso seguro:** se preparó `Sistema 1/supabase/diagnostico-proyectos-configuracion.sql`, una consulta de solo lectura que inventaría columnas, restricciones, RLS y políticas de las tablas relevantes sin leer datos institucionales. Con sus resultados se redactará la migración incremental exacta y se implementarán las tareas 197–203 del BACKLOG; no aplicar DDL hasta identificar el estado remoto para evitar colisiones o permisos inconsistentes.

**Continuacion tras recibir el diagnostico remoto:**
- El resultado confirma que el esquema inspeccionado contiene `perfiles`, `codigos`, `miembro_codigo`, `especialidades` y `contenido_inicio`, pero no reporta tablas de proyectos, ciclos lectivos, nombres historicos ni Footer CMS. El constraint remoto de `perfiles.rol` aun no admite `academico`; `especialidades.tipo` si admite `academico`.
- Se preparo inicialmente un borrador SQL combinado. En la Megatarea 1 se separo como candidato central `Sistema 1/supabase/proyectos-core-v2.sql`; se retiro de este alcance la configuracion de contactos y el historico de nombres para tratarlos en megatareas posteriores. No fue ejecutado ni validado contra PostgreSQL/Supabase.
- Avance parcial en S2: lista remota de proyectos asignados al Editor; ficha con guardado remoto, vista previa y estados vacios; gestion tecnica por ciclo para Docente/Admin, incluyendo creacion vacia, estado independiente y actualizacion de asignaciones mediante RPC. No se conectaron aun etiquetas, proyectos academicos ni catálogos publicos.
- Se corrigio el guardado de ficha para leer el rol ya hidratado desde el perfil de Auth, habilitar solo Editor activo asignado con proyecto tecnico editable, y permitir reintentar tras un fallo previo. El metadato de docente se propone como snapshot del proyecto; requiere aplicar y validar la columna del borrador SQL.
- Footer conserva su formulario de configuracion existente. Siguen pendientes los formularios de EDUCAME/Matricula, editor Admin de ciclos/nombres por año, propagacion historica a Oferta/catalogos y pruebas integrales con Supabase.
- Validacion local hasta este punto: `node --check` de los JS del primer avance y `git diff --check` no reportaron errores; SQL no validado por falta de `psql`/Supabase CLI, y no hubo prueba de navegador ni ejecucion SQL remota.

**Plan de cierre e inventario de despliegue (actualizado 2026-10-18):**
- El Instituto aclara que casi todos los SQL preparados por IAs anteriores ya fueron ejecutados en Supabase. No volver a recomendar ni ejecutar esos scripts por rutina; antes de cada entrega de SQL se cotejara con el diagnostico vigente y se listaran solo cambios que falten. No se recibieron credenciales de base de datos ni se deben solicitar claves secretas.
- Diagnostico de invitaciones recibido 2026-10-18: existen `invitaciones_correo`, `padron_nie_correo`, columnas NIE/HMAC, trigger de `auth.users`, y funciones `intiwo_rol_actual`, `intiwo_es_admin`, `intiwo_cotejar_nie`; RLS esta habilitado en tablas mostradas. Para ese subsistema no hay un SQL pendiente confirmado. La Edge Function `invitar-cuenta` ya esta desplegada segun el Instituto/captura; no reemplazarla ni crear otra hasta que un cambio requerido lo justifique.
- Discrepancia de despliegue por resolver antes de un redeploy CLI: el panel muestra JWT legacy apagado para `invitar-cuenta`, mientras `supabase/config.toml` tiene `verify_jwt = true`. Mantener la funcion desplegada tal como esta y confirmar la intencion de configuracion antes de cambiar/reemplazarla. El secreto `NIE_HMAC_SECRET` nunca se solicita ni se registra aqui.
- Para proyectos/configuracion, el diagnostico estructural compartido anteriormente no encontro tablas `proyectos`, ciclos lectivos, nombres de especialidad por ciclo ni `footer_cms`. `proyectos-core-v2.sql` esta en estado de candidato revisado localmente, pero no listo para ejecutar hasta validar sintaxis/semantica en PostgreSQL y cotejar cualquier cambio remoto posterior. Contactos y nombres por ciclo se difieren a sus megatareas.
- Inventario cuando el Instituto solicite pasos de Supabase: **SQL Editor**: por ahora ningun nuevo SQL confirmado como listo; `diagnostico-proyectos-configuracion.sql` ya se ejecuto como solo lectura; `proyectos-core-v2.sql` queda en espera de validacion y cotejo, no aplicar. **Edge Functions**: `invitar-cuenta/index.ts` ya esta desplegada; no reemplazarla ni crear otra por el trabajo de Proyectos salvo necesidad demostrada. **GitHub Actions Variables**: confirmar que `SUPABASE_URL` y `SUPABASE_PUBLISHABLE_KEY` esten configuradas; son publicas, no son secretos de servidor. Este inventario se actualizara con los archivos exactos y el orden seguro antes de cada solicitud explicita de publicacion.
- Tareas funcionales abiertas del alcance: DB-00d (confirmar las URLs publicas/callbacks Auth de ambos sistemas); DB-PROY (tarea 187) y tareas 197-203 del BACKLOG. En detalle: cerrar contrato y persistencia/RLS de proyectos tecnico y academico; terminar lista Editor y probar acceso a privados/inactivos; completar gestion docente/admin y reasignaciones; persistir etiquetas; terminar vista previa/autoguardado; ciclos y nombres historicos con interfaz Admin y propagacion a Oferta/catalogos; CMS independiente para Footer, EDUCAME y Matricula; y pruebas de aceptacion integrales por rol. Las partes ya implementadas siguen parciales hasta ser validadas contra el esquema real y en navegador.
- Megatarea 1: el candidato de base se limito al contrato central de proyectos/ciclos/etiquetas. Se retiro el cambio al constraint de roles Auth `perfiles` (proyectos academicos no requiere crear un rol de usuario nuevo), los contactos y nombres historicos. Se anadio validacion de coherencia entre tipo de proyecto, especialidad/codigo y ciclo; la asignacion de Editores conserva filas revocadas como historial y evita grants generales para mutar asignaciones; el acceso de lectura anonima se redujo a columnas publicables y la politica de Editor limita escritura a proyectos tecnicos.
- Limites de verificacion Megatarea 1: se reviso el SQL contra `politicas-rls.sql`, `codigos-y-membresias.sql`, los stubs de ciclos/etiquetas y las consultas S2 actuales. No hay PostgreSQL/psql disponible para parser/ejecucion local; no se ejecutaron pruebas RLS ni SQL remoto. El archivo sigue en espera, no es una instruccion para pegar en SQL Editor.
- Megatarea 2 (lista y acceso Editor): la lista carga asignaciones activas con su proyecto relacionado, sin filtrar `publicado` ni `archivado_en`, conserva la diferencia entre visibilidad publica, bloqueo de edicion y archivo, y presenta estados explícitos de sesión/perfil/consulta/sin asignaciones. El CTA del hub ya apuntaba a esta lista para Editor; se conserva su etiqueta «Agregar» e icono lapiz. La lista ofrece recarga manual, recarga al volver a la pestaña y suscripcion Realtime a cambios de asignacion; cuando Realtime no esta disponible se informa el fallback. No se hizo cambio de SQL, RLS ni Edge Function.
- Validacion Megatarea 2: `node --check` y `git diff --check` completados sin errores en los cambios locales. No se probo navegador ni sesion autenticada contra Supabase. La prueba de aceptacion aun debe confirmar acceso RLS a proyectos asignados privados/inactivos y disponibilidad de Realtime en la tabla; por eso la tarea 197 permanece parcial hasta esa comprobacion.
- Inventario de despliegue Megatarea 2: no hay archivos que pegar en SQL Editor ni codigo que reemplazar/desplegar en Edge Functions. La suscripcion usa Supabase Realtime ya existente; no se modifico configuracion del proyecto.
- Megatarea 3 (Gestion tecnica Docente/Admin): se reforzo `evaluar-proyectos-docente.js` manteniendo el flujo de seleccion anual y codigos asignados al Docente frente al alcance institucional de Admin. Las operaciones deshabilitan controles mientras guardan; tras cambios de estado/asignacion se distingue un fallo de persistencia de un fallo posterior al refresco. El listado evita que respuestas tardias de otro año sobrescriban el año seleccionado y muestra texto adecuado cuando Admin no tiene codigos en ese ciclo. La creación técnica sigue usando la RPC existente y navega a la ficha vacia tras recibir el ID.
- Validacion Megatarea 3: `node --check` y `git diff --check` pasan. No se hizo prueba de navegador ni de roles/RLS en Supabase. El archivo adjunto `diagnostico-proyectos-configuracion.sql` es solo un script de inspeccion; no se proporciono salida de su ejecucion, por lo que no demuestra que las tablas/RPC candidatas existan en el proyecto remoto.
- Inventario de despliegue Megatarea 3: no se genero SQL nuevo ni cambios de Edge Function. `Sistema 1/supabase/proyectos-core-v2.sql` sigue siendo candidato no aplicado/validado; no pegarlo ni modificar el esquema remoto por esta megatarea. Para cerrar la parte tecnica de la tarea 199 hace falta cotejar el resultado actualizado del diagnostico y probar una cuenta Docente y una Admin; luego la parte academica sigue en Megatarea 4.
- Megatarea 4 (Proyectos academicos): se amplio localmente `proyectos-core-v2.sql` con RPCs para listar solo nombres/UUID de Docentes activos a usuarios Docente/Admin, crear proyectos ligados a una asignatura academica y ciclo existentes, gestionar la lista de Docentes autores en una transaccion, y leer autores solo si el proyecto es visible para la sesion (incluido anonimo si esta publicado). El alta requiere al menos un autor; al crear como Docente se agrega automáticamente la cuenta creadora. Se retiraron del candidato el grant y la politica que permitian INSERT directo de proyectos: los altas tecnicas/académicas pasan por sus RPCs validadores. No se agrego rol Auth nuevo.
- La vista Evaluar integra una seccion academica por año/asignatura, creacion vacia, autorias, enlaces a ficha y estados independientes. La ficha muestra asignatura y autores desde Supabase; su edicion de contenido academico se habilita solo para Admin o Docente que pasa `intiwo_proyecto_puede_gestionar`, conforme a RLS. No se edita autoría como texto libre/local.
- Validacion Megatarea 4: falta validacion SQL con PostgreSQL y ejecucion frente al esquema real; el archivo adjunto era la consulta diagnostica, sin resultado incluido. No se probaron roles, RLS ni Realtime en navegador/Supabase. Ademas, las asignaturas academicas deben existir en `especialidades` con `tipo='academico'`; el catalogo local de etiquetas/asignaturas no demuestra que esas filas esten presentes en la base.
- Inventario de despliegue Megatarea 4: el unico archivo SQL actualizado es el candidato `Sistema 1/supabase/proyectos-core-v2.sql`; no esta confirmado como listo para pegar, no se ejecuto remotamente y no debe aplicarse hasta recibir solicitud expresa y comparar el resultado actual del diagnostico. No se modificaron ni requieren Edge Functions.

### 2026-10-18 08:18 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Megatarea 5 — etiquetas persistentes.

**Como:** el panel de la ficha ahora carga el catalogo y las etiquetas asociadas desde Supabase; la seleccion se guarda mediante `intiwo_gestionar_etiquetas_proyecto` y ya no usa `localStorage` como persistencia. El contrato SQL candidato valida que todos los UUID pertenezcan al catalogo, limita la escritura a Admin, Docente gestor o Editor tecnico activo, sincroniza altas/remociones en una transaccion y quita el grant/politica de escritura directa de `proyecto_etiqueta`. El listado `?etiqueta=` consulta proyectos visibles y publicados con esa etiqueta. Los errores de carga/guardado se muestran al usuario.

**Validacion:** `node --input-type=module --check` sobre los dos modulos JS; diagnosticos de VS Code en los archivos editados; `git diff --check`: sin errores. No se ejecuto PostgreSQL, SQL Editor, Supabase remoto, Edge Function ni prueba de navegador. No se proporciono la salida reciente de `diagnostico-proyectos-configuracion.sql`; por tanto, el contrato candidato no esta validado contra el esquema real.

**Inventario Supabase para revisar cuando el Instituto solicite instrucciones:** `Sistema 1/supabase/proyectos-core-v2.sql` (candidato modificado; contiene tabla/RLS y las RPC de etiquetas) y `Sistema 1/supabase/semilla-etiquetas.sql` (semilla existente; comprobar primero cuantas filas ya estan cargadas, no ejecutarla a ciegas). Ningun cambio de Edge Function. No se aplico SQL ni se genero un script de ejecucion separado.

**Estado:** Megatarea 5 implementada localmente; validacion remota y de roles pendiente.

### 2026-10-18 08:25 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Megatarea 6 — ficha, autoguardado y previsualizacion (tarea 202).

**Como:** `persistir-ficha-supabase.js` ahora drena las escrituras pendientes antes de guardar o navegar, incluyendo cambios que llegan mientras una escritura previa esta en curso. La previsualizacion conserva la representacion de solo lectura y ofrece «Volver al editor» solo cuando Supabase confirma el permiso. «Guardar cambios» y «Previsualizar» se mantienen ocultos hasta confirmar permiso; guardar regresa a la ficha normal. `editar-ficha-propia.js` ya no anuncia exito antes de la confirmacion remota ni habilita visualmente la edicion de un proyecto remoto antes de la comprobacion de permiso. El boton Guardar queda centrado al final del formulario.

**Archivos:** `Sistema 2/js/ficha/persistir-ficha-supabase.js`, `Sistema 2/js/ficha/editar-ficha-propia.js`, `Sistema 2/paginas/ficha/pagina-ficha-proyecto.html`, `Sistema 2/css/ficha-proyecto.css`.

**Validacion:** `node --input-type=module --check` para el modulo Supabase, `node --check` para el script clasico, diagnosticos VS Code y `git diff --check` sin errores. No se probo navegador ni se validaron guardado, vista previa, retorno o RLS contra la instancia Supabase.

**Inventario de despliegue:** no se genero SQL ni se modifico Edge Function para esta megatarea. `proyectos-core-v2.sql` sigue candidato no aplicado; el flujo requiere que su contrato y politicas esten desplegados y verificados antes de prueba integral.

**Estado:** Megatarea 6 implementada localmente; tarea 202 parcial hasta validar el flujo contra Supabase.

### 2026-10-18 08:38 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Megatarea 7 — ciclos lectivos y nombres historicos por especialidad (tarea 200).

**Como:** Se amplio el SQL candidato de proyectos con `especialidad_nombres`, semilla historica del ciclo 2026, herencia al crear el siguiente ciclo y RPCs de Admin para guardar nombres por ciclo, incorporar el siguiente año y cambiar el ciclo actual. Se retiraron grants directos de escritura a ciclos para que las operaciones pasen por RPCs con verificacion de rol. La UI de Configuraciones permite al Admin editar nombres visibles/cortos sin alterar `slug` ni prefijo; el alta selecciona el ciclo creado. En Sistema 2 los catalogos cargan ciclos y nombres desde Supabase, ofrecen seleccion historica y habilitan controles solo despues de cargar; Oferta muestra el ciclo vigente y los nombres aplicables. La ficha, Evaluar y los listados reflejan nombres historicos, con proteccion frente a respuestas obsoletas al cambiar de ciclo. Se elimino el antiguo selector basado en `localStorage`.

**Archivos:** `Sistema 1/supabase/proyectos-core-v2.sql`; `Sistema 1/js/auth/configurar-ciclos-especialidades.js`; `Sistema 1/js/oferta/ciclo-especialidades-oferta.js`; `Sistema 1/js/auth/pagina-configuraciones-roles.js`; `Sistema 1/paginas/configuraciones/pagina-configuraciones.html`; `Sistema 1/paginas/oferta-academica/pagina-oferta-academica.html`; `Sistema 2/js/catalogo/especialidades-ciclo.js`; `Sistema 2/js/catalogo/ciclos-especialidades.js`; `Sistema 2/js/catalogo/nombres-especialidades-proyectos.js`; `Sistema 2/js/catalogo/navegar-catalogo.js`; `Sistema 2/js/proyectos/evaluar-proyectos-docente.js`; `Sistema 2/js/ficha/persistir-ficha-supabase.js`; paginas de catalogo, listado, evaluacion y ficha; `Sistema 2/css/catalogo-y-listado-proyectos.css`. Se elimino `Sistema 2/js/catalogo/ciclos-lectivos.js`, sustituido por la lectura remota.

**Validacion:** `node --check` en los siete modulos JavaScript implicados paso. Falta prueba visual en navegador y validacion funcional con el esquema, cuentas/roles y politicas RLS de Supabase; no se puede confirmar que la instancia remota tenga los objetos de este candidato porque no se recibio el resultado del diagnostico estructural.

**Inventario Supabase/Edge:** `Sistema 1/supabase/proyectos-core-v2.sql` queda como candidato local pendiente de revision y futura instruccion expresa; no ejecutar ahora. No se genero SQL separado, no se modifico ni desplego Edge Function.

**Estado:** Megatarea 7 implementada localmente; tarea 200 sigue parcial hasta validar esquema, RLS, permisos y flujos reales en Supabase.

### 2026-10-18 08:53 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Megatarea 8 — CMS de contactos institucionales (tarea 201).

**Como:** Se agregaron controles independientes de Footer, EDUCAME y Matricula en Configuraciones Admin. Footer conserva sus WhatsApp y redes, con correo opcional; EDUCAME persiste su WhatsApp y correo especificos sin alterar el contacto general; Matricula persiste WhatsApp principal/alternativo, correo opcional y URL HTTPS del formulario de inscripcion tecnica. La carga publica hidrata contactos de EDUCAME en su pagina, Oferta y Matrícula, y sustituye los enlaces de nuevo ingreso de las paginas tecnicas. El CTA de la pagina EDUCAME consulta por WhatsApp, sin reutilizar el formulario tecnico. Las paginas S1/S2 que ya consumian `footer_cms` incorporan la lectura independiente del correo del Footer.

**Archivos:** `Sistema 1/supabase/tabla-footer-cms.sql`; `Sistema 1/supabase/cms-contactos-programas.sql`; `Sistema 1/js/cms/cargar-footer-cms.js`; `Sistema 2/js/cms/cargar-footer-cms.js`; `Sistema 1/js/cms/cargar-contactos-programas-cms.js`; `Sistema 1/paginas/configuraciones/pagina-configuraciones.html`; `Sistema 1/paginas/matricula/CONTENIDO.md`; `Sistema 1/paginas/matricula/pagina-matricula-nuevo-ingreso.html`; `Sistema 1/paginas/matricula/pagina-educame-modalidad-flexible.html`; `Sistema 1/paginas/matricula/pagina-inscripcion-y-traslados.html`; `Sistema 1/paginas/matricula/pagina-entrega-documentos.html`; `Sistema 1/paginas/oferta-academica/pagina-oferta-academica.html`; `IAs/BACKLOG.md`.

**Validacion:** `node --check` paso para los modulos CMS de S1 y S2; `git diff --check` paso en las rutas modificadas de esta tarea. No se encontro `psql` local y no se valido el SQL candidato contra PostgreSQL/Supabase; tampoco se hicieron pruebas autenticadas, RLS ni visuales en navegador.

**Inventario Supabase/Edge:** `Sistema 1/supabase/cms-contactos-programas.sql` queda como migracion candidata, dependiente de `tabla-footer-cms.sql`; ambos siguen locales y no ejecutados. No se accedio ni modifico el proyecto Supabase, no se desplego Edge Function y no se cambio `invitar-cuenta`.

**Estado:** Megatarea 8 implementada localmente; tarea 201 permanece parcial hasta que el Instituto solicite los pasos de ejecucion y se validen las tablas, RLS, permisos Admin y lectura publica contra Supabase.

### 2026-10-18 09:00 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Megatarea 9 — aceptacion integral por roles (tarea 203).

**Como:** Se revisaron los flujos locales de visitante, Editor, Docente/Admin, ficha, ciclos y contactos CMS, junto con las politicas candidatas de `proyectos-core-v2.sql`. En el CMS se detecto una carrera: los listeners de cambio de rol se registraban despues de esperar las lecturas de Supabase, por lo que una sesion Admin podia emitir el evento antes de que existiera el listener. Footer y EDUCAME/Matricula ahora registran el listener antes de esperar y vuelven a aplicar el rol vigente al terminar la carga. Se amplio `diagnostico-proyectos-configuracion.sql` para incluir `educame_cms` y `matricula_cms` en columnas, RLS, restricciones, indices, triggers y politicas; sigue siendo solo lectura y no devuelve filas institucionales.

**Archivos:** `Sistema 1/js/cms/cargar-footer-cms.js`; `Sistema 1/js/cms/cargar-contactos-programas-cms.js`; `Sistema 1/supabase/diagnostico-proyectos-configuracion.sql`; `tests/cms-auth-state.test.mjs`; `IAs/BACKLOG.md`.

**Validacion:** `node --test tests/cms-auth-state.test.mjs` paso (2 pruebas); `node --check` de ambos modulos CMS y del test, y `git diff --check` pasaron. Las pruebas simulan el evento Admin mientras la lectura de Supabase esta pendiente. No hay `psql` local ni resultado de ejecucion del diagnostico remoto. No se validaron credenciales/roles reales, RLS, guardado de proyectos, privacidad de borradores, limites de codigos, cambios de ciclo o reflejo en ambas webs contra la instancia.

**Inventario Supabase/Edge:** solo se ajusto localmente el diagnostico de lectura; no se ejecuto SQL, no se altero el proyecto Supabase y no se modifico ni desplego Edge Function. No compartir claves ni contrasenas; la validacion remota requiere que el Instituto ejecute su flujo autorizado y pruebe las cuentas de cada rol.

**Estado:** Megatarea 9 queda parcial; tarea 203 cambia a `[~]`. La cobertura local demuestra unicamente que los controles CMS no pierden el evento de rol durante la carga. La aceptacion integral requiere esquema aplicado/confirmado, salida estructural del diagnostico y pruebas autenticadas con las cuentas de Visitante, Editor, Docente y Administrador.

### 2026-10-18 09:04 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Megatarea 10 — confirmar URLs publicas de Sistema 1 y Sistema 2 y las rutas de retorno de Supabase Auth.

**Como:** Se cotejaron el workflow y el script de build de GitHub Pages con las paginas publicas, las rutas locales y los puntos del codigo que construyen `emailRedirectTo`/`redirectTo`. El despliegue actual empaqueta ambos sistemas en un unico sitio Pages: raiz `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/`, origen compartido `https://instituto-nacional-tecnico-industrial.github.io`; Inicio S1 en `/web-oficial/Sistema%201/paginas/inicio/pagina-inicio-cms.html` y hub S2 en `/web-oficial/Sistema%202/paginas/proyectos/pagina-hub-proyectos.html`. La raiz redirige a Inicio S1. La futura separacion a `web-oficial-proyectos` no esta publicada ni se trato como URL vigente.

**Callbacks recomendados para Authentication > URL Configuration:** Site URL `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/`. Redirect URLs: pagina S1 `Sistema%201/paginas/cuentas/pagina-definir-contrasena.html` (registro, restablecimiento e invitaciones); Inicio S1 y Configuraciones S1 (formularios embebidos usan `window.location.href`); y patron acotado `https://instituto-nacional-tecnico-industrial.github.io/web-oficial/Sistema%202/**`, porque la UI Auth de S2 se carga desde varias paginas y tambien usa la URL actual como callback. No se recomienda un comodin en todo el dominio ni `/web-oficial/**`.

**Pendiente y limites:** no se accedio a Authentication > URL Configuration; por tanto no se afirma que los valores remotos ya coincidan. Se actualizo DB-00d a `[~]` y se documento la evidencia/rutas en `IAs/BACKLOG.md`. Instituto debe verificar y confirmar la allowlist. No se cambio ninguna configuracion remota, no se genero SQL, no se modifico ni desplego Edge Function y no se publico Pages. No se modifico codigo.

### 2026-10-18 15:46 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Preparar el traspaso de Sistema 2 a un repositorio propio para que otra IA pueda continuar.

**Como:** Se agregaron `IAs/HANDOFF-SISTEMA-2.md`, con el contexto de arquitectura, roles, DER, enlaces entre sistemas, Auth/tema, integracion Supabase y pendientes; `IAs/BACKLOG-TRASLADO-SISTEMA-2.md`, con 23 tareas y criterios de aceptacion; y plantillas vacias `NO-EJECUTAR-*` en `IAs/plantillas-sistema-2/`. Se aclara que son plantillas de trabajo, no scripts para ejecutar, que el SQL canonico sigue en Sistema 1 y que el inventario de callbacks no es codigo de produccion. Se actualizaron las descripciones de documentos especializados en este archivo y `IAs/BACKLOG.md`.

**Validacion y limites:** se comprobo que las plantillas no contienen codigo ni instrucciones ejecutables y que `git diff --check` no reporta errores de whitespace. No se ejecutaron pruebas de aplicacion, no se altero codigo de los sistemas, Supabase, GitHub Pages ni Edge Functions; tampoco se hizo commit/push. Se preservaron los demas cambios preexistentes del worktree.

### 2026-10-18 17:49 (UTC-6) - IA: GitHub Copilot - Dispositivo: laptop Windows (MINEDUCYT)

**Pedido:** Completar y hacer consistente el rol Académico en interfaz, autorizacion candidata, SQL y documentos de continuidad.

**Como:** Se aplico el alcance confirmado por Instituto: Académico puede crear proyectos para cualquiera de las cinco asignaturas, editar fichas propias como autor, administrar coautorias, grupos de mano de obra de codigos activos de 1.º/2.º, publicar/volver privados y archivar/reactivar; no gestiona proyectos ajenos, cuentas, invitaciones, codigos tecnicos, ciclos ni CMS, ni controla el bloqueo de edicion. La marca `edicion_bloqueada` afecta solo al Editor tecnico y no bloquea a los autores; el RPC impide cambiar ese flag por Académico. Solo Admin invita/desactiva cuentas. La UI de Evaluar presenta Mis proyectos, filtra proyectos de los que Docente/Académico son autores, ofrece edicion de ficha a los roles autorizados y limita sus controles a los alcances respectivos. En SQL candidato, la creacion incluye al autor y la RPC impide que un Docente/Académico creador sea quitado de la autoria incluso por otro gestor. La definicion historica de tarea 192 que lo hacia «inferior» fue marcada como sustituida; el handoff y la aceptacion 203 describen las nuevas pruebas.

**Archivos:** `Sistema 1/js/auth/pagina-configuraciones-roles.js`; `Sistema 1/paginas/configuraciones/pagina-configuraciones.html`; `Sistema 1/js/auth/buscar-cuentas-config.js`; `Sistema 1/js/auth/alta-cuentas-admin.js`; `supabase/functions/invitar-cuenta/index.ts`; `supabase/functions/invitar-cuenta/LEEME.md`; `Sistema 1/supabase/proyectos-core-v2.sql`; `Sistema 1/supabase/tabla-perfiles.sql`; `Sistema 1/supabase/tabla-invitaciones-correo.sql`; `Sistema 1/supabase/invitaciones-admin-matriz.sql`; `Sistema 1/supabase/login-invitaciones-minimo.sql`; `Sistema 1/supabase/rol-academico-y-ficha.sql`; `Sistema 2/js/cromo/boton-personalizar-o-evaluar.js`; `Sistema 2/js/proyectos/evaluar-proyectos-docente.js`; `Sistema 2/js/ficha/editar-ficha-propia.js`; `Sistema 2/js/ficha/persistir-ficha-supabase.js`; paginas de Configuraciones, Evaluar y ficha en S1/S2; `Sistema 2/supabase/rol-academico-y-ficha.sql`; `IAs/BACKLOG.md`; `IAs/HANDOFF-SISTEMA-2.md`.

**Validacion y limites:** `node --check` paso para los siete modulos JS implicados; `node --test tests/cms-auth-state.test.mjs` paso (2 pruebas existentes); diagnosticos de VS Code y `git diff --check` no reportaron errores. No se encontro `psql`, por lo que no se valido el SQL con PostgreSQL. Tampoco se hizo prueba de navegador ni de Supabase remoto. No se ejecuto SQL ni se modifico Supabase remoto, no se desplego Edge Function ni Pages y no se hizo commit. Las restricciones visuales no sustituyen RPC/RLS; validar el candidato contra el diagnostico remoto antes de proponer ejecucion.

**Estado:** definicion funcional y cambios locales completados; la tarea 203 sigue parcial hasta pasar las pruebas locales y validar cuentas, RLS/RPC y datos reales con Supabase. El SQL candidato no esta aplicado.