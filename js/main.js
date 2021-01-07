// select all html elements
let numberDisplay = document.getElementById('number-display')
let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')
let numberInput = document.getElementById('number-input')


//make numberDisplay 0 on page load.
document.addEventListener('DOMContentLoaded', (e => {
    numberDisplay.innerText = "0"
}));


//make an event listener for the plus click - call add function in it
plusBtn.addEventListener('click', (event => {
    console.log('clicked plus')
}));
//make an event listener for minus click - call minus function in it
minusBtn.addEventListener('click', (event => {
    console.log('clicked minus')
}));


//make a function that takes input and adds it to numberDisplay with plus then changes innertext
//make function that takes input and subtracts it from numberDisplay with minus then changes innertext 