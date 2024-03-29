import users from './users.js';
console.log('users :', users);


// // =================================1
// const getUserNames = users => {
//     const names = users.map(user => user.name);
//     return names;
//   };
  
//   console.log(getUserNames(users));
//   // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


  //  ==================================2
//   Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color);

// };

// console.log(getUsersWithEyeColor(users, 'blue')); 
// // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ========================3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   return users
//   .filter(user => user.gender === gender)
//   .map(user => user.name);
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ================4
// Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//  return users.filter(user => !user.isActive);
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ================5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// ============6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//     return users.filter(user => user.age > min && user.age < max);
  

// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
// ==================7
// // Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   return users.reduce((sum,user) =>sum + user.balance,0)
// };

// console.log(calculateTotalBalance(users)); // 20916
// ============8
// Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter (user =>user.friends.includes (friendName)).map (user => user.name);
// };


// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//============9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//     return users.sort(function(a, b) {
//         if (a.friends.length > b.friends.length) {
//           return 1;
//         }
//         if (a.friends.length < b.friends.length) {
//           return -1;
//         }
//         return 0;
//       })
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// ===================10
// const getUniqueSkills = (arr) => {
//   const skills = [];
//   arr.forEach(element =>{
//     skills.push(...element.skills)
//   });
//   const unique = [];
//   skills.forEach(el => {!unique.includes(el) && unique.push(el)});
//   console.log('unique :', unique);
// }
// getUniqueSkills(users);

const getUniqueSkills = (arr) => {
const unique = arr.reduce ((acc,el) =>{
  acc.push(...el.skills);
  return acc;
},[])
.reduce((acc,el) => {
  !acc.includes(el) && acc.push(el);
  return acc;
},[])
.sort();
console.log('unique :', unique);
}

getUniqueSkills(users);
