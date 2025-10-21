const hourField = document.getElementsByClassName("hour")[0];
const minField = document.querySelector(".minutes");
const secField = document.querySelector(".seconds");
const cont = document.querySelector(".container");

let hourNum, minutes, seconds;

function getValues() {
  const now = new Date();
  hourNum = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  // Fix: Use hourNum instead of undefined hour variable
  const hour = hourNum < 10 ? "0" + hourNum : hourNum;
  const min = minutes < 10 ? "0" + minutes : minutes;
  const sec = seconds < 10 ? "0" + seconds : seconds;

  return { hour, min, sec };
}

function changeBG() {
  if (hourNum >= 6 && hourNum < 18) {
    cont.style.backgroundColor = "white";
    cont.style.color = "black";
  } else {
    cont.style.backgroundColor = "black";
    cont.style.color = "white";
  }
}

function editValues() {
  const { hour, min, sec } = getValues();
  hourField.innerHTML = hour;
  minField.innerHTML = min;
  secField.innerHTML = sec;
}

editValues();
changeBG();
setInterval(() => {
  editValues();
  changeBG();
}, 1000);
