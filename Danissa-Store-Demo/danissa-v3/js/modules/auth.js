/* ============================================================
   MÓDULO: auth.js
   Inicio de sesión, registro, cierre de sesión y UI de auth
   Depende de: utils.js, state.js, router.js
   ============================================================ */

'use strict';

// ---- Abrir modal de autenticación ----
function openAuth() {
  document.getElementById('auth-overlay').classList.add('active');
  showAuthTab('login');
}

// ---- Cerrar modal de autenticación ----
function closeAuth() {
  document.getElementById('auth-overlay').classList.remove('active');
}

// ---- Cambiar entre tab Login / Registro ----
function showAuthTab(tab) {
  $$('.auth-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  $$('.auth-form').forEach(form => {
    form.classList.toggle('hidden', form.dataset.form !== tab);
  });
}

// ---- Iniciar sesión ----
function doLogin(e) {
  e.preventDefault();

  const email    = $('#login-email').value.trim();
  const password = $('#login-pass').value;

  if (!email || !password) {
    showToast('⚠️ Completa todos los campos.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('ds_users') || '[]');
  const found = users.find(u => u.email === email && u.password === password);

  if (!found) {
    showToast('❌ Email o contraseña incorrectos.');
    return;
  }

  State.user = found;
  closeAuth();
  updateAuthUI();
  showToast(`👋 ¡Hola, ${found.name}!`);
}

// ---- Registrar nuevo usuario ----
function doRegister(e) {
  e.preventDefault();

  const name     = $('#reg-name').value.trim();
  const email    = $('#reg-email').value.trim();
  const password = $('#reg-pass').value;
  const confirm  = $('#reg-confirm').value;

  if (!name || !email || !password) {
    showToast('⚠️ Completa todos los campos.');
    return;
  }
  if (password !== confirm) {
    showToast('❌ Las contraseñas no coinciden.');
    return;
  }
  if (password.length < 6) {
    showToast('❌ La contraseña debe tener mínimo 6 caracteres.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('ds_users') || '[]');

  if (users.find(u => u.email === email)) {
    showToast('❌ Ese email ya está registrado.');
    return;
  }

  const newUser = { id: Date.now(), name, email, password, phone: '', city: '' };
  users.push(newUser);
  localStorage.setItem('ds_users', JSON.stringify(users));

  State.user = newUser;
  closeAuth();
  updateAuthUI();
  showToast(`✅ ¡Cuenta creada! Bienvenida, ${name}.`);
}

// ---- Cerrar sesión ----
function doLogout() {
  State.user = null;
  updateAuthUI();
  navigate('home');
  showToast('👋 Sesión cerrada.');
}

// ---- Actualizar botón de sesión en el navbar ----
function updateAuthUI() {
  const user       = State.user;
  const btnSession = document.getElementById('btn-session');

  if (user) {
    btnSession.innerHTML = `<i class="fa-solid fa-user"></i> ${user.name.split(' ')[0]}`;
    btnSession.onclick   = () => navigate('profile');
  } else {
    btnSession.innerHTML = `<i class="fa-solid fa-user"></i> Ingresar`;
    btnSession.onclick   = openAuth;
  }

  // Si el perfil está visible, refrescarlo
  if (State.currentPage === 'profile') renderProfile();
}

// ---- Registrar eventos del modal de auth ----
function initAuth() {
  document.getElementById('btn-session').addEventListener('click', () => {
    State.user ? navigate('profile') : openAuth();
  });

  document.getElementById('auth-close').addEventListener('click', closeAuth);

  // Cerrar al hacer clic fuera del modal
  document.getElementById('auth-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAuth();
  });

  // Tabs login / registro
  $$('.auth-tab').forEach(btn => {
    btn.addEventListener('click', () => showAuthTab(btn.dataset.tab));
  });

  // Formularios
  document.getElementById('form-login').addEventListener('submit', doLogin);
  document.getElementById('form-register').addEventListener('submit', doRegister);
}
