let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');
let user = document.getElementById('user');

if (localStorage.getItem('username')) {
  console.log('available')
  loggedIn();
}

function onLogin() {
  localStorage.setItem('username', usernameInput.value);

  if (usernameInput.value == 'admin' && passwordInput.value == 'admin123') {
    localStorage.setItem('role', 'admin')
    location.replace('admin.html');
  }
  else {
    loggedIn();
    location.reload();
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}

function loggedIn() {
  localStorage.setItem('role', 'user')
  user.style.display = 'block';
  usernameInput.style.display = 'none';
  passwordInput.style.display = 'none';
  loginButton.style.display = 'none';
  logoutButton.style.display = 'block';
}