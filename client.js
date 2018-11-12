console.log(' in JS');

$(document).ready(jQReady)

let clickCount = 0;

function buttonGenerator(clickCount) {
    let count = clickCount;
    // console.log('clickcount', conut);
    $(`#div${count}`).append(`<button id="swapButton${count}">Swap</button>
    <button id="deleteButton${count}">Delete</button>`)
}//end buttonGenerator function


function clickHandlers() {
    $('#generateButton').on('click', createDiv)
}//end clickHandlers function

function createDiv() {
    clickCount += 1;
    // console.log('clickCount', clickCount);
    $('#htmlBody').append(`<div id="div${clickCount}"></div>`);
    buttonGenerator(`${ clickCount }`);
}//end createDiv function

function jQReady() {
    console.log('$ up');
    clickHandlers();
}//end jQReady function

