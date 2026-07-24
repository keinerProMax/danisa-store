/* ============================================================
   MÓDULO: router.js
   Navegación entre páginas de la SPA
   Depende de: utils.js, state.js
   ============================================================ */

'use strict';

// ---- Navegar a una página ----
function navigate(pageId) {
  // Ocultar todas las páginas
  $$('.page').forEach(p => p.classList.remove('active'));

  // Mostrar la página destino
  const page = document.getElementById(`page-${pageId}`);
  if (page) {
    page.classList.add('active');
    State.currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Marcar enlace activo en el navbar
  $$('.navbar-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
}

// ---- Registrar eventos de navegación del navbar ----
function initRouter() {
  $$('.navbar-nav a[data-page]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const page = a.dataset.page;

      // Proteger página de perfil si no hay sesión
      if (page === 'profile' && !State.user) {
        openAuth();
        return;
      }

      // Renderizar contenido dinámico según la página
      if (page === 'cart')    renderCart();
      if (page === 'shop')    renderProducts(State.currentFilter);
      if (page === 'profile') renderProfile();

      navigate(page);
    });
  });

  // Logo → volver al inicio
  document.getElementById('logo-link').addEventListener('click', () => navigate('home'));
}
