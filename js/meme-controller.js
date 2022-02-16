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
    getMeme()
}

function onTypeText(txt) {
    setLineTxt(txt)
    renderMeme()
}

