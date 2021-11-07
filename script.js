"use strict";

const showModal = document.querySelectorAll(".show-modal");
const displayer = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");

const modalOpener = function () {
  displayer.classList.remove("hidden");
  overLay.classList.remove("hidden");
};

const modalCloser = function () {
  displayer.classList.add("hidden");
  overLay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", modalOpener);
}

close.addEventListener("click", modalCloser);
overLay.addEventListener("click", modalCloser);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !displayer.classList.contains("hidden")) {
    modalCloser();
  }
});
