"use strict";
// D means DOM
const messageD = document.querySelector(".message");
const numberD = document.querySelector(".number");
const scoreD = document.querySelector(".score");
const checkD = document.querySelector(".check");
const guessD = document.querySelector(".guess");
const highScoreD = document.querySelector(".highscore");
// console.log(messageD.textContent);
// console.log(number.textContent);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
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
    document.querySelector("body").style.backgroundColor = "#60b347";
    messageD.textContent = "Correct Number :-)";
    highscore = highscore > score ? highscore : score;
    highScoreD.textContent = `${highscore}`;
    numberD.textContent = `${secretNumber}`;
    numberD.style.width = "30rem";
  }
  //   When guess is too high - #222
  else if (guessIn >= secretNumber) {
    document.querySelector("body").style.backgroundColor = "#222";
    if (score > 1) {
      messageD.textContent = "Too High - UpArrow";
      score--;
      scoreD.textContent = `${score}`;
    } else {
      messageD.textContent = "You lost the game";
      scoreD.textContent = "0";
    }
  }
  //   When guess is too low - #222
  else if (guessIn <= secretNumber) {
    document.querySelector("body").style.backgroundColor = "#222";
    if (score > 1) {
      messageD.textContent = "Too Low  - DownArrow";
      score--;
      scoreD.textContent = `${score}`;
    } else {
      messageD.textContent = "You lost the game";
      scoreD.textContent = "0";
    }
  }
});
