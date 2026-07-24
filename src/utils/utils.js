/* ============================================================
   MÓDULO: utils.js
   Funciones de utilidad compartidas por todos los módulos
   ============================================================ */

'use strict';

// ---- Formatear precio en pesos colombianos ----
function fmt(n) {
  return `$${Number(n).toLocaleString('es-CO')}`;
}

// ---- Selección de elementos del DOM ----
function $(selector, ctx = document) {
  return ctx.querySelector(selector);
}

function $$(selector, ctx = document) {
  return [...ctx.querySelectorAll(selector)];
}

// ---- Toast de notificación ----
function showToast(msg, duration = 2800) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}
