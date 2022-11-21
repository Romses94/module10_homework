/* FOURTH TASK 

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */

function random(max) {
  return Math.floor(Math.random() * max);
}

let x = random(100);

console.log(x);