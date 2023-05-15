let username = document.getElementById('username');
let password = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');


function onRegister() {
  if (valid(username.value) && valid(password.value)) {
    console.log(username.value, password.value);

    if (password.value == repeatPassword.value) {
      localStorage.setItem( username.value, password.value)

      location.replace('index.html')
    }
    else {
      alert('The passwords you entered do not match.')
    }
  }
  else {
    alert('Fill the empty blank');
  }
}

function onLogin() {
  // valid(usernameInput.value)

  if (!valid(usernameInput.value) || !valid(passwordInput.value)) {
    alert('Fill the empty blank');
  } else if (localStorage.getItem(usernameInput.value) == passwordInput.value) {
    location.replace('admin.html')
  } else if (localStorage.getItem(usernameInput.value) == null){
    alert('User Not Found');
  } else if (localStorage.getItem(usernameInput.value) != passwordInput.value) {
    alert('Password Incorrect');
  } else {
    alert('Something is wrong');
  }

}

function valid(param) {
  if (param.length > 0) {
    return true;
  }
}