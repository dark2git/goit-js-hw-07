`use strict`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

const currentColor = document.querySelector(".color"); //span

const colorButton = document.querySelector('.change-color'); //button

colorButton.addEventListener('click', () => {
const randomColor = getRandomHexColor();
  currentColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});