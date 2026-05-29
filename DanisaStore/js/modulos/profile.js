/* ============================================================
   MÓDULO: profile.js
   Renderizado y edición del perfil de usuario
   Depende de: utils.js, state.js, auth.js
   ============================================================ */

'use strict';

// ---- Renderizar datos del usuario en el formulario de perfil ----
function renderProfile() {
  const user = State.user;

  // Si no hay sesión activa redirigir al inicio
  if (!user) {
    navigate('home');
    openAuth();
    return;
  }

  $('#profile-name-display').textContent  = user.name;
  $('#profile-email-display').textContent = user.email;
  $('#profile-name').value                = user.name  || '';
  $('#profile-email').value               = user.email || '';
  $('#profile-phone').value               = user.phone || '';
  $('#profile-city').value                = user.city  || '';
}

// ---- Guardar cambios del perfil ----
function saveProfile(e) {
  e.preventDefault();

  const user = State.user;
  if (!user) return;

  // Actualizar campos editables
  user.name  = $('#profile-name').value.trim();
  user.phone = $('#profile-phone').value.trim();
  user.city  = $('#profile-city').value.trim();

  // Persistir en localStorage (sesión activa)
  State.user = user;

  // Actualizar también en la lista de usuarios registrados
  const users = JSON.parse(localStorage.getItem('ds_users') || '[]');
  const idx   = users.findIndex(u => u.id === user.id);
  if (idx >= 0) {
    users[idx] = user;
    localStorage.setItem('ds_users', JSON.stringify(users));
  }

  updateAuthUI();
  showToast('✅ Perfil actualizado correctamente.');
}

// ---- Registrar eventos del perfil ----
function initProfile() {
  document.getElementById('form-profile').addEventListener('submit', saveProfile);
  document.getElementById('btn-logout').addEventListener('click', doLogout);
}