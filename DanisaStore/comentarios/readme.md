
## Estuctura de como se ve la pagina en front




📁 danissa-store/
├── index.html
├── 📁 css/
│   ├── variables.css
│   ├── navbar.css
│   └── pages.css
└── 📁 js/
    ├── app.js                ← Orquestador (solo inicializa)
    └── 📁 modules/
        ├── state.js          → Datos de productos + localStorage
        ├── utils.js          → fmt(), $(), $$(), showToast()
        ├── router.js         → Navegación entre páginas (SPA)
        ├── auth.js           → Login, registro, logout, UI sesión
        ├── cart.js           → Agregar, quitar, cantidades, checkout
        ├── shop.js           → Productos, filtros, búsqueda
        ├── profile.js        → Renderizar y guardar perfil
        └── contact.js        → Formulario de contacto