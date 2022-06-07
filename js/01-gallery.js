import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryItemsList(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imagesMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGalleryItemsList(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
           <div class="gallery__item">
             <a href="${original}" class="gallery__link">
              <img 
              class="gallery__image"
              src = "${preview}"
              data-source = "${original}"
              alt = "${description}"
              />
             </a>
           </div>
        `;
    })
    .join('');

}

function onGalleryContainerClick(e) {
    e.preventDefault();
    if(!e.target.classList.contains('gallery__image')) {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

instance.show()

if(instance.visible) {
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            instance.close();
    }
    
    }, {once: true})
}

};


console.log(galleryItems);
