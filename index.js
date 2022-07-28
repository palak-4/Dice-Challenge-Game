 // For changing image 1 and generating random number

var n1 = Math.floor(Math.random()*6) + 1; //dice number from 1 to 6

var randomDiceImage = "dice" + n1 + ".png"  //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// For changing image 2 and generating random number

var n2 = Math.floor(Math.random()*6) + 1; //dice number from 1 to 6

var randomDiceImage2 = "dice" + n2 + ".png"  //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Changing the text according to which player won

if(n1>n2){
  document.querySelector("h1").innerHTML = "Player 1 wins !";
} //if player 1 wins

else if (n2>n1) {
  document.querySelector("h1").innerHTML = "Player 2 wins !";
} //if player 2 wins

else{
  document.querySelector("h1").innerHTML = "Draw !";
} //if it's a draw
