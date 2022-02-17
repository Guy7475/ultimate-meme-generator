'use strict';
var gCanvWidth;
var gCanvheight;

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            xCor: 150,
            yCor: 50,
            txt: 'line 1',
            size: 30,
            align: 'center',
            fontColor: 'white',
            StrokeColor: 'black',
            font: 'Impact',
        },
        {
            xCor: 150,
            yCor: 275,
            txt: 'line 2',
            size: 30,
            align: 'center',
            fontColor: 'white',
            StrokeColor: 'black',
            font: 'Impact',
        },
    ]
};

var currLine = gMeme.lines[gMeme.selectedLineIdx];

function createLine() {
    const newLine = {
        xCor: 150,
        yCor: 200,
        txt: 'middle line',
        size: 30,
        align: 'center',
        fontColor: 'white',
        StrokeColor: 'black',
        font: 'Impact',
    };
    gMeme.lines.push(newLine);
    setCurrLine()
}

function getMeme() {
    drawImg(gImgs[gMeme.selectedImgId].id);
}

function drawImg(num) {
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        exFuncDrawText();
    };
    img.src = `./img/meme-imgs (square)/${num}.jpg`;
}

function exFuncDrawText() {
    gMeme.lines.map(line => {
        drawText(
            line.xCor,
            line.yCor,
            line.txt,
            line.size,
            line.align,
            line.fontColor,
            line.StrokeColor,
            line.font,
        );
    });
}

function drawText(x, y, text, size, align, fontColor, strokeColor, font) {
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = strokeColor;
    gCtx.fillStyle = fontColor;
    gCtx.font = `${size}px ${font}`;
    gCtx.textAlign = align;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function setLineYcor(val) {
    currLine.yCor += val * 3;
}

function setCurrLine() {
    gMeme.selectedLineIdx += 1;
    // gMeme.lines.sort((a,b) => a.yCor - b.yCor)
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0;
    }
    currLine = gMeme.lines[gMeme.selectedLineIdx];
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId - 1;
}

function deleteCurrLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    setCurrLine()
}

function setLineTxt(text) {
    currLine.txt = text;
}

function setLineSize(val) {
    currLine.size += val;
    console.log(currLine);
}

function setTextDirec(val) {
    currLine.align = val;
}

function setFontColor(color) {
    currLine.fontColor = color;
}

function setStrokeColor(color) {
    currLine.StrokeColor = color;
}

function setFont(font) {
    currLine.font = font;
}

function setCanvsSize(canvSize) {
    gCanvWidth = canvSize.width;
    gCanvheight = canvSize.height;
}



