/* INTIWO S2 | archivo: sesion-roles-auth.js | para: misma sesion Auth | BACKLOG SH-01d */

(function () {
  const ROLES_PERMITIDOS = new Set(['administrador', 'admin', 'docente', 'editor', 'academico']);
  const CLAVE_ROL = 'intiwo-rol';

  function obtenerRolActual() {
    const fuentes = [
      document.body && document.body.dataset && document.body.dataset.rol,
      window.INTIWO_ROL,
      window.__INTIWO_ROL__,
      sessionStorage.getItem(CLAVE_ROL),
      localStorage.getItem(CLAVE_ROL),
    ];

    const valor = fuentes.find((valor) => typeof valor === 'string' && valor.trim().length > 0);
    return valor ? String(valor).trim().toLowerCase() : '';
  }

  window.intiwoObtenerRol = obtenerRolActual;

  function hidratarRolEnCuerpo() {
    const rol = obtenerRolActual();
    if (document.body) {
      if (rol) document.body.dataset.rol = rol;
      else delete document.body.dataset.rol;
    }
  }

  function aplicarEstadoConfiguraciones() {
    const item = document.querySelector('a[data-seccion="configuraciones"]');
    if (!item) return;

    const hrefOriginal = item.dataset.configHref || item.getAttribute('href') || '#';
    item.dataset.configHref = hrefOriginal;

    const rolActual = obtenerRolActual();
    const estaHabilitado = ROLES_PERMITIDOS.has(rolActual);
    const desactivado = !estaHabilitado;

    item.classList.toggle('es-desactivado', desactivado);
    item.setAttribute('aria-disabled', String(desactivado));

    if (desactivado) {
      item.dataset.disabled = 'true';
      item.setAttribute('tabindex', '-1');
      item.removeAttribute('href');
      item.setAttribute('data-href-disabled', hrefOriginal);
    } else {
      item.dataset.disabled = 'false';
      item.removeAttribute('tabindex');
      item.setAttribute('href', hrefOriginal);
      item.removeAttribute('data-href-disabled');
    }
  }

  function bloquearClickCuandoDesactivado(event) {
    const link = event.currentTarget;
    if (link && link.getAttribute('aria-disabled') === 'true') {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function prepararItem() {
    const item = document.querySelector('a[data-seccion="configuraciones"]');
    if (!item) return;

    item.addEventListener('click', bloquearClickCuandoDesactivado);
    item.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && item.getAttribute('aria-disabled') === 'true') {
        event.preventDefault();
        event.stopPropagation();
      }
    });
  }

  function iniciar() {
    hidratarRolEnCuerpo();
    prepararItem();
    aplicarEstadoConfiguraciones();
    window.addEventListener('storage', function () {
      hidratarRolEnCuerpo();
      aplicarEstadoConfiguraciones();
    });
    window.addEventListener('intiwo:auth-state-changed', function () {
      hidratarRolEnCuerpo();
      aplicarEstadoConfiguraciones();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  } else {
    iniciar();
  }
})();
