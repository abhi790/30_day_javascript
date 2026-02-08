"use strict";
// D means DOM
const messageD = document.querySelector(".message");
const numberD = document.querySelector(".number");
const scoreD = document.querySelector(".score");
const checkD = document.querySelector(".check");
const guessD = document.querySelector(".guess");
const highScoreD = document.querySelector(".highscore");
const againD = document.querySelector(".again");
// console.log(messageD.textContent);
// console.log(number.textContent);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// numberD.textContent = secretNumber;

let score = 20;
let highscore = 0;
checkD.addEventListener("click", function (event) {
  const guessIn = Number(guessD.value);
  event.preventDefault();
  //   console.log(this); //return element on which event listener attached
  //   When there is No input
  if (!guessIn) {
    messageD.textContent = "No number!";
  }
  //   When Player wins
  else if (guessIn === secretNumber) {
    changeBackground(true); //to green background as we are passing with true argument
    messageD.textContent = "Correct Number :-)";
    highscore = highscore > score ? highscore : score;
    highScoreD.textContent = `${highscore}`;
    numberD.textContent = `${secretNumber}`;
    numberD.style.width = "30rem";
  }
  //   When guess is too high - #222
  else if (guessIn >= secretNumber) {
    changeBackground(); //without argument will take color as #222
    if (score > 1) {
      guessHighMessage();
    } else {
      lostGameMessage();
    }
  }
  //   When guess is too low - #222
  else if (guessIn <= secretNumber) {
    changeBackground(); //without argument will take color as #222
    if (score > 1) {
      guessLowMessage(score);
    } else {
      lostGameMessage();
    }
  }
});

// attaching click event handler
againD.addEventListener("click", function (event) {
  event.preventDefault();
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  messageD.textContent = "Start guessing...";
  guessD.value = "";
  highscore = score;
  score = 20;
  numberD.textContent = "?";
  numberD.style.width = "15rem";
  scoreD.textContent = `${score}`;
  changeBackground();
});

// utility function
// changing background color based on value passed and default value
function changeBackground(win = false) {
  if (win) {
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else document.querySelector("body").style.backgroundColor = "#222";
}

// lost game message
function lostGameMessage() {
  messageD.textContent = "You lost the game";
  scoreD.textContent = "0";
}

// guess too low message
function guessLowMessage(score) {
  messageD.textContent = "Too Low  - DownArrow";
  score--;
  scoreD.textContent = `${score}`;
}

function guessHighMessage(score) {
  messageD.textContent = "Too High - UpArrow";
  score--;
  scoreD.textContent = `${score}`;
}
