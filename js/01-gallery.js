import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryItemsEl = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery_item">
        <a class="gallery_link" href= "${original}">
            <img
            class="gallery_image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            width= 100%
            />
        </a>
    </li>`
).join('')

const galleryEl = document.querySelector(".gallery")

galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl)

galleryEl.addEventListener("click", addItemClassList)

function addItemClassList(e) {
    e.preventDefault()
    if (!e.target.classList.contains("gallery_image")) {
        return;
    }
    console.log(e.target)


    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => document.addEventListener("keydown", onCloseModal),
            onClose: () => document.removeEventListener("keydown", onCloseModal),
        })

    instance.show();

    function onCloseModal(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
}