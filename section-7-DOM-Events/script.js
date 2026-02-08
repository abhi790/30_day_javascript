// document.querySelector('.message')
// document.querySelector('.number')
// document.querySelector('.score')
// document.querySelector(".check");
// document.querySelector('.guess')

"use strict";
// D means DOM
const messageD = document.querySelector(".message");
const numberD = document.querySelector(".number");
const scoreD = document.querySelector(".check");
const checkD = document.querySelector(".check");
const guessD = document.querySelector(".guess");
// console.log(messageD.textContent);
// console.log(number.textContent);

messageD.textContent = "Correct Number!";
const secretNumber = Math.trunc(Math.random() * 20 + 1);
numberD.textContent = secretNumber;

let score = 20;

checkD.addEventListener("click", function (event) {
  const guessIn = Number(guessD.value);
  //   console.log(this); //return element on which event listener attached
  if (!guessIn) {
    messageD.textContent = "No number!";
  }
});
