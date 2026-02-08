"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

// console.log(modal);
// console.log(overlay);
// console.log(btnCloseModal);
console.log(btnOpenModal);

for (const element of btnOpenModal) {
  console.log(element.textContent);
}
