// ===============================================#1

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
//     user.mood = 'happy';
//     user.hobby = 'javascript';
//     user.premium = 'false';

//   const keys = Object.keys(user)
//   console.log('keys :', keys);
//   for(const key of keys){
//   }
// console.log('user :', user);


// =====================================#2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
// Функция возвращает число - количество свойств.


// function countProps(obj) {
//    const keys = Object.keys(obj)

//    return keys.length
// }

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


// ================================================#3
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
// и возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в 
// формате "имя":"кол-во задач".


// function findBestEmployee(employees){
//      const keys = Object.keys(employees)
//      let bestEmployee = 0;
//      let name;
//      for(const key of keys){
//      if(employees[key] > bestEmployee){
//        bestEmployee = employees[key];
//        name = key;
//      }
//      }
//      return name;
//   }
  
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux



// ====================================================#4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
//  Функция считает общую сумму запрплаты работников и возращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".


// function countTotalSalary(employees){
//   let totalCount = 0;
//   const salaries = Object.values(employees);

//   for(const salary of salaries){
//     totalCount += salary;
//   }
//   return totalCount
// }


// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400



// ===============================================#5
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя ключа. 
// Возвращает массив значений определенного поля prop из каждого объекта в массиве.


// function getAllPropValues(arr, prop){
//   const items = [];
//   for(const item of arr) {
//     if(prop in item){
//       items.push(item[prop])
//     }
//   }
//   return items
// }
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []



// ====================================================#6
// Напиши функцию calculateTotalPrice(arr, productName), которая получает массив объектов
//  и имя продукта (значение свойства name). 
// Возвращает общую стоимость продукта (цена * количество).





// function calculateTotalPrice(arr, productName) {
//   const totalPrice = 0;
//   for (const el of arr){
//     if (el.name === productName)
//     return el.price * el.quantity
//   }

// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];


// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
