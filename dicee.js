var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src", randomDiceImage1);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll(".img2")[0].setAttribute("src", randomDiceImage2);

 if(randomNumber1 > randomNumber2)
 {
    document.querySelector("h1").innerText = "Player 1 wins!! 🏆";
 }
 
 else if(randomNumber1 === randomNumber2)
 {
    document.querySelector("h1").innerText = "Draw";
 }

 else
 {
    document.querySelector("h1").innerText = "Player 2 wins!! 🏆";
 }