const hourField = document.getElementsByClassName("hour")[0];
const minField = document.querySelector(".minutes");
const secField = document.querySelector(".seconds");
const cont = document.querySelector(".container")
function getValues() {
  const now = new Date();
  hourNum = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();
  hour = hour<10 ? "0" + hour : hour
  minutes = minutes<10 ? "0" + minutes : minutes
  seconds = seconds<10 ? "0" + seconds : seconds
}
function changeBG(){
    if(hourNum >= 6 && hourNum<18){
        cont.style.backgroundColor = "white"
        cont.style.color = "black"
    }
    else{
        cont.style.backgroundColor = "black"
        cont.style.color = "white"
    }
}
function editValues() {
  hourField.innerHTML = hour;
  minField.innerHTML = minutes;
  secField.innerHTML = seconds;
}

getValues();
editValues();
changeBG();
setInterval(() => {
  getValues();
  editValues();
  changeBG();
}, 1000);
