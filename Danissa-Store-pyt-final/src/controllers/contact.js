/* ============================================================
   MÓDULO: contact.js
   Formulario de contacto con la empresa
   Depende de: utils.js
   ============================================================ */

'use strict';

// ---- Manejar envío del formulario de contacto ----
function sendContact(e) {
  e.preventDefault();

  const name    = $('#contact-name').value.trim();
  const email   = $('#contact-email').value.trim();
  const subject = $('#contact-subject').value;
  const message = $('#contact-message').value.trim();

  if (!name || !email || !subject || !message) {
    showToast('⚠️ Completa todos los campos antes de enviar.');
    return;
  }

  // Simulación de envío exitoso
  e.target.reset();
  showToast('📩 Mensaje enviado. Te responderemos pronto.');
}

// ---- Registrar eventos del formulario de contacto ----
function initContact() {
  document.getElementById('form-contact').addEventListener('submit', sendContact);
}
