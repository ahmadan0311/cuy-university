let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');


function onLogin() {
  valid(usernameInput.value)

  if (valid(usernameInput.value) && valid(passwordInput.value)) {
    location.replace('admin.html')
  }
}

function valid(param) {
  if (param.length > 0) {
    return true;
  }
}