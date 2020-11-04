//         // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле        name  должно присутствовать только 1 раз в одном объекте )
// let dog ={
//   name : 'Tuzik',
//   color: 'black',
//   age : 5,
//   owner : 'lorem'
// }
//
// let men = {
//   name: 'Stefan',
//   age: 28,
//   surname: 'Chornii',
//   hasPhone: true,
//   hasWife: false,
//   }
//
// let car = {
//   brand: 'Skoda',
//   model: 'Octavia',
//   year: 2008,
//   type: 'sedan',
//   color: 'green'
// }
//
// let flat = {
//     s : 150,
//     rooms : 2,
//     hasGarage : false,
//     hasBalcony : true,
//     price : 50000
// }
//
// let book = {
//     pages : 658,
//     name : 'Tini vitru',
//     since : 1917,
//     autor : 'Carlos Safon',
//     city : 'London'
// }
//
//       // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и           внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills :        ['java','js'] , wife: { name: 'cherry' } };
//
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
//
//         // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
//
// for (const key in dog) {
//     console.log(key);
// }
// for (const key in men) {
//     console.log(key);
// }
// for (const key in car) {
//     console.log(key);
// }
// for (const key in flat) {
//     console.log(key);
// }
// for (const key in book) {
//     console.log(key);
// }
// for (const key in house) {
//     console.log(key);
// }
// for (const key in driver) {
//     console.log(key);
// }
// for (const key in toy) {
//     console.log(key);
// }
// for (const key in table) {
//     console.log(key);
// }
// for (let key in sumka) {
//   console.log(key);
// }
//
//         // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// console.log(Object.keys(dog));
// console.log(Object.keys(men));
// console.log(Object.keys(car));
// console.log(Object.keys(flat));
// console.log(Object.keys(book));
// console.log(Object.keys(house));
// console.log(Object.keys(driver));
// console.log(Object.keys(toy));
// console.log(Object.keys(table));
// console.log(Object.keys(sumka));

        // - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let cars = [
  {
    model: 'BMW',
    madeYear: 2005,
    power: 100,
    color: 'white',
  },
  {
    model: 'Peugeot',
    madeYear: 2012,
    power: 140,
    color: 'white',
  },
  {
    model: 'Ford',
    madeYear: 2015,
    power: 230,
    color: 'black',
  },
  {
    model: 'Skoda',
    madeYear: 2005,
    power: 90,
    color: 'silver',
  },
  {
    model: 'Tesla',
    madeYear: 2020,
    power: 190,
    color: 'red',
  },
  {
    model: 'Benz',
    madeYear: 2018,
    power: 280,
    color: 'gray',
  },
  {
    model: 'asdasd',
    madeYear: 2005,
    power: 100,
    color: 'blue',
  },
  {
    model: 'dfdhfd',
    madeYear: 2005,
    power: 100,
    color: 'lorem',
  },
  {
    model: 'fvkhud',
    madeYear: 2003,
    power: 150,
    color: 'sit',
  },
  {
    model: 'dajsde',
    madeYear: 2009,
    power: 70,
    color: 'green',
  },
];

        // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
  {
    name: 'Lviv',
    popylation: 800000,
    country: 'Ukraine',
    region: 'Lvivskiy'
  },
  {
    name: 'Kyiv',
    popylation: 2000000,
    country: 'Ukraine',
    region: 'Kyivsriy'
  },
  {
    name: 'New-York',
    popylation: 8000000,
    country: 'USA',
    region: 'Amerika'
  },
];

        // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars2 = [
  {
    model: 'X',
    madeYear: 2020,
    power: 500,
    color: 'black',
    driver: {
      name: 'Stefan',
      age: 27,
    }
  },
  {
    model: 'Model 3',
    madeYear: 2019,
    power: 350,
    color: 'white',
    driver: {
      name: 'Olia',
      age: 25,
    }
  },
  {
    model: 'Y',
    madeYear: 2020,
    power: 850,
    color: 'black',
    driver: {
      name: 'Lida',
      age: 30,
    }
  },
];

        // - проитерировать каждый массив из задания 5,6,7 при помощи while.

let i = 0;
while (i < cars.length) {
    console.log(cars + (i+1));
    i++;
}
