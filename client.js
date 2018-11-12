console.log(' in JS');

$(document).ready(jQReady)

let clickCount = 0;

function buttonGenerator(clickCount) {
    let count = clickCount;
    // console.log('clickcount', conut);
    $(`#div${count}`).append(`<button class="swapButton" id="swapButton${count}">Swap</button>
    <button class="deleteButton" id="deleteButton${count}">Delete</button>`)
    $(`.swapButton`).on('click', colourSwap);//this runs as many times as there are generated divs.  WHY?
    $(`.deleteButton`).on('click', deleteDiv);//this runs as many times as there are generated divs.  WHY?
}//end buttonGenerator function

function colourSwap() {
    console.log('in colourSwap' );
}//end colourSwap function

function clickHandlers() {
    $('#generateButton').on('click', createDiv);
}//end clickHandlers function

function createDiv() {
    clickCount += 1;
    // console.log('clickCount', clickCount);
    $('#htmlBody').append(`<div class="generated" id="div${clickCount}"></div>`);
    buttonGenerator(`${ clickCount }`);
}//end createDiv function

function deleteDiv() {
    console.log('in deleteDiv');
}//end deleteDiv function

function jQReady() {
    console.log('$ up');
    clickHandlers();
}//end jQReady function

