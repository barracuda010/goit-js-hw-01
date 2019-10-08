// ===================================================================================#1
// Напиши функцию logItems(array), которая получает массив и использует цикл for,
// который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].
// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// Вызовы функции для проверки работоспособности твоей реализации.

// // function logItems(array) {
//     for (let i = 0; i < array.length; i +=1 ){
//         const counter = i + 1 ;
//         console.log(`${counter} - ${array[i]}`);
//     }
// }
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// ===================================================================================#2
// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы)
// и цену гравировки одного слова, и возвращающую цену гравировки.

// function calculateEngravingPrice(message, pricePerWord) {
//   const arr = message.split (' ')
//   return arr.length * pricePerWord;
// }

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
// =============================================================================================== #3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function(string) {
//     const words = string.split(" ") ;
//     let longestWord = [];

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// ==================================================================================================#4
// Напиши функцию formatString(string) принимающую строку в параметр string.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка символов и
// добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.

// 1.Записываем функцию
// 2. Ограничить строку до 40 символов
// 3. Если нет,то в конец строки добавить ...

// function formatString(string){
//     let symbols = string.slice (0,40);
//     if (string.length > symbols.length) {
//         symbols += "...";
//     }
//     return symbols;

// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // // вернется оригинальная строка

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',),
// );
// // вернется форматированная строка

// ============================================================================================= #5

// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// function checkForSpam(str) {
//   return str.toLowerCase().includes ('spam')|| str.toLowerCase().includes ('sale');

// }
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ==============================================================================================#6

// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
// Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

// let input;
// const numbers = [];
// let total = 0;

// function allNumbers() {
//   do {
//     input = prompt("Число введи");
//     if (Number.isNaN(Number(input))) {
//       alert("Было введено не число, попробуйте еще раз");
//     } else numbers.push(+input);
//   } while (input);
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// }
// allNumbers(numbers);
