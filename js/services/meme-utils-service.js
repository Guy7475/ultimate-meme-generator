'use strict';

function drawImg(num) {
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText('Ultimate Meme Genrator', 50, 50)    
    };
    img.src = `../img/meme-imgs (square)/${num}.jpg`;
}

function drawText(text, x, y) {
    console.log(text);
    // gCtx.font = '48px serif';
    // gCtx.fillText(text, x, y);
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = 'blue';
    gCtx.fillStyle = 'yellow';
    gCtx.font = '20px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}
