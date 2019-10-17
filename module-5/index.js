// ===========================1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. 
// В prototype функции-конструктора добавь метод getInfo(), 
// который выводит в консоль значения полей login и email объекта который его вызвал.

// const Account = function (login , email){
//     this.login = login;
//     this.email = email;
// }
// Account.prototype.getInfo = function(){
//     console.log(`Login: ${this.login}, Email: ${this.email}`);
// }


// console.log(Account.prototype.getInfo); // function

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// ============================2
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
// class User {
// constructor({name,age,followers}){
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
// }
//     getInfo(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     }

// }
// const mango = new User({ name: 'Mango', age: 2, followers: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({ name: 'Poly', age: 3, followers: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ==============================3
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// class Storage{
//     constructor(items){
//         this.items = items;
//     }
//     getItems(){
//         return storage;
//     }
//     addItem(item){
//         this.items.push(item);
//     }
//     removeItem(item){
//         storage.items.splice( storage.items.indexOf('Пролонгер'), 1 );
//     }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);


// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// ============================4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// class StringBuilder{
//     constructor(str){
//         this._value = str;
//     }
//     get value(){
//         return this._value;
//     }
//     append(str){
//         this._value = `${this._value + str}`;
//     }
//     prepend(str){
//         this._value = `${str + this._value}`;
        
//     }
//     pad(str){
//        this._value = `${str + this._value + str}`
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='


// ==============5
// class Car {
//     static getSpecs(car){
//       const {maxSpeed, speed, isOn, distance,price} = car ;
//       console.log(`maxSpeed : ${maxSpeed} speed : ${speed}, isOn: ${isOn},distance: ${distance},price: ${price}`);
//     }
//     constructor ({maxSpeed, price}) {
//       this._price = price;
//       this.maxSpeed = maxSpeed;
//       this.speed = 0;
//       this.distance = 0;
//       this.isOn = false ;
//     }
//     get price() {
//       return this._price
//     }
//     set price(price){
//       this._price = price;
//     }
//     turnOn(isOn) {
//       this.isOn = true;
//     }
//     turnOff(isOn) {
//       this.isOn = false;
//       this.speed = 0;
//     }
//     accelerate(value) {
//       if(this.speed + value <= this.maxSpeed){
//         this.speed = this.speed + value;
//      }
//       }
//       decelerate(value) {
//         if(this.speed - value >= 0){
//           this.speed -= value;
//       }
//     }
//     drive(hours){
//       if(this.isOn){
//         this.distance = this.speed * hours;
//       }
//     }
//   }
//   const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();
  
//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000