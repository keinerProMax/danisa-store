/* ============================================================
   DANISSA STORE — app.js
   Orquestador principal: inicializa todos los módulos
   Orden de carga en HTML:
     1. state.js   → datos y estado global
     2. utils.js   → utilidades compartidas
     3. router.js  → navegación SPA
     4. auth.js    → autenticación
     5. cart.js    → carrito de compras
     6. shop.js    → tienda y búsqueda
     7. profile.js → perfil de usuario
     8. contact.js → formulario de contacto
     9. app.js     → este archivo (inicializa todo)
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ---- Inicializar cada módulo ----
  initRouter();    // Navegación entre páginas
  initAuth();      // Modal login / registro
  initCart();      // Carrito y checkout
  initShop();      // Tienda, filtros y búsqueda
  initProfile();   // Perfil y cierre de sesión
  initContact();   // Formulario de contacto

  // ---- Estado inicial de la aplicación ----
  updateAuthUI();       // Mostrar nombre o botón "Ingresar"
  updateCartBadge();    // Badge del carrito si hay ítems guardados
  renderProducts('all'); // Pre-cargar grilla de productos
  navigate('home');      // Mostrar página de inicio

});