document.getElementById("name").innerHTML = "Turbo";

function disTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) h = 12;
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  var chngImgJs = document.getElementById(cimg);
  var img = "./img/morning.jpg";

  if (s >= 45) {
    img = "./img/night.jpg";
    document.getElementById("cimg").src = img;
  } else if (s >= 30) {
    img = "./img/evening.jpg";
    document.getElementById("cimg").src = img;
  } else if (s >= 15) {
    img = "./img/afternoon.jpg";
    document.getElementById("cimg").src = img;
  } else {
    img = "./img/morning.jpg";
    document.getElementById("cimg").src = img;
  }
 
  var time = h + " : " + m + " : " + s + " " + session;

  document.getElementById("real-clock").innerText = time;

  document.getElementById("real-clock").textContent = time;

  setTimeout(disTime, 1000);
}

disTime();
