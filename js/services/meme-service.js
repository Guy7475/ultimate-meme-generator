'use strict';
var gCanvWidth;
var gCanvheight;

var currLine

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            xCor: 150,
            yCor: 50,
            txt: 'New line',
            size: 30,
            align: 'center',
            fontColor: 'white',
            StrokeColor: 'black',
            font: 'Impact',
        },
        {
            xCor: 150,
            yCor: 275,
            txt: 'New line',
            size: 30,
            align: 'center',
            fontColor: 'white',
            StrokeColor: 'black',
            font: 'Impact',
        },
    ]
};

// function createLine() {
//     const newLine = {
//         txt: 'New line',
//         size: 30,
//         align: 'right',
//         fontColor: 'white',
//         StrokeColor: 'black',
//         font: 'Impact',
//     }
//     gMeme.lines.push(newLine)
//     console.log(randY);
// }

function toggleLineIdx() {
    
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
    // let currMeme = gMeme.lines[0];
    //     drawText(
    //         currMeme.xCor, 
    //         currMeme.yCor,
    //         currMeme.txt,
    //         currMeme.size,
    //         currMeme.align,
    //         currMeme.fontColor,
    //         currMeme.StrokeColor,
    //         currMeme.font,
    //     );
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

function setImg(imgId) {
    gMeme.selectedImgId = imgId - 1;
}

function setLineTxt(text) {
    gMeme.lines[0].txt = text;
}

function setLineSize(val) {
    gMeme.lines[0].size += val;
}

function setTextDirec(val) {
    gMeme.lines[0].align = val;
    console.log(gMeme.lines[0].align);
}

function setFontColor(color) {
    gMeme.lines[0].fontColor = color;
}

function setStrokeColor(color) {
    gMeme.lines[0].StrokeColor = color;
}

function setFont(font) {
    gMeme.lines[0].font = font;
}

function setCanvsSize(canvSize) {
    gCanvWidth = canvSize.width;
    gCanvheight = canvSize.height;
}



