let modal1 = document.getElementById("modal-open1");
let modal2 = document.getElementById("modal-open2");
let modal3 = document.getElementById("modal-open3");

let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("myBtn2");
let btn3 = document.getElementById("myBtn3");

let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];
let span3 = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
    modal1.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}