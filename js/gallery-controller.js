'use strict';

function renderGallery() {

    const images = getImagesForDisplay();
    let strHTML = images.map(image => {
        return `
        <img class="glry-img" src="${image.url}" alt="" onclick="onSelectedImg(this)">
        `;
    });
    let elGallery = document.querySelector('.gallery-grid');
    elGallery.innerHTML = strHTML.join('');
}

function onSelectedImg(img) {
    console.log('img:', img)
}

