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

// const message = document.createElement("div");
// const header = document.querySelector(".header");
// // adding a class 'cookie-message' to the div message
// message.classList.add("cookie-message");
// // set both text and html simultaneously
// message.innerHTML =
//   'We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it</button>';
// header.insertAdjacentElement("beforeend", message);
// // A.   Styling using javascript
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.width); //only inline style is accessable
// console.log(message.style.backgroundColor); //only inline style is accessable
// console.log(message.style.color); //style define inside style.css file is not accessible

// // We need another nethod called getComputedStyle to get the styles
// console.log(getComputedStyle(message)); //all the style
// console.log(getComputedStyle(message).backgroundColor); //get only specific style value

// // let increase height
// const increaseHeight =
//   (parseFloat(getComputedStyle(message).height) + 40).toFixed(2) + "px";
// console.log(increaseHeight);
// message.style.height = increaseHeight;

// // other way to do this
// // changing primary color of the theme
// document.documentElement.style.setProperty("--color-primary", "orangered");
// // changing inline background color of message element using setProperty('stylename in css, snakecase', 'value')
// message.style.setProperty("background-color", "yellow");

// B.   Attributes
// We can get access standard attribute which are predefined to an element
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// We can set also
logo.alt = "Beautiful minimalist logo";
console.log(logo.alt); //Beautiful minimalist logo

// Non-standard
console.log(logo.designer); // this is not going to work as designer is not a standard attribute, it is we have defind this inside the element img

// getting non-standard attribute
console.log(logo.getAttribute("designer"));
// setting or create if not present a non-standard attribute
logo.setAttribute("company", "HDFC Bank");
console.log(logo.getAttribute("company"));
// getAttribute can also be used for standard attribute as wel;
console.log(logo.getAttribute("alt")); //Beautiful minimalist logo
console.log(logo.setAttribute("alt", "HDFC bank logo is changed to fantastic")); //set attribute return undefined
console.log(logo.getAttribute("alt"));

// CLASSES
// we can add class, remove class using javascript, toggle and even check for any classes
logo.classList.add("c", "d");
logo.classList.remove("c", "d");
logo.classList.toggle("m");
logo.classList.contains("c");

// DON'T USE EVER
logo.className = "abhi";
