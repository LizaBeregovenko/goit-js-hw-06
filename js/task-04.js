// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const btnDecrement = document.querySelector('[data-action = "decrement"]');
const btnIncrement = document.querySelector('[data-action = "increment"]');

const span = document.querySelector('#value');
const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};
btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
