/* SIXTH TASK 

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */

let arr1, arr2, arr3; 
arr1 = [1, 2, 3, 4, 5];
arr2 = [2, 2, 2];
arr3 = [1, true];

function comparison(arr, check) {
	for (i = 0; i < arr.length; i ++) {
		for (j = i + 1; j < arr.length; j++) {
			if (arr[i] !== arr[j]) {
				check = false;
			} 
		}
	}

	if (check == false) {
		console.log('элементы массива ' + arr + ' неравны');
	}
	else {
		console.log('элементы массива ' + arr + ' равны');
	}

}

comparison(arr1);
comparison(arr2);
comparison(arr3);