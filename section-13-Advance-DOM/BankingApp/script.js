"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

const message = document.createElement("div");
const header = document.querySelector(".header");
// adding a class 'cookie-message' to the div message
message.classList.add("cookie-message");
// set both text and html simultaneously
message.innerHTML =
  'We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it</button>';
header.insertAdjacentElement("beforeend", message);
// A.   Styling using javascript
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.width); //only inline style is accessable
console.log(message.style.backgroundColor); //only inline style is accessable
console.log(message.style.color); //style define inside style.css file is not accessible

// We need another nethod called getComputedStyle to get the styles
console.log(getComputedStyle(message)); //all the style
console.log(getComputedStyle(message).backgroundColor); //get only specific style value

// let increase height
const increaseHeight =
  (parseFloat(getComputedStyle(message).height) + 40).toFixed(2) + "px";
console.log(increaseHeight);
message.style.height = increaseHeight;

// other way to do this
// changing primary color of the theme
document.documentElement.style.setProperty("--color-primary", "orangered");
// changing inline background color of message element using setProperty('stylename in css, snakecase', 'value')
message.style.setProperty("background-color", "yellow");
