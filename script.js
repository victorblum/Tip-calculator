
let buttonCount = document.querySelector('.form__button_main');
let buttonReset = document.querySelector('.form__button');
let formInput = document.querySelectorAll('.form__input');

let resultTip = document.querySelector('.results__value_tip');
let resultTotal = document.querySelector('.results__value_total');

let engButton = document.querySelector('.up__button_eng');

buttonReset.addEventListener('click', clickButtonReset);
buttonCount.addEventListener('click', clickButtonCount);
engButton.addEventListener('click', clickEngButton);

function clickButtonCount() {
    let tipResult = (+formInput[0].value * (+formInput[1].value / 100)) / +formInput[2].value;
    let totalResult = (+formInput[0].value + (+formInput[0].value * (+formInput[1].value / 100))) / +formInput[2].value; 
        resultTip.innerText = `${Math.round(tipResult)}₽`;
        resultTotal.innerText = `${Math.round(totalResult)}₽`;
    }    

function clickButtonReset() {
    formInput[0].value = null;
    formInput[1].value = null;
    formInput[2].value = null;
    resultTip.innerText = '___₽';
    resultTotal.innerText = '___₽';
}

function clickEngButton() {
    window.location.href = 'index ENG.html';
}