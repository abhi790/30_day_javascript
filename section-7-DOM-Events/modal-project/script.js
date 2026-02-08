"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModalWinHandler = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModalWinHandler = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (const element of btnOpenModal) {
  element.addEventListener("click", openModalWinHandler);
}
// when we click button at top right corner of modal window - it should close modal
btnCloseModal.addEventListener("click", closeModalWinHandler);

// when we click outside of modal window it should also close modal
overlay.addEventListener("click", closeModalWinHandler);
