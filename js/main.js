// select all html elements
const numberDisplay = document.getElementById('number-display');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const numberInput = document.getElementById('number-input');

let num = 0;

//make a function that takes input and adds it to numberDisplay with plus then changes innertext
function add(e) {
    e.preventDefault();
    num += parseInt(numberInput.value);
    numberDisplay.innerText = num;
    if (num >= 0) {
        numberDisplay.style.color = "black";
    }
}
//make function that takes input and subtracts it from numberDisplay with minus then changes innertext 
function subtract(e) {
    e.preventDefault();
    num -= parseInt(numberInput.value);
    numberDisplay.innerText = num;
    if (num < 0) {
        numberDisplay.style.color = "red";
    }
};
//make an event listener for the plus click - call add function in it

plusBtn.addEventListener('click', (e) => {
    add(e);
    console.log(numberInput)
    console.log(numberDisplay)
});
//make an event listener for minus click - call minus function in it
minusBtn.addEventListener('click', (e) => {
    subtract(e);
    console.log(numberInput)
    console.log(numberDisplay)
});


