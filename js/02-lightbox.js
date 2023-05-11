import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery_item">
        <a class="gallery_link" href= "${original}">
            <img
            class="gallery_image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`
).join('')

galleryEl.insertAdjacentHTML("beforeend", markup);
galleryEl.addEventListener("click", onClick);

function onClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    console.log(e.target);
}


const lightbox = new SimpleLightbox('.gallery_link', { captionsData: "alt", captionDelay: "250" });
