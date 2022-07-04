import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galleryList =  galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__card"><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`;
    }).join('');
;

gallery.insertAdjacentHTML('afterbegin', galleryList);

const lightBox = new simpleLightbox('.gallery__item', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

