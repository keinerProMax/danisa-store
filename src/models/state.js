/* ============================================================
   MÓDULO: state.js
   Estado global compartido + datos de productos
   ============================================================ */

'use strict';

// ---- Catálogo de productos ----
const PRODUCTS = [
  { id:1, name:'Camiseta Clásica',  cat:'camisetas', price:35000,  old:45000,  emoji:'👕', badge:'Nuevo'  },
  { id:2, name:'Vestido Elegante',  cat:'vestidos',  price:89000,  old:110000, emoji:'👗', badge:'Oferta' },
  { id:3, name:'Abrigo Urban',      cat:'abrigos',   price:145000, old:null,   emoji:'🧥', badge:null     },
  { id:4, name:'Sudadera Premium',  cat:'sudaderas', price:62000,  old:75000,  emoji:'👔', badge:'Oferta' },
  { id:5, name:'Camiseta Oversize', cat:'camisetas', price:38000,  old:null,   emoji:'👕', badge:'Nuevo'  },
  { id:6, name:'Vestido Casual',    cat:'vestidos',  price:72000,  old:85000,  emoji:'👗', badge:null     },
  { id:7, name:'Chaqueta Cuero',    cat:'abrigos',   price:195000, old:220000, emoji:'🥻', badge:'Top'    },
  { id:8, name:'Hoodie Básico',     cat:'sudaderas', price:55000,  old:null,   emoji:'🧣', badge:null     },
];

// ---- Estado global de la aplicación ----
const State = {
  // Usuario autenticado (persistido en localStorage)
  get user()  { return JSON.parse(localStorage.getItem('ds_user') || 'null'); },
  set user(v) { v ? localStorage.setItem('ds_user', JSON.stringify(v)) : localStorage.removeItem('ds_user'); },

  // Carrito de compras (persistido en localStorage)
  get cart()  { return JSON.parse(localStorage.getItem('ds_cart') || '[]'); },
  set cart(v) { localStorage.setItem('ds_cart', JSON.stringify(v)); },

  // Página activa en la SPA
  currentPage:   'home',

  // Filtro activo en la tienda
  currentFilter: 'all',
};
