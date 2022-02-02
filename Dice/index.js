

var diceNumber = Math.floor(Math.random()*6)+1;
var imageName = "dice"+diceNumber+".png";
var imageSource = "images/"+imageName;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);



var diceNumber1 = Math.floor(Math.random()*6)+1;
var imageName = "dice"+diceNumber1+".png";
var imageSource = "images/"+imageName;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource);

if (diceNumber<diceNumber1) {
	document.querySelector("h1").innerHTML = "Player 2 Won";
}
else if(diceNumber>diceNumber1){
	document.querySelector("h1").innerHTML = "Player 1 Won";
	
}
else{
	document.querySelector("h1").innerHTML = "Draw";
}