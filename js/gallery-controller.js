'use strict';

function renderGallery() {

    const images = getImagesForDisplay();
    let strHTML = images.map(image => {
        return `
        <img class="glry-img" data-id="${image.id}" src="${image.url}" alt="" onclick="onImgSelect(${image.id})">
        `;
    });
    let elGallery = document.querySelector('.gallery-grid');
    elGallery.innerHTML = strHTML.join('');
}

function onImgSelect(imgId) {
    let elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'none'
    setImg(imgId)
    renderMeme()
}

