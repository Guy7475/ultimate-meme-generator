'use strict';

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [{
        txt: 'Line 1 here',
        size: 20,
        align: 'left',
        color: 'red'
    }]
};


function getMeme() {
    drawImg(gImgs[gMeme.selectedImgId].id);
    let currMeme = gMeme.lines[0];
    setTimeout(() => {
        drawText(50, 50, currMeme.txt, currMeme.size, currMeme.color);
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

function drawText(x, y, text, size, color) {
    console.log(text);
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
    gCtx.lineWidth = 1;
    // gCtx.strokeStyle = 'blue';
    console.log('color:', color)
    gCtx.fillStyle = color;
    gCtx.font = `${size}px Arial`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}