import { supabase } from "../supabase/cliente-supabase.js";

const yearSelect = document.getElementById("intiwo-evaluar-anio");
const message = document.getElementById("intiwo-evaluar-mensaje");
const container = document.getElementById("intiwo-evaluar-codigos");
const academicMessage = document.getElementById("intiwo-evaluar-academicos-mensaje");
const academicContainer = document.getElementById("intiwo-evaluar-academicos");
const technicalSection = document.getElementById("intiwo-evaluar-tecnicos");
let currentRole = "";
let currentUserId = "";
let loadRequest = 0;
let academicLoadRequest = 0;

function setMessage(text) {
  if (message) message.textContent = text;
}

function setAcademicMessage(text) {
  if (academicMessage) academicMessage.textContent = text;
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function errorText(error) {
  return error && typeof error.message === "string" && error.message
    ? error.message
    : "Error inesperado.";
}

async function loadYears() {
  const { data, error } = await supabase
    .from("ciclos_lectivos")
    .select("anio,es_actual")
    .order("anio", { ascending: false });
  if (error) throw error;
  if (!data || !data.length) throw new Error("No hay ciclos lectivos disponibles.");
  yearSelect.replaceChildren(...data.map((year) => {
    const option = document.createElement("option");
    option.value = String(year.anio);
    option.textContent = String(year.anio);
    option.selected = year.es_actual;
    return option;
  }));
}

async function loadEditors(codeId) {
  const { data, error } = await supabase
    .from("miembro_codigo")
    .select("perfil_id, perfil:perfiles!inner(id,nombres,apellidos,nombre,desactivado_en)")
    .eq("codigo_id", codeId)
    .is("desactivado_en", null);
  if (error) throw error;
  return (data || []).filter((membership) => membership.perfil && !membership.perfil.desactivado_en);
}

async function changeState(project, changed, actions) {
  actions.querySelectorAll("button").forEach((button) => { button.disabled = true; });
  try {
    const { error } = await supabase.rpc("intiwo_gestionar_estado_proyecto", {
      p_proyecto_id: project.id,
      p_publicado: changed.publicado ?? project.publicado,
      p_edicion_bloqueada: changed.edicion_bloqueada ?? project.edicion_bloqueada,
      p_archivado: changed.archivado ?? !!project.archivado_en
    });
    if (error) {
      setMessage(`No se pudo actualizar el proyecto: ${error.message}`);
      return;
    }
    try {
      await loadCodes();
      setMessage("Estado del proyecto actualizado.");
    } catch (error) {
      setMessage(`El estado se guardó, pero no se pudo actualizar la lista: ${errorText(error)}`);
    }
  } finally {
    actions.querySelectorAll("button").forEach((button) => { button.disabled = false; });
  }
}

async function saveAssignments(project, checkboxes, fieldset, button) {
  fieldset.disabled = true;
  try {
    const editorIds = checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
    const { error } = await supabase.rpc("intiwo_gestionar_editores_proyecto", {
      p_proyecto_id: project.id,
      p_editor_ids: editorIds
    });
    if (error) throw error;
    try {
      await loadCodes();
      setMessage("Asignaciones actualizadas.");
    } catch (error) {
      setMessage(`Las asignaciones se guardaron, pero no se pudo actualizar la lista: ${errorText(error)}`);
    }
  } catch (error) {
    setMessage(`No se pudieron actualizar las asignaciones: ${errorText(error)}`);
  } finally {
    fieldset.disabled = false;
    button.disabled = false;
  }
}

function projectCard(project, editorNames, codeEditors) {
  const card = element("article", null, "intiwo-caja-proyecto intiwo-proyecto-evaluacion");
  card.append(
    element("strong", project.titulo || "Proyecto"),
    element("p", project.descripcion || ""),
    element("p", [
      project.publicado ? "Público" : "Privado",
      project.edicion_bloqueada ? "Edición bloqueada" : "Edición habilitada",
      project.archivado_en ? "Inactivo" : ""
    ].filter(Boolean).join(" · ")),
    element("p", editorNames || "Sin Editor asignado")
  );

  const query = new URLSearchParams({
    id: project.id,
    tipo: project.tipo,
    anio: String(project.anio_lectivo),
    modo: "ver"
  });
  const view = element("a", "Ver ficha");
  view.href = `../ficha/pagina-ficha-proyecto.html?${query.toString()}`;
  card.appendChild(view);

  const editorFieldset = element("fieldset", null, "intiwo-evaluar-editores");
  editorFieldset.appendChild(element("legend", "Editores asignados"));
  const currentEditors = new Set(
    (project.proyecto_editores || [])
      .filter((assignment) => !assignment.revocado_en)
      .map((assignment) => assignment.editor_id)
  );
  const checkboxes = codeEditors.map((membership) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = membership.perfil_id;
    input.checked = currentEditors.has(membership.perfil_id);
    const profile = membership.perfil;
    label.append(input, document.createTextNode(
      [profile.nombres, profile.apellidos].filter(Boolean).join(" ") || profile.nombre || "Editor"
    ));
    editorFieldset.appendChild(label);
    return input;
  });
  if (!checkboxes.length) editorFieldset.appendChild(element("p", "Este código no tiene Editores activos."));
  const saveAssignmentsButton = element("button", "Guardar asignaciones", "intiwo-pildora es-linea");
  saveAssignmentsButton.type = "button";
  saveAssignmentsButton.addEventListener("click", () => {
    saveAssignments(project, checkboxes, editorFieldset, saveAssignmentsButton);
  });
  editorFieldset.appendChild(saveAssignmentsButton);
  card.appendChild(editorFieldset);

  const actions = element("div", null, "intiwo-evaluar-acciones");
  const controls = [
    [project.publicado ? "Volver privado" : "Publicar", { publicado: !project.publicado }],
    [project.edicion_bloqueada ? "Permitir edición" : "Bloquear edición", { edicion_bloqueada: !project.edicion_bloqueada }],
    [project.archivado_en ? "Reactivar" : "Marcar inactivo", { archivado: !project.archivado_en }]
  ];
  controls.forEach(([label, changed], index) => {
    const button = element("button", label, index === 0 ? "intiwo-pildora" : "intiwo-pildora es-linea");
    button.type = "button";
    button.addEventListener("click", () => changeState(project, changed, actions).catch(showError));
    actions.appendChild(button);
  });
  card.appendChild(actions);
  return card;
}

async function createProject(code, checkboxes, button) {
  const editorIds = checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);
  button.disabled = true;
  try {
    const { data, error } = await supabase.rpc("intiwo_crear_proyecto_tecnico", {
      p_codigo_id: code.id,
      p_editor_ids: editorIds
    });
    if (error) {
      setMessage(`No se pudo crear el proyecto: ${error.message}`);
      return;
    }
    if (!data) {
      setMessage("Supabase no devolvió el identificador del proyecto creado.");
      return;
    }
    const url = new URL("../ficha/pagina-ficha-proyecto.html", window.location.href);
    url.searchParams.set("id", data);
    url.searchParams.set("tipo", "tecnico");
    url.searchParams.set("anio", String(code.anio_lectivo));
    url.searchParams.set("clave", code.clave);
    window.location.assign(url.href);
  } finally {
    button.disabled = false;
  }
}

function academicProjectCard(project, subject, teachers, namesById, handWorkCodes, handWorkCodesError) {
  const card = element("article", null, "intiwo-caja-proyecto intiwo-proyecto-evaluacion");
  const currentAuthors = new Set((project.proyecto_docente || []).map((author) => author.docente_id));
  const currentCodeIds = new Set((project.proyecto_codigo_mano_obra || []).map((item) => item.codigo_id));
  const authorNames = [...currentAuthors].map((id) => namesById.get(id)).filter(Boolean);
  const codeNames = new Map(handWorkCodes.map((code) => [code.codigo_id, code.clave]));
  const assignedCodes = [...currentCodeIds].map((id) => codeNames.get(id) || id);
  card.append(
    element("strong", project.titulo || "Proyecto"),
    element("p", project.descripcion || "Aún sin descripción."),
    element("p", [
      project.publicado ? "Público" : "Privado",
      project.edicion_bloqueada ? "Edición bloqueada" : "Edición habilitada",
      project.archivado_en ? "Inactivo" : ""
    ].filter(Boolean).join(" · ")),
    element("p", `Docentes autores: ${authorNames.join(", ") || "Sin autores asignados"}`),
    element("p", `Códigos de mano de obra: ${assignedCodes.join(", ") || "Sin grupos asignados"}`)
  );

  const query = new URLSearchParams({
    id: project.id,
    tipo: "academico",
    anio: String(project.anio_lectivo),
    rama: subject.slug,
    modo: "ver"
  });
  const view = element("a", "Ver ficha");
  view.href = `../ficha/pagina-ficha-proyecto.html?${query.toString()}`;
  card.appendChild(view);
  if (!project.archivado_en) {
    const editQuery = new URLSearchParams(query);
    editQuery.set("modo", "personalizar");
    const edit = element("a", "Editar ficha", "intiwo-pildora es-linea");
    edit.href = `../ficha/pagina-ficha-proyecto.html?${editQuery.toString()}`;
    card.appendChild(edit);
  }

  const codesFieldset = element("fieldset", null, "intiwo-evaluar-editores");
  codesFieldset.appendChild(element("legend", "Códigos de mano de obra (1.º y 2.º)"));
  if (handWorkCodesError) {
    codesFieldset.appendChild(element("p", `No se pudieron cargar los códigos: ${handWorkCodesError}`));
  } else if (!handWorkCodes.length) {
    codesFieldset.appendChild(element("p", "No hay códigos activos de 1.º o 2.º en este ciclo lectivo."));
  } else {
    const codeCheckboxes = handWorkCodes.map((code) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = code.codigo_id;
      input.checked = currentCodeIds.has(code.codigo_id);
      label.append(input, document.createTextNode(`${code.clave} · ${code.especialidad}`));
      codesFieldset.appendChild(label);
      return input;
    });
    const saveCodes = element("button", "Guardar grupos", "intiwo-pildora es-linea");
    saveCodes.type = "button";
    saveCodes.addEventListener("click", async () => {
      codesFieldset.disabled = true;
      saveCodes.disabled = true;
      try {
        const { error } = await supabase.rpc("intiwo_gestionar_codigos_mano_obra", {
          p_proyecto_id: project.id,
          p_codigo_ids: codeCheckboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value)
        });
        if (error) throw error;
        if (await loadAcademicProjects()) setAcademicMessage("Grupos de mano de obra actualizados.");
      } catch (error) {
        setAcademicMessage(`No se pudieron actualizar los grupos de mano de obra: ${errorText(error)}`);
      } finally {
        codesFieldset.disabled = false;
        saveCodes.disabled = false;
      }
    });
    codesFieldset.appendChild(saveCodes);
  }
  card.appendChild(codesFieldset);

  const fieldset = element("fieldset", null, "intiwo-evaluar-editores");
  fieldset.appendChild(element("legend", "Docentes y Académicos autores"));
  const checkboxes = teachers.map((teacher) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = teacher.perfil_id;
    input.checked = currentAuthors.has(teacher.perfil_id);
    input.disabled = ["docente", "academico"].includes(currentRole) && teacher.perfil_id === currentUserId;
    label.append(input, document.createTextNode(teacher.nombre_visible));
    fieldset.appendChild(label);
    return input;
  });
  if (!checkboxes.length) fieldset.appendChild(element("p", "No hay Docentes ni Académicos activos para asignar."));
  const saveAuthors = element("button", "Guardar autoría", "intiwo-pildora es-linea");
  saveAuthors.type = "button";
  saveAuthors.disabled = !checkboxes.some((checkbox) => checkbox.checked);
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      saveAuthors.disabled = !checkboxes.some((item) => item.checked);
    });
  });
  saveAuthors.addEventListener("click", async () => {
    fieldset.disabled = true;
    saveAuthors.disabled = true;
    try {
      const { error } = await supabase.rpc("intiwo_gestionar_docentes_proyecto", {
        p_proyecto_id: project.id,
        p_docente_ids: checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value)
      });
      if (error) throw error;
      try {
        if (await loadAcademicProjects()) {
          setAcademicMessage("Autoría actualizada.");
        } else {
          setAcademicMessage("La autoría se guardó, pero no se pudo actualizar la lista del año seleccionado.");
        }
      } catch (error) {
        setAcademicMessage(`La autoría se guardó, pero no se pudo actualizar la lista: ${errorText(error)}`);
      }
    } catch (error) {
      setAcademicMessage(`No se pudo actualizar la autoría: ${errorText(error)}`);
    } finally {
      fieldset.disabled = false;
      saveAuthors.disabled = !checkboxes.some((checkbox) => checkbox.checked);
    }
  });
  fieldset.appendChild(saveAuthors);
  card.appendChild(fieldset);

  const actions = element("div", null, "intiwo-evaluar-acciones");
  const controls = [
    [project.publicado ? "Volver privado" : "Publicar", { publicado: !project.publicado }],
    [project.archivado_en ? "Reactivar" : "Marcar inactivo", { archivado: !project.archivado_en }]
  ];
  if (currentRole !== "academico") {
    controls.splice(1, 0, [
      project.edicion_bloqueada ? "Permitir edición" : "Bloquear edición",
      { edicion_bloqueada: !project.edicion_bloqueada }
    ]);
  }
  controls.forEach(([label, changed], index) => {
    const button = element("button", label, index === 0 ? "intiwo-pildora" : "intiwo-pildora es-linea");
    button.type = "button";
    button.addEventListener("click", () => changeAcademicState(project, changed, actions).catch((error) => {
      console.error("[INTIWO Proyectos] Error actualizando estado académico.", error);
      setAcademicMessage(`No se pudo actualizar el estado: ${errorText(error)}`);
    }));
    actions.appendChild(button);
  });
  card.appendChild(actions);
  return card;
}

async function createAcademicProject(subject, checkboxes, button) {
  const selectedYear = yearSelect.value;
  button.disabled = true;
  try {
    const { data, error } = await supabase.rpc("intiwo_crear_proyecto_academico", {
      p_asignatura_id: subject.id,
      p_anio_lectivo: Number(selectedYear),
      p_docente_ids: checkboxes.filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value)
    });
    if (error) throw error;
    if (!data) throw new Error("Supabase no devolvió el identificador del proyecto creado.");

    const url = new URL("../ficha/pagina-ficha-proyecto.html", window.location.href);
    url.searchParams.set("id", data);
    url.searchParams.set("tipo", "academico");
    url.searchParams.set("anio", selectedYear);
    url.searchParams.set("rama", subject.slug);
    url.searchParams.set("modo", "personalizar");
    window.location.assign(url.href);
  } catch (error) {
    setAcademicMessage(`No se pudo crear el proyecto académico: ${errorText(error)}`);
  } finally {
    button.disabled = false;
  }
}

async function changeAcademicState(project, changed, actions) {
  actions.querySelectorAll("button").forEach((button) => { button.disabled = true; });
  try {
    const { error } = await supabase.rpc("intiwo_gestionar_estado_proyecto", {
      p_proyecto_id: project.id,
      p_publicado: changed.publicado ?? project.publicado,
      p_edicion_bloqueada: changed.edicion_bloqueada ?? project.edicion_bloqueada,
      p_archivado: changed.archivado ?? !!project.archivado_en
    });
    if (error) throw error;
    try {
      if (await loadAcademicProjects()) {
        setAcademicMessage("Estado del proyecto actualizado.");
      } else {
        setAcademicMessage("El estado se guardó, pero no se pudo actualizar la lista del año seleccionado.");
      }
    } catch (error) {
      setAcademicMessage(`El estado se guardó, pero no se pudo actualizar la lista: ${errorText(error)}`);
    }
  } finally {
    actions.querySelectorAll("button").forEach((button) => { button.disabled = false; });
  }
}

async function loadAcademicProjects() {
  if (!supabase || !yearSelect || !academicContainer || !yearSelect.value) return false;
  const requestId = ++academicLoadRequest;
  const selectedYear = Number(yearSelect.value);
  academicContainer.replaceChildren();
  setAcademicMessage("Cargando proyectos académicos…");

  try {
    const [subjectResult, teacherResult, projectResult, codeResult] = await Promise.all([
      supabase.from("especialidades")
        .select("id,nombre,slug,prefijo,orden")
        .eq("tipo", "academico")
        .order("orden"),
      supabase.rpc("intiwo_listar_docentes_academicos"),
      supabase.from("proyectos")
        .select("id,asignatura_id,anio_lectivo,titulo,descripcion,publicado,edicion_bloqueada,archivado_en,proyecto_docente(docente_id),proyecto_codigo_mano_obra(codigo_id)")
        .eq("tipo", "academico")
        .eq("anio_lectivo", selectedYear)
        .order("created_at", { ascending: false }),
      supabase.rpc("intiwo_listar_codigos_mano_obra", { p_anio_lectivo: selectedYear })
    ]);
    if (requestId !== academicLoadRequest) return;
    if (subjectResult.error) throw subjectResult.error;
    if (teacherResult.error) throw teacherResult.error;
    if (projectResult.error) throw projectResult.error;
    const { data: annualNames, error: namesError } = await supabase
      .from("especialidad_nombres")
      .select("especialidad_id,nombre,nombre_corto")
      .eq("anio_lectivo", selectedYear);
    if (namesError) throw namesError;

    const subjects = subjectResult.data || [];
    const namesBySpecialtyId = new Map((annualNames || []).map((row) => [row.especialidad_id, row]));
    const teachers = teacherResult.data || [];
    const handWorkCodes = codeResult.error ? [] : codeResult.data || [];
    const projects = (projectResult.data || []).filter((project) => !["docente", "academico"].includes(currentRole)
      || (project.proyecto_docente || []).some((author) => author.docente_id === currentUserId));
    if (!subjects.length) {
      setAcademicMessage("No hay asignaturas académicas configuradas.");
      return false;
    }

    const namesById = new Map(teachers.map((teacher) => [teacher.perfil_id, teacher.nombre_visible]));
    const sections = subjects.map((subject) => {
      const annualName = namesBySpecialtyId.get(subject.id)?.nombre || subject.nombre;
      const section = element("section", null, "intiwo-evaluar-academico-asignatura");
      section.appendChild(element("h3", annualName));
      const fieldset = element("fieldset", null, "intiwo-evaluar-editores");
      fieldset.appendChild(element("legend", "Asignar Docentes y Académicos autores"));
      const checkboxes = teachers.map((teacher) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = teacher.perfil_id;
        input.checked = ["docente", "academico"].includes(currentRole) && teacher.perfil_id === currentUserId;
        input.disabled = ["docente", "academico"].includes(currentRole) && teacher.perfil_id === currentUserId;
        label.append(input, document.createTextNode(teacher.nombre_visible));
        fieldset.appendChild(label);
        return input;
      });
      if (!checkboxes.length) fieldset.appendChild(element("p", "No hay Docentes ni Académicos activos para asignar."));
      else fieldset.appendChild(element("p", ["docente", "academico"].includes(currentRole)
        ? "Tu cuenta se incluirá como autor al crear el proyecto."
        : "Selecciona al menos un Docente o Académico autor."));
      const create = element("button", "Crear proyecto académico vacío", "intiwo-pildora");
      create.type = "button";
      create.disabled = !checkboxes.some((checkbox) => checkbox.checked);
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
          create.disabled = !checkboxes.some((item) => item.checked);
        });
      });
      create.addEventListener("click", () => createAcademicProject(subject, checkboxes, create));
      section.append(fieldset, create);

      const subjectProjects = projects.filter((project) => project.asignatura_id === subject.id);
      subjectProjects.forEach((project) => {
        section.appendChild(academicProjectCard(project, subject, teachers, namesById, handWorkCodes, codeResult.error?.message || ""));
      });
      if (!subjectProjects.length) section.appendChild(element("p", ["docente", "academico"].includes(currentRole)
        ? "No tienes proyectos académicos propios en esta asignatura y año lectivo."
        : "Aún no hay proyectos académicos para esta asignatura y año."));
      return section;
    });
    if (requestId !== academicLoadRequest) return;
    academicContainer.replaceChildren(...sections);
    setAcademicMessage(codeResult.error
      ? `Se cargaron los proyectos, pero no los códigos de mano de obra: ${errorText(codeResult.error)}`
      : "");
    return true;
  } catch (error) {
    if (requestId !== academicLoadRequest) return;
    setAcademicMessage(`No se pudieron cargar los proyectos académicos: ${errorText(error)}`);
    throw error;
  }
}

async function renderCode(code, specialtyNames) {
  const section = element("section", null, "intiwo-evaluar-codigo");
  section.appendChild(element("h2", [
    code.clave,
    specialtyNames.get(code.especialidad_id)
  ].filter(Boolean).join(" · ")));
  const assignments = await loadEditors(code.id);
  const fieldset = element("fieldset", null, "intiwo-evaluar-editores");
  fieldset.appendChild(element("legend", "Asignar a Editores"));
  const checkboxes = assignments.map((membership) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = membership.perfil_id;
    const profile = membership.perfil;
    label.append(input, document.createTextNode(
      [profile.nombres, profile.apellidos].filter(Boolean).join(" ") || profile.nombre || "Editor"
    ));
    fieldset.appendChild(label);
    return input;
  });
  if (!checkboxes.length) fieldset.appendChild(element("p", "Este código no tiene Editores activos."));
  section.appendChild(fieldset);

  const create = element("button", "Crear proyecto vacío", "intiwo-pildora");
  create.type = "button";
  create.addEventListener("click", () => createProject(code, checkboxes, create).catch(showError));
  section.appendChild(create);

  const { data: projects, error } = await supabase
    .from("proyectos")
    .select("id,tipo,codigo_id,anio_lectivo,titulo,descripcion,publicado,edicion_bloqueada,archivado_en,proyecto_editores(editor_id,revocado_en)")
    .eq("codigo_id", code.id)
    .eq("anio_lectivo", code.anio_lectivo)
    .order("created_at", { ascending: false });
  if (error) throw error;

  const namesById = new Map(assignments.map((membership) => [
    membership.perfil_id,
    [membership.perfil.nombres, membership.perfil.apellidos].filter(Boolean).join(" ") || membership.perfil.nombre || "Editor"
  ]));
  (projects || []).forEach((project) => {
    const names = (project.proyecto_editores || [])
      .filter((assignment) => !assignment.revocado_en)
      .map((assignment) => namesById.get(assignment.editor_id))
      .filter(Boolean)
      .join(", ");
    section.appendChild(projectCard(project, names, assignments));
  });
  return section;
}

async function loadCodes() {
  if (!supabase || !yearSelect || !container || !yearSelect.value) return;
  const requestId = ++loadRequest;
  const selectedYear = Number(yearSelect.value);
  setMessage("Cargando códigos y proyectos…");
  container.replaceChildren();
  let query = supabase
    .from("codigos")
    .select("id,clave,anio_lectivo,especialidad_id,desactivado_en")
    .eq("anio_lectivo", selectedYear)
    .is("desactivado_en", null)
    .order("clave");
  if (currentRole === "docente") {
    const { data: auth, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    if (!auth.user) {
      setMessage("Tu sesión terminó. Inicia sesión nuevamente para continuar.");
      return;
    }
    query = query.eq("docente_id", auth.user.id);
  }
  const { data: codes, error } = await query;
  if (requestId !== loadRequest) return;
  if (error) throw error;
  if (!codes || !codes.length) {
    setMessage(currentRole === "docente"
      ? "No tienes códigos activos para este año lectivo."
      : "No hay códigos activos para este año lectivo.");
    return;
  }
  const { data: annualNames, error: namesError } = await supabase
    .from("especialidad_nombres")
    .select("especialidad_id,nombre")
    .eq("anio_lectivo", selectedYear);
  if (namesError) throw namesError;
  const specialtyNames = new Map((annualNames || []).map((row) => [row.especialidad_id, row.nombre]));
  const sections = [];
  try {
    for (const code of codes) {
      const section = await renderCode(code, specialtyNames);
      if (requestId !== loadRequest) return;
      sections.push(section);
    }
  } catch (error) {
    if (requestId !== loadRequest) return;
    throw error;
  }
  container.replaceChildren(...sections);
  const missingNames = codes.some((code) => !specialtyNames.has(code.especialidad_id));
  setMessage(missingNames
    ? `Faltan nombres históricos para algunas especialidades de ${selectedYear}; se muestran las claves de los códigos.`
    : "");
}

function showError(error) {
  console.error("[INTIWO Proyectos] Error en Evaluar.", error);
  setMessage(`No se pudo cargar la evaluación: ${errorText(error)}`);
}

async function start() {
  if (!supabase) throw new Error("No hay conexión configurada con Supabase.");
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError) throw authError;
  if (!auth.user) {
    setMessage("Inicia sesión con una cuenta autorizada para gestionar proyectos.");
    return;
  }
  const { data: profile, error: profileError } = await supabase
    .from("perfiles")
    .select("rol,desactivado_en")
    .eq("id", auth.user.id)
    .maybeSingle();
  if (profileError) throw profileError;
  if (!profile || profile.desactivado_en || !["academico", "docente", "administrador"].includes(profile.rol)) {
    setMessage("Esta sección está disponible para cuentas Académico, Docente y Administrador activas.");
    return;
  }
  if (!yearSelect || !container) throw new Error("Falta la estructura de la página de evaluación.");
  currentRole = profile.rol;
  if (currentRole === "academico") {
    if (technicalSection) technicalSection.hidden = true;
    const title = document.getElementById("intiwo-evaluar-titulo");
    const description = document.getElementById("intiwo-evaluar-descripcion");
    const academicDescription = document.getElementById("intiwo-evaluar-academicos-descripcion");
    if (title) title.textContent = "Mis proyectos académicos";
    if (description) description.textContent = "Crea y administra tus proyectos académicos. Solo puedes gestionar proyectos en los que figuras como docente autor.";
    if (academicDescription) academicDescription.textContent = "Puedes crear proyectos en cualquiera de las cinco asignaturas, colaborar como coautor y asignar grupos de 1.º y 2.º como mano de obra.";
  }
  await loadYears();
  currentUserId = auth.user.id;
  yearSelect.addEventListener("change", () => {
    if (currentRole !== "academico") loadCodes().catch(showError);
    loadAcademicProjects().catch((error) => {
      console.error("[INTIWO Proyectos] Error cargando proyectos académicos.", error);
    });
  });
  const loads = [loadAcademicProjects().catch((error) => {
      console.error("[INTIWO Proyectos] Error cargando proyectos académicos.", error);
    })];
  if (currentRole !== "academico") loads.push(loadCodes());
  await Promise.all(loads);
}

start().catch(showError);
