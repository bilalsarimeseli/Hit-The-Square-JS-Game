var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations = 0;

window.addEventListener("load", setGameArea);
function setGameArea() {
  aWidth = innerWidth;
  aHeight = innerHeight;
  aWidth -= 22;
  aHeight -= 97;
  document.getElementById("gameArea").style.width = aWidth + "px";
  document.getElementById("gameArea").style.height = aHeight + "px";
  document.getElementById("point").addEventListener("click", detectHit);
  aWidth -= 74;
  aHeight -= 74;
  movePoint();
  titleShift();
}

function detectHit() {
  score += 1;
  document.getElementById("scoreBoard").innerHTML = "SCORE " + score;
}

function movePoint() {
  var x = Math.floor(Math.random() * aWidth);
  var y = Math.floor(Math.random() * aHeight);
  if (x < 10) x = 10;
  if (y < 10) y = 10;
  document.getElementById("point").style.left = x + "px";
  document.getElementById("point").style.top = y + "px";
  if (iterations < 30) timer = setTimeout("movePoint()", 820);
  else {
    document.getElementById("scoreBoard").innerHTML += "     Game Over!";
    document.getElementById("point").removeEventListener("click", detectHit);
    clearTimeout(timer);
  }
  iterations++;
}

function titleShift(){
  var xTitle = Math.floor(Math.random() * aWidth);
  if (xTitle < 10) xTitle = 10;
  console.log(xTitle)
  document.getElementById("pageTitle").style.left = xTitle + "px";
  if(iterations < 30) timer = setTimeout("titleShift()", 800);
};
