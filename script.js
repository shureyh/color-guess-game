var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }

  }
}










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

