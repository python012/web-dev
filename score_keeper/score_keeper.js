var player1Btn = document.querySelector("#player1");
var player2Btn = document.querySelector("#player2");
var resetBtn = document.querySelector("#reset");

var score1Display = document.querySelector("#score1");
var score2Display = document.querySelector("#score2");
var winningScoreDisplay = document.querySelector("#max-score");

var winningInput = document.querySelector("#winning-score");


var gameOver = false;
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;

player1Btn.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score == winningScore) {
            score1Display.classList.add("green");
            gameOver = true;
        }
        score1Display.textContent = p1Score;
    }
});

player2Btn.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score == winningScore) {
            score2Display.classList.add("green");
            gameOver = true;
        }
        score2Display.textContent = p2Score;
    }
});

function reset() {
    score1Display.textContent = 0;
    score2Display.textContent = 0;
    score1Display.classList.remove("green");
    score2Display.classList.remove("green");
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    console.log("reset() is called.")
}

resetBtn.addEventListener("click", function(){
    reset();
});


winningInput.addEventListener("change", function(){ 
    // var nowNum = this.value;
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});









