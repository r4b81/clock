const secondHand = document.querySelector(".second_hand");
const minHand = document.querySelector(".min_hand");
const hourHand = document.querySelector(".hour_hand");
const milisecHand = document.querySelector(".mili_sec_hand")
function setDate() {
  const date = new Date();

  const milisec = date.getMilliseconds() / 1000
  const sec = date.getSeconds() / 60
  const min = (sec + date.getMinutes()) / 60
  const hour = (min + date.getHours()) / 12
  
  setrotation(secondHand, sec)
  setrotation(minHand, min)
  setrotation(hourHand, hour)
  setrotation(milisecHand, milisec)
}

function setrotation(element, rotation) {
  element.style.transform = `rotate(${rotation * 360}deg)`
}

setInterval(setDate, 1);