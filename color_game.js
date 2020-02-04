var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else{
      squares[i].style.display = "none"
    }
  }
});

hard.addEventListener("click", function(){
  numOfSquares = 6;
  hard.classList.add("selected");
  easy.classList.remove("selected");
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});

colorDisplay.textContent = pickedColor;

reset.addEventListener("click", function(){
  reset.textContent = "New Colors"
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.background = "steelblue";
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
});

for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;

    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      reset.textContent = "Play again?";
      h1.style.background = pickedColor;
      changeColors(pickedColor);
    } else{
      this.style.background = "steelblue";
      messageDisplay.textContent = "Try again";
    }
  }); 
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];

  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }

  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

















