import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
const divGallery = document.querySelector('div[class="gallery"]');
divGallery.innerHTML = galleryItems
  .map(
    e => `<a class="gallery__item" href="${e.original}">
  <img class="gallery__image" src="${e.preview}" alt="${e.description}" /></a>`
  )
  .join('');
var lightbox = new SimpleLightbox('.gallery .gallery__item', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
