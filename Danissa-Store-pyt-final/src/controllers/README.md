# controllers/

**Responsabilidad:** coordinar la interacción del usuario — registra los event listeners de cada sección de la SPA, decide qué función de render llamar y conecta la vista con el estado (`models/state.js`).

**Archivos:**
- `router.js` — Navegación entre páginas (`navigate`, `initRouter`).
- `auth.js` — Login, registro, logout, UI del modal de autenticación.
- `cart.js` — Agregar, quitar, cambiar cantidad, checkout del carrito.
- `shop.js` — Renderizado de productos, filtros y búsqueda.
- `profile.js` — Renderizado y edición del perfil de usuario.
- `contact.js` — Manejo del formulario de contacto.

**Cuándo usarla:** al agregar o modificar cualquier flujo de interacción (un nuevo evento de click, una nueva página, una nueva acción de usuario).
