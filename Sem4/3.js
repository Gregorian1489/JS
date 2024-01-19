"use strict";
/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

console.log("Task 3");
const array = [];
const array2 = [];
console.log("Сгенерированный массив: ");
for (let i = 0; i < 5; i++) {
    array[i] = Math.floor(Math.random() * 10);
}

function generateNewArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            array2.push(array[i]);
        }
    }
    if (array2.length === 0) {
        return "Элеметов со значением '3' в массиве нет";
    }
    return `Новый массив: ${array2}`;
}

console.log(array);
console.log("Сумма элементов массива: " + array.reduce((a, b) => a + b, 0));
console.log("Минимальное значение в массиве: " + Math.min(...array));
console.log(generateNewArray(array));




