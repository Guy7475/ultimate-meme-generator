'use strict';

var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [{
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
};


function getMeme() {
  
}

function setLineTxt(text) {
    gMeme.lines[0].txt = text
}

