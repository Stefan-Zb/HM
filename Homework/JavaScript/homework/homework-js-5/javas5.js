        //- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм           двигуна

// let  car = {
//   model: 'Focus',
//   made: 'ford',
//   year: 2015,
//   maxSpeed: 250,
//   engine: 1.6,
//       // додати в об'єкт функції:
//       // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//   drive: function() {
//     console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' за годину')
//   },
//   // -- info () - яка виводить всю інформацію про автомобіль
//   info: function () {
// console.log(`model:${this.model} made:${this.made} year:${this.year} maxSpeed:${this.maxSpeed} engine:${this.engine}`);
//
//   },
//         // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   increaseMaxSpeed: function (newSpeed) {
//       this.maxSpeed += newSpeed
//   },
//         // -- changeYear (newValue) - змінює рік випуску на значення newValue
//   changeYear: function (newValue) {
//     this.year = newValue;
//   },
//         // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в            поточний об'єкт car
//   addDriver: function (driver){
//     this.driver = driver;
//   }
// };
// car.increaseMaxSpeed (100);
// car.changeYear(2021);
// car.addDriver({name: 'Stefan', age: 27});
// car.drive();
// car.info();
// console.log(car);



        // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,        рік випуску, максимальна швидкість, об'єм двигуна.

// function Car(model, made, year, maxSpeed, engine) {
// this.model = model;
// this.made = made;
// this.year = year;
// this.maxSpeed = maxSpeed;
// this.engine = engine;
//         // додати в об'єкт функції:
//         // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//   this.drive = function() {
//     console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' за годину')
//   };
//       // -- info () - яка виводить всю інформацію про автомобіль
//   this.info = function () {
//     console.log(`model:${this.model} made:${this.made} year:${this.year} maxSpeed:${this.maxSpeed} engine:${this.engine}`);
//
//   };
//       // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed
//   };
//       // -- changeYear (newValue) - змінює рік випуску на значення newValue
//   this.changeYear = function (newValue) {
//     this.year = newValue;
//   };
//       // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в             поточний об'єкт car
//   this.addDriver = function (driver){
//     this.driver = driver;
//   }
// };
// let car = new Car('Focus', 'Ford', 2015, 250, 1.6)
// car.increaseMaxSpeed (100);
// car.changeYear(2021);
// car.addDriver({name: 'Stefan', age: 27});
// car.drive();
// car.info();
// console.log(car);


  //      // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car {
//   constructor(model, made, year, maxSpeed, engine) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//   }
//   drive() {
//     console.log('Їдемо зі швидкістю ' + this.maxSpeed + ' за годину')
//   };
//   // -- info () - яка виводить всю інформацію про автомобіль
//   info() {
//     console.log(`model:${this.model} made:${this.made} year:${this.year} maxSpeed:${this.maxSpeed} engine:${this.engine}`);
//   };
//   // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   increaseMaxSpeed(newSpeed) {
//     this.maxSpeed += newSpeed
//   };
//   // -- changeYear (newValue) - змінює рік випуску на значення newValue
//   changeYear(newValue) {
//     this.year = newValue;
//   };
//   // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в             поточний об'єкт car
//   addDriver(driver){
//     this.driver = driver;
//   }
// };
// let car = new Car('Focus', 'Ford', 2015, 250, 1.6)
// car.increaseMaxSpeed (100);
// car.changeYear(2021);
// car.addDriver({name: 'Stefan', age: 27});
// car.drive();
// car.info();
// console.log(car);


        //     -створити класс попелюшка з полями ім'я, вік, розмір ноги
        // --Створити 10 попелюшок , покласти їх в масив
        // --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
        // -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

        // class Cinderella {
        //     constructor(name, age, legSize) {
        //         this.name = name;
        //         this.age = age;
        //         this.legSize = legSize;
        //     }
        // }
        //
        // const popelArr = [
        //   new Cinderella('Olena', 22, 36),
        //   new Cinderella('Ira', 26, 38),
        //   new Cinderella('Oksana', 30, 37),
        //   new Cinderella('Olia', 19, 36),
        //   new Cinderella('Lida', 25, 39),
        //   new Cinderella('Anastasia', 24, 38),
        //   new Cinderella('Natalia', 29, 40),
        //   new Cinderella('Ruslana', 18, 39),
        //   new Cinderella('Yulia', 21, 38),
        //   new Cinderella('Lilia', 18, 39)
        // ];
        //
        // class Prince {
        //     constructor(name, age, shoesSize) {
        //         this.name = name;
        //         this.age = age;
        //         this.herShoeSize = shoesSize;
        //     }
        // }
        //
        // const heir = new Prince('Stefan', 27, 37);
        //
        // for (let Cindi of popelArr) {
        //     if (Cindi.legSize === heir.herShoeSize) {
        //         console.log(`Цю туфельку загубила ${Cindi.name})))`);
        //     }
        // }
