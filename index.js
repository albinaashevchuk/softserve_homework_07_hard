// 1 Запитайте у користувача тризначне число і виведіть його задом наперед. Для вирішення завдання вам знадобиться оператор % (залишок від ділення).

const num = prompt("Введіть 3-хзначне число");
console.log (`Перевернуте число - ${num.split("").reverse().join("")}.`)

// 2 Кевін щойно приїхав зі США і не може звикнути до нашої системи вимірювання температури. Напишіть код, де б він міг ввести нові для нього градуси в Цельсіях і отримати старі добрі Фаренгейти.
const enteredCelsius = prompt("Enter a number in Celsius");
const result = Math.round(enteredCelsius * 1.8 + 32);

console.log(result);

// 3 Користувач вводить по черзі кольори (червоний, зелений, синій) у вигляді шістнадцяткового запису, а вивести йому цей колір у вигляді rgb(12,13,14)
const red = prompt("Введіть червоний у вигляді шістнадцяткового запису");
const green = prompt("Введіть зелений у вигляді шістнадцяткового запису");
const blue = prompt("Введіть блакитний у вигляді шістнадцяткового запису");

const r = parseInt(red, 16);
const g = parseInt(green, 16);
const b = parseInt(blue, 16);

console.log(` Отриманий rgb ${r}, ${g}, ${b}`);
document.body.style.backgroundColor = `#${r}${g}${b}`;

