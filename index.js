var randomNumber1;
var randomNumber2;

randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;


var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Determine a Winner

var text = document.querySelector(".container h1");

if (randomNumber1 > randomNumber2) {
    text.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    text.innerHTML = "Player 2 Wins!🚩";
} else {
    text.innerHTML = "Draw";
}