/* EIGHTH TASK 

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки. */

let arr = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry", "blue"]
]);

for (let pair of arr) {
  console.log('Ключ = ' + pair[0] + ', значение = ' + pair[1]);
}