import menu from './menu.json';
import  template  from '../templates/menu.hbs';

const readyCode = template(menu);
const ul = document.querySelector('#menu');
ul.insertAdjacentHTML('afterbegin', readyCode)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.body;
const switchLabel = document.querySelector('#theme-switch-control')

switchLabel.addEventListener("click", change);

function change(e){
  if(e.target.checked){
    body.classList.add(`${Theme.DARK}`) || body.classList.remove(`${Theme.LIGHT}`);
    localStorage.setItem('theme', `${Theme.DARK}`);
  }else{
    body.classList.add(`${Theme.LIGHT}`) || body.classList.remove(`${Theme.DARK}`);
    localStorage.setItem('theme',`${Theme.LIGHT}`);
  }
}

if(localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', Theme.LIGHT);
}

if (localStorage.getItem('theme') === Theme.DARK){
  body.classList.add(`${Theme.DARK}`)
  switchLabel.checked=true;
}
if (localStorage.getItem('theme') === Theme.LIGHT){
  body.classList.add(`${Theme.LIGHT}`)
  switchLabel.checked=false;
}




