//         // 1. - создать массив с 20 числами.;
//
// let masyv = [2, 8, 3, 22, 45, 1, 50, 23, 41, 18, 62, 32, 80, 41, 33, 21, 14, 35, 24];
//
//         // 1.1 -- при помощи метода sort и колбека  отсортировать массив.
//
// let sort = masyv.sort((a,b) => {
//   return a-b;
// })
// console.log(sort);
//
//         // 1.2 -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//
// let sort2 = masyv.sort((a,b)=>{
//   return b-a;
// })
// console.log(sort2);
//
//         // 1.3 -- при помощи filter получить числа кратные 3
//
// let filter1 = masyv.filter((value) => !(value % 3));
// console.log(filter1);
//
//         // 1.4 -- при помощи filter получить числа кратные 10
//
// let filter2 = masyv.filter((value) => !(value % 10));
// console.log(filter2);
//
//         // 1.5 -- перебрать (проитерировать) массив при помощи foreach()
//
// masyv.forEach((value, index)=> console.log(index, value));
//
//         // 1.6 -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
//
// masyv.map((value)=>console.log(value * 3));
//
//         // 2. - создать массив со словами на 15-20 элементов.
//
// let masyv2 = ['создать', 'массив', 'со', 'словами', 'перебрать', 'массив', 'и', 'получить', 'новый', 'массив', 'перебрать', 'проитерировать', 'массив'];
//
//         // 2.1 -- отсортировать его по алфавиту в восходящем порядке.
//
// let sort3 = masyv2.sort((a,b)=> {
//   if (a>b) {
//     return 1;
//   }
//   return  -1;
// })
// console.log(sort3);
//
//         // 2.2 -- отсортировать его по алфавиту  в нисходящем порядке.
//
// let sort4 = masyv2.sort((a,b)=>{
//   if (a>b) {
//     return -1;
//   }
//   return  1;
// })
// console.log(sort4);
//
//       // 2.3 -- отфильтровать слова длиной менее 4х символов
//
// console.log(masyv2.filter((value) => (value.length < 4)));
//
//       // 2.4 -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
//
// let mapa = masyv2.map((value) => (value + '!'));
// console.log(mapa);
//
//       // 3. Все робити через функції масивів (foreach, map ...тд)
//       // Дан масив :
//   let users = [
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
//     ];
//
//         // 3.1 - відсортувати його за  віком (зростання , а потім окремо спадання)
//
// console.log(users.sort((a,b) => a.age-b.age));
//
// console.log(users.sort((a,b) => b.age-a.age));
//
//         // 3.2 - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// console.log(users.sort((a, b) => a.name.length-b.name.length));
//
// console.log(users.sort((a, b) => b.name.length-a.name.length));
//
//         // 3.3 - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
//
// let xxx = [];
// for (let user of users){
//   let a = JSON.stringify(user);
//   xxx.push(a);
// }
// let newmasyv = [];
// for (let user of xxx) {
//   let a = JSON.parse(user);
//   newmasyv.push(a);
// }
// newmasyv.map((value,index)=>{
//     return value['id']=index;
//     }
// );
// console.log(newmasyv);
//
//         // 3.4 - відсортувати його за індентифікатором
//
// console.log(newmasyv.sort((a, b) => b.id-a.id));
//
//
