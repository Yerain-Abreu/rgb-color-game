//arrays//////////////////////
var colors = generateRandomColors(6);

//variables///////////////////

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var barTop = document.getElementById("top-bar-1");
var reset = document.querySelector(".reset");
var resetFooter = document.querySelector("#resetFooter");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var squareRow2 = document.querySelector("#squareRow2");




//functions///////////////////
function changeColor(color){
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}
function pickColor(){
 var random = Math.floor( Math.random() * colors.length);
 return colors[random];
}

//////////////////////////////
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
      changeColor(clickedColor);
      messageDisplay.textContent = "Correct";
      barTop.style.backgroundColor = clickedColor;
      barTop0.style.backgroundColor = clickedColor;
      resetFooter.classList.remove("hidden");
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "try again";
    }
  });
}
function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColors());
  }
  return arr;
}
function randomColors(){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b +")";
}


reset.addEventListener("click", function(){
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  barTop.style.backgroundColor = "#f6f7f8";
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
   reset.textContent = "New Colors";
   messageDisplay.textContent = "Go ahead, pick a Color!";
     squareRow2.classList.remove
("hidden")
  }
})


easy.addEventListener("click", function(){
    colors = generateRandomColors(3);

   pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

 squareRow2.classList.add("hidden")
   easy.classList.add("selected")
    hard.classList.remove("selected")


}
})

hard.addEventListener("click", function(){
      colors = generateRandomColors(6);

  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
}

  squareRow2.classList.remove("hidden")
   hard.classList.add("selected")
    easy.classList.remove("selected")

})
