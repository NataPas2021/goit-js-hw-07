import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryItemsList(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imagesMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGalleryItemsList(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
           <a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
           </a>
        `;
    })
    .join('');

}

function onGalleryContainerClick(e) {
    e.preventDefault();
    if(!e.target.classList.contains('gallery__image')) {
        return;
    }
    
    const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',
    captionDelay: 250});
    lightbox.on('show.simplelightbox', function () {
       
    });
    ;



};

console.log(galleryItems);
