"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

// Здесь пишем решение, данный комментарий необходимо стереть.

function taxDeduction(number){
    return number - (number * 0.13);
}

console.log('Вторая задача');
const number = +prompt("Введите размер заработной платы:");
if (!Number.isInteger(number)){
    console.log("Значение задано неверно");
}else {
    console.log(`Размер заработной платы за вычетом налогов равен ${taxDeduction(number)}`);
}
console.log('');
