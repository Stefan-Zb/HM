//       // 1. створити масив та вивести його в консоль:

//       // 1.2. з 5 числових значень

// let massif1 = [1, 2, 3, 4, 5];
// console.log(massif1);

//       // 1.3. з 5 стічкових значень

// let massif2 = ['one', 'two', 'three', 'four', 'five'];
// console.log(massif2);

//       // 1.4. з 5 значень стрічкового, числового та булевого типу

// let massif3 = ['something', 1, 2, true, false];
// console.log(massif3);

//      // 2.1. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quasi!</div>');
// }

//      // 2.2. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div>цикл № - ' + (i + 1) + '</div>');
// }

//       // 3.1. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<div>Lorem ipsum dolor sit amet.</div>');
//     i++
// }

//      // 3.2. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write('<div> № '+ (i+1) + ' - Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>');
//     i++
// }

//        // 4.1. Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

//        // 4.2. Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// for (let i = 0; i < strings.length; i++) {
//     console.log(strings[i]);
// }

//        // 4.3. Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let anyTypeArray = ['1', 2, 3, 'something', true, false, undefined, null, 123, '123'];
// let i = 0;
// while (i < anyTypeArray.length) {
//     console.log(anyTypeArray[i]);
//     i++
// }

//        // 5.1. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let Array10 = ['1', 2, 3, 'something', true, false, 1, 'null', '123', 123];
// for (let i = 0; i < Array10.length; i++) {
//     if (typeof Array10[i] === "boolean"){
//         console.log(Array10[i]);
//     }
// }

//        // 5.2. Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let nomberArray = ['1', 2, 3, true, false, 1, 'null', 'something', 'wow', 123];
// for (let i = 0; i < nomberArray.length; i++) {
//     if (typeof nomberArray[i] === "number"){
//         console.log(nomberArray[i]);
//     }
// }

//        // 5.3. Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let stryngArray = ['1', 2, 3, true, false, 1, 'null', 'something', 'wow', 123];
// for (let i = 0; i < stryngArray.length; i++) {
//     if (typeof stryngArray[i] === "string"){
//         console.log(stryngArray[i]);
//     }
// }

//        // 6. Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let massif = [];
// massif[0] = 1;
// massif[1] = 2;
// massif[2] = true;
// massif[3] = false;
// massif[4] = 'something';
// massif[5] = ['1', '2'];
// massif[6] = {name: 'Stefan'};
// massif[7] = null;
// massif[8] = undefined;
// massif[9] = '123';
// for (let i = 0; i < massif.length; i++) {
//     console.log(massif[i]);
// }

//         // 7 Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++){
//     console.log('step - ' + (i + 1));
//     document.write('step - ' + (i + 1) + '<br>');
// }

//        // 8.1. Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++){
//     console.log('step - ' + (i + 1));
//     document.write('step - ' + (i + 1) + '<br>');
// }

//        // 8.2. Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 200; i += 2){
//     console.log('iteranion ' + (i + 1));
//     document.write('iteranion ' + (i + 1) + '<br>');
// }

//        // 9.1. Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if (i % 2 === 0) {
//         console.log('iteranion ' + (i));
//         document.write('iteranion ' + (i) + '<br>');
//     }
// }

//        // 9.2. Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++){
//     if (i % 2 === 1) {
//         console.log('iteranion ' + (i));
//         document.write('iteranion ' + (i) + '<br>');
//     }
// }










