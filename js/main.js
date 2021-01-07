// select all html elements
let numberDisplay = document.getElementById('number-display');
let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let numberInput = document.getElementById('number-input');


// make numberDisplay 0 on page load.
document.addEventListener('DOMContentLoaded', (e => {
    numberDisplay.innerText = "0"
}));


//make a function that takes input and adds it to numberDisplay with plus then changes innertext
function add() {
    var one = numberInput;
    var two = parseInt(numberDisplay);
    numberDisplay.innerText = one+two;
}
//make function that takes input and subtracts it from numberDisplay with minus then changes innertext 
function subtract() {
    var one = parseInt(numberInput)
    var two = parseInt(numberDisplay)
    numberDisplay.innerText = two-one;
}
//make an event listener for the plus click - call add function in it

plusBtn.addEventListener('click', (event => {
    add();
}));
//make an event listener for minus click - call minus function in it
minusBtn.addEventListener('click', (event => {
    subtract();
    if (numberDisplay < 0) {
        numberDisplay.style.color = red
    }
}));
