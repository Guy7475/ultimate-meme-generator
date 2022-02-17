'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    // addEventListeners()
    renderGallery();
    addListeners()
    renderMeme();
}

function addListeners() {
    listenToFontColor()
    listenToStrokeColor()
}

function renderMeme() {
    getMeme();
}

function onTypeText(txt) {
    setLineTxt(txt);
    renderMeme();
}

function listenToFontColor() {
    let elColorPicker = document.querySelector("input[name=font-color]");
    elColorPicker.addEventListener("input", function () {
        let color = elColorPicker.value;
        
        setFontColor(color)
        renderMeme();
        
    }, false);
}

function listenToStrokeColor() {
    let elColorPicker = document.querySelector("input[name=stroke-color]");
    elColorPicker.addEventListener("input", function () {
        let color = elColorPicker.value;        
        setStrokeColor(color)
        renderMeme();
        
    }, false);
}

function onResizeLine(val) {
    setLineSize(val);
    renderMeme();
}

function onTextAlign(val) {
    setTextDirec(val);
    renderMeme();
}

function onFontSelection(font) {
    setFont(font)
    renderMeme()
}
