'use strict';

var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    // addEventListeners()
    canvasSize()
    renderGallery();
    addListeners();
    renderMeme();
}

function addListeners() {
    listenToText();
    listenToFontColor();
    listenToStrokeColor();
}

function renderMeme() {
    getMeme();
}

function onTypeText(txt) {
    // setLineTxt(txt);
    // renderMeme();
}

function listenToText() {
    let elText = document.querySelector("input[name=text-box]");
    elText.addEventListener("input", function () {
        let txt = elText.value;
        console.log(txt);
        setLineTxt(txt);
        renderMeme();

    }, false);
}
function listenToFontColor() {
    let elColorPicker = document.querySelector("input[name=font-color]");
    elColorPicker.addEventListener("input", function () {
        let color = elColorPicker.value;

        setFontColor(color);
        renderMeme();

    }, false);
}

function listenToStrokeColor() {
    let elColorPicker = document.querySelector("input[name=stroke-color]");
    elColorPicker.addEventListener("input", function () {
        let color = elColorPicker.value;
        setStrokeColor(color);
        renderMeme();

    }, false);
}



// TODO - compress down to one funtion with swith case on service
function onSwitchLine() {
    setCurrLine()
    console.log(currLine);
}

function onChangingYcor(val) {
    setLineYcor(val)
    renderMeme()
}

function onAddLine() {
    createLine();
    renderMeme();
}

function onDeleteLine() {
    deleteCurrLine()
    renderMeme()
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
    setFont(font);
    renderMeme();
}

function canvasSize() {
    const canvas = document.querySelector('#my-canvas');
    let canvSize = {
        width: canvas.width,
        height: canvas.height
    }
    setCanvsSize(canvSize)
}

function resizeCanvas() {
    gCanvas.height = document.querySelector('.canvas-container').offsetHeight;
    gCanvas.width = document.body.offsetWidth;
    //TODO restore canvas after resizing
  }