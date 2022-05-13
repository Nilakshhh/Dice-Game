var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;

var randomImageSource = "images/dice" + randomNumber1 + ".png";

var dice1 = document.querySelector(".img1");

dice1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var dice2 = document.querySelector(".img2");

dice2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2)
{
    var heading = document.querySelector("h1");
    heading.innerHTML = "Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
    var heading = document.querySelector("h1");
    heading.innerHTML = "Player 2 Wins";
}
else if(randomNumber1===randomNumber2)
{
    var heading = document.querySelector("h1");
    heading.innerHTML = "Draw!";
}