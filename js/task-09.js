// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorSpan = document.querySelector('.color');
console.log(colorSpan);
const button = document.querySelector('.change-color');
console.log(button);
button.addEventListener('click', changeBodyColor);
function changeBodyColor(color) {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  colorSpan.textContent = randomColor;
}
