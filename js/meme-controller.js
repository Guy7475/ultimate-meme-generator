'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    // addEventListeners()
    renderGallery();
    listenToColor()
    renderMeme();
}

function renderMeme() {
    getMeme();
}

function onTypeText(txt) {
    setLineTxt(txt);
    renderMeme();
}

function listenToColor() {
    let elColorPicker = document.querySelector("input[name=color-picker]");
    elColorPicker.addEventListener("input", function () {
        let color = elColorPicker.value;
        
        setLineColor(color)
        renderMeme();
        
    }, false);
}

function onPickColor(color) {
    setLineColor(color)
    renderMeme();
}

function onResizeLine(val) {
    setLineSize(val);
    renderMeme();
}

function onTextAlign(val) {
    setTextDirec(val);
    renderMeme();
}

