// document.querySelector('.message')
// document.querySelector('.number')
// document.querySelector('.score')
// document.querySelector(".check");
// document.querySelector('.guess')

"use strict";
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".check");
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
// console.log(message.textContent);
// console.log(number.textContent);

message.textContent = "Correct Number!";
number.textContent = 13;

check.addEventListener("click", function (event) {
  const guessIn = Number(guess.value);
  console.log(guessIn, typeof guessIn);
  console.log(this); //return element on which event listener attached
  if (!guessIn) {
    message.textContent = "No number!";
  }
});
