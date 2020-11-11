//         // - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле        name  должно присутствовать только 1 раз в одном объекте )
let dog ={
  name : 'Tuzik',
  color: 'black',
  age : 5,
  owner : 'lorem'
}

let men = {
  name: 'Stefan',
  age: 28,
  surname: 'Chornii',
  hasPhone: true,
  hasWife: false,
  }

let car = {
  brand: 'Skoda',
  model: 'Octavia',
  year: 2008,
  type: 'sedan',
  color: 'green'
}

let flat = {
    s : 150,
    rooms : 2,
    hasGarage : false,
    hasBalcony : true,
    price : 50000
}

let book = {
    pages : 658,
    name : 'Tini vitru',
    since : 1917,
    autor : 'Carlos Safon',
    city : 'London'
}
//
//       // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и           внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills :        ['java','js'] , wife: { name: 'cherry' } };
//
 let house = {
   rooms: ['living room', 'bedroom', 'djhfdhj'],
   parameters: {
     floors: 3,
     shdh: 250
   },
   country: 'Ukraine',
   location: 'Lviv',
   price: 450000
   }
   console.log(house);

let driver = {
    hddsj : ['drive', 'dhfbx', 'dfhhd'],
    parameters : {
        age : 28,
        name : 'Stefan'
    },
    home : 'Lviv',
    hasWife : false,
    hasChildren : false

}

let toy = {
    dss : ['dhfhgds', 'dff', 'Domino'],
    parameters : {
        forAge : 5,
        name : 'Brain Game'
    },
    madeIn : 'Lviv',
    forChildren : true,
}

let table = {
    style : ['black', 'white'],
    parameters : {
        color : 'black',
        name : 'computer desk'
    },
    madeIn : 'Germany',
    forChildren : false,
}

let sumka = {
    style : ['sdhs', 'scb'],
    parameters : {
        forAge : 20,
        name : 'shhs'
    },
    madeIn : 'USA',
    forChildren : false,
}

        // - При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (const key in dog) {
    console.log(key);
}
for (const key in men) {
    console.log(key);
}
for (const key in car) {
    console.log(key);
}
for (const key in flat) {
    console.log(key);
}
for (const key in book) {
    console.log(key);
}
for (const key in house) {
    console.log(key);
}
for (const key in driver) {
    console.log(key);
}
for (const key in toy) {
    console.log(key);
}
for (const key in table) {
    console.log(key);
}
for (let key in sumka) {
  console.log(key);
}

        // - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
console.log(Object.keys(dog));
console.log(Object.keys(men));
console.log(Object.keys(car));
console.log(Object.keys(flat));
console.log(Object.keys(book));
console.log(Object.keys(house));
console.log(Object.keys(driver));
console.log(Object.keys(toy));
console.log(Object.keys(table));
console.log(Object.keys(sumka));

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
    console.log(cars[i]);
    i++;
if (i === cars.length) {
        i = 0;
        break;
    }
}
     while (i<cities.length) {
  console.log(cities[i]);
  i++;
       if (i === cities.length) {
        i = 0;
        break;
    }
     }
while (i < cars2.length) {
  console.log(cars2[i]);
  i++;
  if (i === cities.length) {
    i = 0;
    break;
  }
}

    // - проитерировать каждый массив из задания 5,6,7 при помощи for.

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);
}

// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
for (const car of cars) {
    console.log(car);
}
for (const city of cities) {
    console.log(city);
}
for (const car of cars2) {
    console.log(car);
}

        // - взять объекты из задания 1 и превратить каждый в json.

let newDog = JSON.stringify(dog);
let newMan = JSON.stringify(men);
let newCar = JSON.stringify(car);
let newFlat = JSON.stringify(flat);
let newBook = JSON.stringify(book);

        // - взять json из задания 11 и превратить их обратно в объекты.

newDog = JSON.parse(newDog);
newMan = JSON.parse(newMan);
newCar = JSON.parse(newCar);
newFlat = JSON.parse(newFlat);
newBook = JSON.parse(newBook);

        // - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .

for (let car of cars) {
  car = JSON.stringify(car);
 }

        // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for (let city of cities) {
  city = JSON.stringify(city);
}

        // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скопировать в новый массив.

let newCarsJSON = [];
for (let car of cars2) {
  let newCar = JSON.stringify(car);
  newCarsJSON.push(newCar);
}

       // - Создать массив пользователей. У каждого пользователя обязательно должно быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
let users1 = [
    {
        name: 'Stephan',
        age: 27,
            skills: [
            'lorem',
            'ipsum',
            'djdfhd'
        ]
    },
    {
        name: 'Olia',
        age: 23,
        skills: [
            'sjnj',
            'dfksj',
            'dfjie'
        ]
    },
    {
        name: 'Oksana',
        age: 26,
        skills: [
            'djfiew',
            'dnsjwk',
            'jdjsii'
        ]
    },
];
for (let user of users1) {
    console.log(user);
    for (let skill of user.skills) {
        console.log(skill);
    }
}

        // Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

let users2 = [
  {
    name: 'Stephan',
    age: 27,
    skills: [
      'lorem',
      'ipsum',
      'djdfhd'
    ]
  },
  {
    name: 'Olia',
    age: 23,
    skills: [
      'sjnj',
      'dfksj',
      'dfjie'
    ]
  },
  {
    name: 'Oksana',
    age: 26,
    skills: [
      'djfiew',
      'dnsjwk',
      'jdjsii'
    ]
  },
];

let skillsArr = [];
for (let user of users2) {
    console.log(user);
    for (let skill of user.skills) {
        skillsArr.push(skill);
    }
}
console.log(skillsArr);

        // - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

let users3 = [
  {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
  {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
  {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
  {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
  {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
  ];

for (let user of users3) {
    console.log(user);
    for (let skill of user.skills) {
        console.log(skill);
    }
}

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users4 = [
    {name: 'vasya', age: 31, address: 'Lviv', status: false, skills: ['java', 'js']},
    {name: 'petya', age: 30, address: 'Kyiv', status: true, skills: ['java', 'js', 'html']},
    {name: 'kolya', age: 29, address: 'Kharkiv', status: true, skills: ['mysql', ',mongo']},
    {name: 'olya', age: 28, address: 'Dnipro', status: false, skills: ['java', 'js']},
    {name: 'max', age: 30, address: 'Strui', status: true, skills: ['mysql', ',mongo']}
];
let usersAddresses = [];
for (let user of users4) {
    usersAddresses.push(user.address);
}
console.log(usersAddresses);
































