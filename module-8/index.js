import gallery_item from './gallery-items.js';

const gallery = document.querySelector('.gallery')
const content = document.querySelector('.lightbox__content')
const light_img = document.querySelector('.lightbox___image')
const closeBtn = document.querySelector('button[data-action="close-lightbox"]')


function renderUsers(arrGallery,ref){
    const markup = arrGallery.reduce((acc,el) => {
      const li  = `
      <li class="gallery__item">
        <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" />
        <span class="gallery__icon">
          <i class="material-icons">zoom_out_map</i>
        </span>
      </li>`
      return acc +=li;
    },'')
    ref.insertAdjacentHTML('beforeend',markup)
    }
    renderUsers(gallery_item,gallery);
    
    const lightbox = document.querySelector('.lightbox');
    lightbox.addEventListener('click',function(event){
      console.dir(event.target);
      if(event.target.nodeName === "I" || event.target.nodeName === "BUTTON" || event.target === content){
      lightbox.classList.remove('is-open');
      }
    })
    gallery.addEventListener('click',function(e){
      if(e.target.nodeName === "IMG"){
        light_img.src = e.target.closest('.gallery__image').dataset.source;
        light_img.alt = e.target.closest('.gallery__image').alt;
      }
      lightbox.classList.add('is-open')
    })

    window.addEventListener('keydown',function(e){
      if(e.keyCode === 27  && lightbox.classList.contains('is-open')){
        lightbox.classList.remove('is-open');
      }
    })