'use strict'

var gCanvas 
var gCtx

function onInit() {
    gCanvas = document.querySelector('#my-canvas')
    gCtx = gCanvas.getContext('2d')
    renderMeme()
}

function renderMeme(){
    drawImg(2)
    
}

