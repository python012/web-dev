console.log("color game js is loaded")

var colors = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
]

var isHardMode = true;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var theColor = colors[Math.floor(Math.random() * colors.length)];
var h1 = document.querySelector("h1");

var resetBtn = document.querySelector("#reset");
var easyModeBtn = document.querySelector("#easyMode");
var hardModeBtn = document.querySelector("#hardMode");

colorDisplay.textContent = theColor;
hardModeBtn.style.backgroundColor = 'blue';

resetBtn.addEventListener("click", function(){
    console.log("new game");
    newGame();
});

easyModeBtn.addEventListener("click", function(){
    isHardMode = false;
    newGame();
    easyModeBtn.style.backgroundColor = 'blue';
    hardModeBtn.style.backgroundColor = 'white';
});

hardModeBtn.addEventListener("click", function(){
    isHardMode = true;
    newGame();
    easyModeBtn.style.backgroundColor = 'white';
    hardModeBtn.style.backgroundColor = 'blue';
});

function generateColorsArray() {
    colors.splice(0, colors.length); // empty the array
    for (var i=0;i<6;i++) {
        colors.push(randomColor());
    }
}

function newGame() {
    generateColorsArray();
    if (isHardMode) {
        theColor = colors[Math.floor(Math.random() * 6)];
        for (var i=0;i<6;i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'inline';
        }
    } else {
        theColor = colors[Math.floor(Math.random() * 3)];
        for (var i=0;i<6;i++) {
            if (i < 3) {
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = 'none';
            }
        }
    }
    colorDisplay.textContent = theColor; // refresh the texts in title
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
}

function randomColor() {
    return "rgb(" + numLessThan256() + ", " + numLessThan256() + ", " + numLessThan256() + ")";
}

function numLessThan256() {
    return Math.floor(Math.random() * 256);
}

for (var i=0;i<squares.length;i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        if (this.style.backgroundColor == theColor) {
            messageDisplay.textContent = "Correct!";
            for (const item of squares) {
                item.style.backgroundColor = theColor;
            }
            h1.style.backgroundColor = theColor;
        } else {
            messageDisplay.textContent = "Wrong!";
            this.style.backgroundColor = "#232323";
        }
        
    });
}
