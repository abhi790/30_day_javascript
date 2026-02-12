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

// TRAVERSING DOM TREE
const h1 = document.querySelector("h1");

// GOING DOWNWARD : CHILD
console.log(h1.querySelectorAll(".highlight")); //it will show every highlight class inside h1 not just direct children
console.log(h1.childNodes);
console.log(h1.children);
// we can modify or set element property
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "blue";

// GOING UPWARD : PARENTS
console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest(".header"));

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

// GOING SIDEWAYS : Siblings elements
console.log(h1.previousElementSibling); //null - as h1 is the first child of the div.header__title
console.log(h1.nextElementSibling);

// getting all the sibling of h1 - trick, first go to parent and then list all the children
console.log(h1.parentElement.children);

// do some fun things
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
