let y = 0;
let a, b, c, d, e, f, g, h, i;
a = b = c = d = e = f = g = h = i = 0;
function setvalue(x, val) {
  switch (x) {
    case "1":
      a = val;
      break;
    case "2":
      b = val;
      break;
    case "3":
      c = val;
      break;
    case "4":
      d = val;
      break;
    case "5":
      e = val;
      break;
    case "6":
      f = val;
      break;
    case "7":
      g = val;
      break;
    case "8":
      h = val;
      break;
    case "9":
      i = val;
      break;
  }
}
function play(x) {
  let mySound = new Audio("pop.mp3");
  mySound.play();
  if (y % 2 == 0) {
    document.getElementById(x).innerHTML = "O";
    setvalue(x, 1);
    document.getElementById(x).disabled = true;
  } else if (y % 2 == 1) {
    document.getElementById(x).innerHTML = "X";
    setvalue(x, 2);
    document.getElementById(x).disabled = true;
  }
  console.log(a, b, c, d, e, f, g, h, i);
  checking();
  y++;
}
function checking() {
  console.log("checking");
  if (e != 0) {
    if (b == e && e == h) {
      display(e);
    } else if (c == e && c == g) {
      display(e);
    } else if (d == e && d == f) {
      display(e);
    } else if (e == a && e == i) {
      display(e);
    }
  }else
  if (b != 0 && a == b && b == c) {
    console.log("caught");
    display(b);
  } else if (h != 0 && g == h && g == i) {
    display(h);
  } else if (d != 0 && d == g && d == a) {
    display(d);
  } else if (f != 0 && f == c && f == i) {
    display(f);
  }
  if (y >= 8) {
    display(3);
  }
}
function disable_all() {
  for (var x = 1; x <= 9; x++) {
    document.getElementById(x).disabled = true;
  }
}
function display(val) {
  document.getElementById("result").className = "alert alert-success mt-2";
  if (val == 1) {
    console.log(val);
    document.getElementById("result").innerHTML = "O Wins";
    disable_all();
  } else
  if (val == 2) {
    console.log(val);
    document.getElementById("result").innerHTML = "X Wins";
    disable_all();
  }else
  if (val == 3) {
    let draw_sound = new Audio("draw.mp3");
    draw_sound.play(draw_sound);
    console.log(val);
    document.getElementById("result").innerHTML = "DRAW";
    disable_all();
  }
}

// https://www.cssscript.com/confetti-falling-animation/
