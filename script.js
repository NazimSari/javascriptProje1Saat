let person = prompt("Lütfen Adınızı Girin: ");
if (person != null) {
  document.querySelector(".person").innerHTML =
    "Merhaba " + person + " Kanalıma Hoşgeldin ";
}

function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let days = ["Paz", "Pzrt", "Sal", "Çar", "Per", "Cum", "Cmt"];

  let day = days[dateTime.getDay()];

  document.querySelector("#hours").innerHTML = hrs;
  document.querySelector("#minutes").innerHTML = min;
  document.querySelector("#seconds").innerHTML = sec;
  document.querySelector("#day").innerHTML = day;
}
setInterval(displayTime, 10);
