function saklar(lamp, toggle) {
  let lampu = document.getElementById(lamp);
  let state = document.getElementById(toggle);
  
  if (state.checked) {
    lampu.src = "./assets/on.gif"
  }
  else {
    lampu.src = "assets/off.gif"
  }
}