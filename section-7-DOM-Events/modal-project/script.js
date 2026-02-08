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

// // Enabling Esc key for closing modal window
// document.addEventListener("keyup", (e) => {
//   e.key === "Escape" && closeModalWinHandler();
// });

// Other way suggested by instructor -
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      //if the model window is open then only we gonna close that
      closeModalWinHandler(); //we need to call this manually :-)
    }
  }
});
