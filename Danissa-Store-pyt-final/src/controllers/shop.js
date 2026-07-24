/* ============================================================
   MÓDULO: shop.js
   Renderizado de productos, filtros por categoría y búsqueda
   Depende de: utils.js, state.js, cart.js
   ============================================================ */

'use strict';

// ---- Renderizar productos con filtro opcional ----
function renderProducts(filter = 'all') {
  State.currentFilter = filter;

  const grid     = document.getElementById('products-grid');
  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        ${p.emoji}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-cat">${p.cat}</div>
        <div class="product-price-row">
          <div>
            <span class="product-price">${fmt(p.price)}</span>
            ${p.old ? `<span class="product-old">${fmt(p.old)}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="addToCart(${p.id})" title="Agregar al carrito">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Sincronizar botones de filtro activos
  $$('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

// ---- Manejar búsqueda por Enter ----
function handleSearch(e) {
  if (e.key !== 'Enter') return;

  const query = e.target.value.trim().toLowerCase();
  if (!query) return;

  navigate('shop');

  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) || p.cat.includes(query)
  );

  const grid = document.getElementById('products-grid');

  if (results.length === 0) {
    grid.innerHTML = `
      <p style="color:var(--gray-mid);padding:2rem;grid-column:1/-1;text-align:center;">
        No se encontraron productos para <strong>"${query}"</strong>.
      </p>`;
  } else {
    grid.innerHTML = results.map(p => `
      <div class="product-card">
        <div class="product-img">${p.emoji}</div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-cat">${p.cat}</div>
          <div class="product-price-row">
            <span class="product-price">${fmt(p.price)}</span>
            <button class="btn-add-cart" onclick="addToCart(${p.id})">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  showToast(`🔍 Buscando: "${query}"`);
  e.target.value = '';
}

// ---- Registrar eventos de la tienda ----
function initShop() {
  // Botones de filtro por categoría
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => renderProducts(btn.dataset.filter));
  });

  // Barra de búsqueda
  document.getElementById('search-input').addEventListener('keydown', handleSearch);

  // Botón CTA del hero → tienda completa
  document.getElementById('hero-cta').addEventListener('click', () => {
    renderProducts('all');
    navigate('shop');
  });

  // Tarjetas de categoría del hero → tienda filtrada
  $$('.cat-card[data-cat]').forEach(card => {
    card.addEventListener('click', () => {
      renderProducts(card.dataset.cat);
      navigate('shop');
    });
  });
}
