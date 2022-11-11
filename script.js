var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



for (var i = 0; i < squares.length; i++) {
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];

  //add click event on squares
  squares[i].addEventListener("click", clickedSquare);

  function clickedSquare() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }

  }
}

//choosing difficulty
for(var i = 0 ; i <modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
   modeButtons[0].classList.remove("selected");
   modeButtons[1].classList.remove("selected");
   this.classList.add("selected");
   if(this.textContent === "Easy"){
     numOfSquares = 3;
   }else{
     numOfSquares = 6;
   }
   reset();
  });
}

//resetting the game
resetButton.addEventListener("click" , function(){
  reset();
});






//my functions

function changeColors(color){
  //loop through all squares
  for ( var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  } 
}

function generateRandomColors(num){
  //make an array 
  var arr = [];
  //add num random colors to array
  for( var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor(){
   // pick a red from 0 - 255
   var r = Math.floor(Math.random() * 256);
   //pick a green from 0 -255
   var g = Math.floor(Math.random() * 256);
   // pick a blue from 0 - 255
   var b = Math.floor(Math.random() * 256);
   
   return ("rgb(" + r + ", " + g + ", " + b +")");
}


function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function reset(){
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"; 
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    } 
  }

  h1.style.backgroundColor = "steelblue";

}
