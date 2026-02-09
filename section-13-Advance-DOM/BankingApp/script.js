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

// We can SET  event listener using 3 different way
// 1. using .addEventListener() - preferred way to use event listener
// 2. .onclick(handlerfunction), .onmouseenter(handlerfuntion) like this - old way not recommended
// 3. using html attribut <h1 onclick="do what you want or use a handler function"></h1>

// 1. USING .addEventListener() - we will use this only and rest for only good to know
const handlerFunction = (e) => {
  console.log(`You have pressed key : ${e.key}`);
};
// when we press any key on keyboard below event handler will fire
document.addEventListener("keydown", handlerFunction);
// we can remove event handler as well
document.removeEventListener("keydown", handlerFunction);

// 2. USING .onclick
const h1 = document.querySelector("h1");
const mouseHandlerFunction = (e) => {
  console.log(`You have hover the h1 element`);
};
h1.onmouseenter = mouseHandlerFunction;

// 3. Way is manipulating html element itself
// let's create an element and attached it to any sections and then add event listener to that element
const element = document.createElement("h1");
element.innerHTML = `<h1 onclick="alert('You have click newly created h1 element')">This h1 is inserted using javascript!</h1>`;

modal.insertAdjacentElement("beforeend", element);
