//         // 1. - створити функцію яка виводить масив
//
// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// function showArray(arr){
//     console.log(arr);
// }
// showArray(arr1);
//
//         // 2. - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// let randomArr = [];
// function Random(arr) {
//     for (let i = 0; i < 10; i++){
//         arr.push(Math.round(Math.random()*100));
//     }
//     showArray(arr);
// }
// Random(randomArr);
//
//         // 3. - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function Min(one, two, three){
//     let result = Math.min(one, two, three);
//     console.log(result);
//     return result
// }
// Min(60, 8, 25);
//
//         // 4. - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function Max(one, two, three){
//     let result = Math.max(one, two, three);
//     console.log(result);
//     return result
// }
// Max(10, 5, 15);
//
//         // 5. - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
// function MinMax(){
//     let args = [];
//     for (let i = 0; i < arguments.length; i++){
//         args.push(arguments[i]);
//     }
//     console.log(Math.max(...args));
//     return Math.min(...args);
// }
// console.log(MinMax(10, 2, 32, 48, 5, 64, 7, 10, 50, 15, 30));
//
//         // 6. - створити функцію яка виводить масив
//
// let arr6 = [1, 2, 3, 4, 5, 6, 7];
// function showArray6(arr){
//     console.log(arr);
// }
// showArray6(arr6);
//
//         // 7. - створити функцію яка повертає найбільше число з масиву
//
// let arr7 = [25, 40, 64, 52, 3, 5, 78];
// function retMax(array) {
//     let max = array[0];
//        for (let i of array){
//         if (max < i) max = i;
//     }
//     return max;
// }
// console.log(retMax(arr7));
//
//         // 8. - створити функцію яка повертає найменьше число з масиву
//
// function retMin(array) {
//   let min = array[0];
//   for (let i of array){
//     if (min > i) min = i;
//   }
//   return min;
// }
// console.log(retMin(arr7));
//
//         // 9. - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//
// function suma(array) {
//   let s = array[0];
//   for (let i of array){
//     s += i;
//   }
//   return s;
// }
// console.log(suma(arr7));
//
//         // 10. - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function arithmeticMean(array) {
//   let s = array[0];
//   for (let i of array){
//     s += i;
//   }
//   return Math.round(s/array.length);
// }
// console.log(arithmeticMean(arr7));
//
//         // 11. - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
//   ];
//
// function numberObjects(arrayObj) {
//   let number = 0;
//   for (let i of arrayObj) {
//     if (typeof i === 'object') {
//       number++;
//     }
//   }
//   return number;
// }
// console.log(numberObjects(users));
//
//         // 12. - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
// function numberFields(arrayObj) {
//   let number = 0;
//   for (let i of arrayObj) {
//     if (typeof i === 'object') {
//       for (let key in i) {
//         number++;
//       }
//     }
//   }
//   return number;
// }
// console.log(numberFields(users));
//
//         // 13. - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//         //   Приклад
//         //   [1,2,3,4]
//         //   [2,3,4,5]
//         // результат
//         //   [3,5,7,9]
//
// let arr131 = [1,2,3,4];
// let arr132 = [2,3,4,5];
//
// function sumI(array1, array2) {
// let result = [];
//   for (let i = 0; i < array1.length; i++) {
//     result.push(array1[i]+array2[i]);
//
//   }
//   return result;
// }
//
// console.log(sumI(arr131, arr132))
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
