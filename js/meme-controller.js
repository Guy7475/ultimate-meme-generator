'use strict'

var gCanvas 
var gCtx

function onInit() {
    gCanvas = document.querySelector('#my-canvas')
    gCtx = gCanvas.getContext('2d')
    // addEventListeners()
    renderGallery()
    renderMeme()
}

function renderMeme() {
    drawImg(gImgs[gMeme.selectedImgId].id)
    setTimeout(() => {
        drawText(gMeme.lines[0].txt, 50, 50)
    }, 10);
}

function onTypeText(txt) {
    setLineTxt(txt)
    renderMeme()
}

