var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage = `images/dice${randomNumber1}.png`
var randomImage2 = `images/dice${randomNumber2}.png`

var image1Change = document.querySelectorAll("img")[0];
image1Change.setAttribute("src",randomImage);

var image2Change = document.querySelectorAll("img")[1];
image2Change.setAttribute("src", randomImage2)


if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerText = " ⚠️ DRAW"
} else if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerText = "PLAYER 1 WINS 🚩"
} else {
    document.querySelector("h1").innerText = "PLAYER 2 WINS 🚩"
}