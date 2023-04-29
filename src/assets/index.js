var ball = document.querySelector('.ball');
var info = document.querySelector('.info');
var x = 50;
var y = 50;
var ball2 = document.querySelector('.ball2');
var info2 = document.querySelector('.info2');
var x2 = 750;
var y2 = 240;
var maxX = 750;
var maxY = 450;
var xSpeed = 1;
var ySpeed = 1;

var tableRow = document.getElementById("table-row");
var xCell = document.getElementById("x-value");
var yCell = document.getElementById("y-value");
var tableRow2 = document.getElementById("table-row2");
var xCell2 = document.getElementById("x-value2");
var yCell2 = document.getElementById("y-value2");

function updateTable() {
  xCell.innerText = x;
  yCell.innerText = y;
  xCell2.innerText = x2;
  yCell2.innerText = y2;
}

setInterval(function() {
  x += xSpeed;
  y += ySpeed;
  
  if (x > maxX) {
    x = maxX;
    xSpeed = -xSpeed;
  } else if (x < 0) {
    x = 0;
    xSpeed = -xSpeed;
  }
  
  if (y > maxY) {
    y = maxY;
    ySpeed = -ySpeed;
  } else if (y < 0) {
    y = 0;
    ySpeed = -ySpeed;
  }
  
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  
  info.innerText = "X: " + x + ", Y: " + y+",   Agent: dong ding";


  x2 -= xSpeed;
  y2 -= ySpeed;
  
  if (x2 > maxX) {
    x2 = maxX;
    xSpeed = xSpeed;
  } else if (x2 < 0) {
    x2 = 0;
    xSpeed = xSpeed;
  }
  
  if (y2 > maxY) {
    y2 = maxY;
    ySpeed = ySpeed;
  } else if (y2 < 0) {
    y2 = 0;
    ySpeed = ySpeed;
  }
  
  ball2.style.left = x2 + 'px';
  ball2.style.top = y2 + 'px';
  
  info2.innerText = "X: " + x2 + ", Y: " + y2+",   Agent: ding dong";

  updateTable();
}, 100);
