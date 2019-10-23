// ===========================1
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


// const categories = document.querySelector('#categories')
// const liItem = document.querySelectorAll('.item');
// liItem.forEach(el => {
//   console.log('Категории:', el.querySelector('h2').textContent);
//   console.log('Количество животных:', el.querySelectorAll("li").length);
// })
// =========================2
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// const ingredientsList = document.querySelector('#ingredients');
// const fragment = document.createDocumentFragment();
// const ingrList = (arr) => {
//   arr.forEach (el =>{
//     const li = document.createElement('li');
//     li.textContent = el;
//     // ingredientsList.append (li)
//     fragment.append (li)
//   })
//   ingredientsList.append (fragment)
// }
// ingrList(ingredients);


// ====================3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
//  Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
// const galleryList = document.querySelector('#gallery');
//   let str = "";
// const gallery = (arr) => {
//     arr.forEach (el => {
//       str += `<li><img src="${el.url}" alt="${el.url}" width="720px" height="420px"/></li>`
//     })
//     galleryList.insertAdjacentHTML("afterbegin", str);
// }
// gallery(images) ;

// =============================4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// let counterValue = document.querySelector('#value');
// let counterValue = 0;
// const startValue = document.querySelector('#value')
// console.log('startValue :', startValue);
// document
//   .querySelector('button[data-action="decrement"]')
//   .addEventListener('click',() => startValue.textContent = -- counterValue);
// document
//   .querySelector('button[data-action="increment"]')
//   .addEventListener('click',() => startValue.textContent = ++ counterValue)
// ===================================5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const inputText = document.querySelector('input#name-input')
// const spanText = document.querySelector('span#name-output')
// function getName(){
//   spanText.textContent = inputText.value
// }if(inputText === ''){
//   spanText.textContent = "Незнакомец";
// }
// inputText.addEventListener('input',getName)
// ===========================6
// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// const input = document.getElementById('validation-input')
// input.addEventListener('input',(el) =>{
//   if(input.value.length === 6){
//     input.classList.remove('invalid');
//     input.classList.add('valid');
//   }else{
//     input.classList.add('invalid')
//   }
// })
// ====================7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании 
// ползунка будет меняться размер текста.
// const input = document.querySelector('#font-size-control')
// const span = document.querySelector('#text')
// input.addEventListener("input",function() {
//   span.style.fontSize = input.value + 'px'           
// });
