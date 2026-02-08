"use strict";
// D means DOM
const messageD = document.querySelector(".message");
const numberD = document.querySelector(".number");
const scoreD = document.querySelector(".score");
const checkD = document.querySelector(".check");
const guessD = document.querySelector(".guess");
const highScoreD = document.querySelector(".highscore");
const againD = document.querySelector(".again");
const bodycolor = document.querySelector("body").style;
// console.log(messageD.textContent);
// console.log(number.textContent);

let secretNumber = generateSecretNumber();
// numberD.textContent = secretNumber;

let score = 20;
let highscore = 0;

highScoreD.textContent = highscore;

checkD.addEventListener("click", function (event) {
  const guessIn = Number(guessD.value);
  event.preventDefault();
  //   console.log(this); //return element on which event listener attached
  //   When there is No input
  if (!guessIn) {
    displayMessage("No number!");
  }
  //   When Player wins
  else if (guessIn === secretNumber) {
    changeBackground(true); //to green background as we are passing with true argument
    displayMessage("Correct Number :-)");
    numberD.textContent = secretNumber;
    numberD.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highScoreD.textContent = highscore;
    }
  }
  //   When guess is too high - #222
  else if (guessIn !== secretNumber) {
    changeBackground(); //without argument will take color as #222
    if (score > 1) {
      displayMessage(
        guessIn > secretNumber ? "Too High - UpArrow" : "Too Low  - DownArrow",
      );
      score--;
      scoreD.textContent = score;

      numberD.textContent = "?";
    } else {
      displayMessage("You lost the game");
      scoreD.textContent = "0";
    }
  }
});

// attaching click event handler
againD.addEventListener("click", function (event) {
  event.preventDefault();
  secretNumber = generateSecretNumber();
  changeBackground();
  displayMessage("Start guessing...");
  guessD.value = "";
  highscore = score;
  score = 20;
  numberD.textContent = "?";
  numberD.style.width = "15rem";
  scoreD.textContent = score;
});

// utility function
// changing background color based on value passed and default value
function changeBackground(win = false) {
  if (win) {
    bodycolor.backgroundColor = "#60b347";
  } else bodycolor.backgroundColor = "#222";
}
function displayMessage(message) {
  messageD.textContent = message;
}

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}
