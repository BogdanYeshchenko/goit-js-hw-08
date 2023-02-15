// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const imageGalleryHtml = galleryItems
  .map(
    el =>
      `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>`
  )
  .join('');

galleryEl.innerHTML = imageGalleryHtml;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
