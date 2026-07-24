# utils/

**Responsabilidad:** funciones auxiliares y lógica de arranque/inicialización de la app.

**Archivos:**
- `utils.js` — Selección de DOM (`$`, `$$`), formateo de precios (`fmt`), notificaciones toast (`showToast`).
- `loader.js` — Carga en paralelo los fragmentos HTML en sus slots e inicializa todos los controladores al terminar (`DOMContentLoaded`).
- `app.js` — Reservado para lógica adicional de la aplicación (actualmente vacío).

**Cuándo usarla:** al agregar un helper genérico sin estado propio, o al modificar el proceso de arranque de la app.
