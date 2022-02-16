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

}

function setLineTxt(text) {
    gMeme.lines[0].txt = text;
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId - 1;
}

