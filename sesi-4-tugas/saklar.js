function saklar(index) {
  let lampu = document.getElementById("lampu" + index);
  let toggle = document.getElementById("toggle" + index);

  if (toggle.checked) {
    lampu.src = "./assets/on.gif"
  }
  else {
    lampu.src = "assets/off.gif"
  }
}

let toggle_section1 = document.getElementById("toggle-section-1")
let toggle_section2 = document.getElementById("toggle-section-2")
let toggle_section3 = document.getElementById("toggle-section-3")
let toggle_section4 = document.getElementById("toggle-section-4")

function saklar_room(room) {
  if (toggle_section1.checked) {
    document.getElementById("toggle1").checked = true;
    saklar(1);
    document.getElementById("toggle2").checked = true;
    saklar(2);
    document.getElementById("toggle3").checked = true;
    saklar(3);
  } else {
    document.getElementById("toggle1").checked = false;
    saklar(1);
    document.getElementById("toggle2").checked = false;
    saklar(2);
    document.getElementById("toggle3").checked = false;
    saklar(3);
  }

  if (toggle_section2.checked) {
    document.getElementById("toggle4").checked = true;
    saklar(4);
  } else {
    document.getElementById("toggle4").checked = false;
    saklar(4);
  }

  if (toggle_section3.checked) {
    document.getElementById("toggle5").checked = true;
    saklar(5);
    document.getElementById("toggle6").checked = true;
    saklar(6);
  } else {
    document.getElementById("toggle5").checked = false;
    saklar(5);
    document.getElementById("toggle6").checked = false;
    saklar(6);
  }


  if (toggle_section4.checked) {
    document.getElementById("toggle7").checked = true;
    saklar(7);
    document.getElementById("toggle8").checked = true;
    saklar(8);
    document.getElementById("toggle9").checked = true;
    saklar(9);
    document.getElementById("toggle10").checked = true;
    saklar(10);
  } else {
    document.getElementById("toggle7").checked = false;
    saklar(7);
    document.getElementById("toggle8").checked = false;
    saklar(8);
    document.getElementById("toggle9").checked = false;
    saklar(9);
    document.getElementById("toggle10").checked = false;
    saklar(10);
  }
}