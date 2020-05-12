var score = 0;
var aWidth;
var aHeight;
var timer;
var iterations;

window.addEventListener('load', setGameArea);
function setGameArea(){
    aWidth = innerWidth;
    aHeight = innerHeight;
    aWidth -= 22;
    aHeight -= 97;
    document.getElementById('gameArea').style.width = aWidth + 'px';
    document.getElementById('gameArea').style.height = aHeigth + 'px';
    document.getElementById('point').addEventListener('click', detectHit);
}

function detectHit(){
    score += 1;
    document.getElementById('scoreBoard').innerHTML = "SCORE " + score;
}