console.log("color game js is loaded")

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");

var theColor = colors[3];

colorDisplay.textContent = theColor;

for (var i=0;i<squares.length;i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        console.log(this.style.backgroundColor);
    });

    squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor == theColor) {
            alert("Yes");
        } else {
            alert("No");
        }
        
    });
}

