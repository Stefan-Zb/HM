        // -- створити об'єкт (не меньше 5ти властивостей) який описує
        // - собаку
        // - людину
        // - автомобіль
        // - квартиру
        // - книгу

// let dog ={
//   name : 'Tuzik',
//   color: 'black',
//   age : 5,
//   owner : 'lorem'
// }
// console.log(dog);
//
// let men = {
//   name: 'Stefan',
//   age: 28,
//   surname: 'Chornii',
//   hasPhone: true,
//   hasWife: false,
//   }
// console.log(man);
//
// let car = {
//   brand: 'Skoda',
//   model: 'Octavia',
//   year: 2008,
//   type: 'sedan',
//   color: 'green'
// }
// console.log(car);
//
// let flat = {
//     s : 150,
//     rooms : 2,
//     hasGarage : false,
//     hasBalcony : true,
//     price : 50000
// }
// console.log(flat);
//
// let book = {
//     pages : 658,
//     name : 'Tini vitru',
//     since : 1917,
//     autor : 'Carlos Safon',
//     city : 'London'
// }
// console.log(book);

        // -- Створити масив та вивести його в консоль:
        //   - з 5 собак
        // - 3 5 людей
        // - з 5 автомобілів

// let dog = ['tuzik', 'dhfghsdy', 'djhf', 'fdhsj', 'ueytjsj'];
// console.log(dog);

// let people = ['Oksana', 'Stefan', 'Olia', 'Ira', 'Natalia'];
// console.log(people);

// let auto = ['Skoda', 'Nissan', 'dsahbhs', 'shdgshy', 'shgfhs']
// console.log(auto);
//
        // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом

        // - будинок

//  let house = {
//    rooms: ['living room', 'bedroom', 'djhfdhj'],
//    parameters: {
//      floors: 3,
//      shdh: 250
//    },
//    country: 'Ukraine',
//    location: 'Lviv',
//    price: 450000
//    }
//    console.log(house);
//
//         // - водій
//
// let driver = {
//     hddsj : ['drive', 'dhfbx', 'dfhhd'],
//     parameters : {
//         age : 28,
//         name : 'Stefan'
//     },
//     home : 'Lviv',
//     hasWife : false,
//     hasChildren : false
//
// }
// console.log(driver);
//
//         // - іграшку
//
// let toy = {
//     dss : ['dhfhgds', 'dff', 'Domino'],
//     parameters : {
//         forAge : 5,
//         name : 'Brain Game'
//     },
//     madeIn : 'Lviv',
//     forChildren : true,
// }
// console.log(toy);
//
//         // - стіл
//
// let table = {
//     style : ['black', 'white'],
//     parameters : {
//         color : 'black',
//         name : 'computer desk'
//     },
//     madeIn : 'Germany',
//     forChildren : false,
// }
// console.log(table);
//
//         // - сумка
//
// let sumka = {
//     style : ['sdhs', 'scb'],
//     parameters : {
//         forAge : 20,
//         name : 'shhs'
//     },
//     madeIn : 'USA',
//     forChildren : false,
// }
// console.log(sumka);
//
//         // Дан массив:
//
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
//   ];
//
//         // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//         // - статус Андрія
// console.log(users[7].status);
//
//         // - статус Максима
//
// console.log(users[4].status);
//
//         // - ім'я передостаннього об'єкту
//
// console.log(users[2].name);
//
//         // - ім'я третього об'єкта
//
// console.log(users[2].name);
//
//         // - вік Олега
//
// console.log(users[6].age)
//
//         // - вік Олі
//
// console.log(users[3].age);
//
//         // - вік + ім'я 5го об'єкта
//
// console.log(users[4].age, users[4].name);
//
//         // - вік + сатус Анни
//
// console.log(users[5].age, users[5].status);
//
//         // Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//         // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//         // - отримує текст з параграфа з id "content"
//
// let content = document.getElementById('content');
// console.log(content.innerText);
//
//         // - отримує текст з блоку з id "rules"
//
// let rules = document.getElementById('rules');
// console.log(rules.innerText);
//
//         // - замініть текст параграфа з id 'content' на будь-який інший
//
// content.innerText = 'dhfhdd';
//
//         // - замініть текст параграфа з id 'rules' на будь-який інший
//
// rules.innerText = 'вуаоіі вав вак іларуоавтчрвмворв';
//
//         // - змініть кожному елементу колір фону на червоний
//
// let list = document.getElementsByTagName('ul')[0];
// content.style.backgroundColor = 'red';
// rules.style.backgroundColor = 'red';
// list.style.backgroundColor = 'red';
//
//         // - змініть кожному елементу колір тексту на синій
// content.style.color = 'blue';
// rules.style.color = 'blue';
// list.style.color = 'blue';
//
//         // - отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// console.log(rules.classList);
//
//         // - отримати всі елементи з класом fc_rules
// let fcRules = document.getElementsByClassName('fc_rules');
// console.log(fcRules);
//
//         //- поміняти колір тексту у всіх елементів fc_rules на червоний
//
// for (let element of fcRules) {
//   element.style.color = 'red';
// }







