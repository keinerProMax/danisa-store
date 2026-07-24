/* ============================================================
   loader.js
   Carga cada fragmento HTML en su slot del index.html
   y luego inicializa la aplicación.
   ============================================================ */

'use strict';

// Mapa: id del slot → ruta del fragmento
const FRAGMENTS = [
  { slot: 'slot-navbar',     file: 'src/views/pages/navbar.html'     },
  { slot: 'slot-home',       file: 'src/views/pages/home.html'       },
  { slot: 'slot-shop',       file: 'src/views/pages/shop.html'       },
  { slot: 'slot-cart',       file: 'src/views/pages/cart.html'       },
  { slot: 'slot-profile',    file: 'src/views/pages/profile.html'    },
  { slot: 'slot-contact',    file: 'src/views/pages/contact.html'    },
  { slot: 'slot-footer',     file: 'src/views/pages/footer.html'     },
  { slot: 'slot-auth-modal', file: 'src/views/pages/auth-modal.html' },
];

async function loadFragment(slot, file) {
  const response = await fetch(file);
  const html     = await response.text();
  document.getElementById(slot).innerHTML = html;
}

async function loadAllFragments() {
  // Cargar todos los fragmentos en paralelo
  await Promise.all(FRAGMENTS.map(f => loadFragment(f.slot, f.file)));

  // Una vez todo el HTML está en el DOM, inicializar la app
  initRouter();
  initAuth();
  initCart();
  initShop();
  initProfile();
  initContact();

  updateAuthUI();
  updateCartBadge();
  renderProducts('all');
  navigate('home');
}

// Arrancar al cargar la página
document.addEventListener('DOMContentLoaded', loadAllFragments);
