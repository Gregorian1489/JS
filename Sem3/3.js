"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function findMaxNumber (num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

const num1 = +prompt('Введите первое число');
const num2 = +prompt('Введите второе число');
const num3 = +prompt('Введите третье число');

console.log('Третья задача');
console.log(`Максимальное число: ${findMaxNumber(num1, num2, num3)}`)
console.log('');


