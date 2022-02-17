'use strict';

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Line 1 here',
        size: 30,
        align: 'right',
        color: 'white'
    }]
};


function getMeme() {
    drawImg(gImgs[gMeme.selectedImgId].id);
    let currMeme = gMeme.lines[0];
    setTimeout(() => {
        drawText(150, 50, currMeme.txt, currMeme.size, currMeme.align, currMeme.color);
    }, 10);
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId - 1;
}

function setLineTxt(text) {
    gMeme.lines[0].txt = text;
}

function setLineSize(val) {
    gMeme.lines[0].size += val
}

function setTextDirec(val) {
    gMeme.lines[0].align = val
    console.log(gMeme.lines[0].align);
}

function setLineColor(color) {
    gMeme.lines[0].color = color;
}


function drawImg(num) {
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    };
    img.src = `./img/meme-imgs (square)/${num}.jpg`;
}

function drawText(x, y, text, size, align, color) {
    // console.log(text);
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = color;
    gCtx.font = `${size}px Impact`;
    gCtx.textAlign = align
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}