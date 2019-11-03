// =======================1/1
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// const start = document.querySelector('button[data-action="start"]')
// const stop = document.querySelector('button[data-action="stop"]')
// let mojo = null;
// stop.disabled=true;



// start.addEventListener('click',() =>{
//   stop.disabled=false;
//   start.disabled=true;
//   const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
//     mojo = setInterval(()=>{
//       document.body.style.background = colors[randomIntegerFromInterval(0,colors.length-1)];
//     },1000);
// });


// stop.addEventListener('click', () => {
//   stop.disabled=true;
//   start.disabled=false;
//     clearInterval(mojo);
// });

// ========================2/1
// const delay = ms => {
//   return new Promise(resolve => {
//       setTimeout(() => 
//           resolve(ms),ms);
//     });
//   }

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms
//


// ===================================2/2
// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];
// const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
//     return new Promise (resolve => resolve(updatedUsers))
//   };
// const logger = updatedUsers => console.table(updatedUsers);
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);
// ================================2/3
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//   return new Promise((resolve,reject) =>{
//     const delay = randomIntegerFromInterval(200, 500);
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
  
//       if (canProcess) {
//         resolve([transaction.id, delay]);
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//   })
// };

// const logSuccess = ([id, time]) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);
// ==============================================3/3
class CountdownTimer{
  constructor({selector,targetDate}){
  this.selector = selector;
  this.targetDate = targetDate;
  }
}

let timeOut = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2019'),
});
let deadline = timeOut.targetDate.getTime();

let endOfTime = setInterval(function(){
  const currentDate = new Date().getTime();
  let time = deadline - currentDate;
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);
document.querySelector('[data-value="days"]').innerHTML = days;
document.querySelector('[data-value="hours"]').innerHTML = hours;
document.querySelector('[data-value="mins"]').innerHTML = mins;
document.querySelector('[data-value="secs"]').innerHTML = secs;
},1000)