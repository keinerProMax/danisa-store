# models/

**Responsabilidad:** estado global de la aplicación y datos.

**Archivos:**
- `state.js` — Catálogo de productos (`PRODUCTS`) y objeto `State` (usuario, carrito, página activa, filtro activo), con getters/setters sobre `localStorage`.

**Cuándo usarla:** al agregar nuevos campos de estado global, nuevos datos persistidos, o el catálogo de productos.
