/* SECOND TASK 

Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён». */

function random(max) {
  return Math.floor(Math.random() * max);
}

let x, arr; 
arr = [true, 1, 'текст'];
x = arr[random(arr.length + 1)];

console.log(typeof(x));

if (typeof(x) == 'number') {
	console.log('x это число');
}

else if (typeof(x) == 'string') {
	console.log('x это строка');	
}

else if (typeof(x) == 'string') {
	console.log('x это булево');	
}

else {
	console.log('тип неопределён');	
}