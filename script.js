// function add(...args) {
// 	let sum = 0;
// 	for (let arg of args) sum += arg;
// 	return sum;
// }

// function subtract() {
// 	let diff = arguments[0];
// 	for (let i = 1; i < arguments.length; i++) {
// 		diff -= arguments[i];
// 	}
// 	return diff;
// }

// function multiply(...args) {
// 	let prod = 1;
// 	for (let arg of args) prod *= arg;
// 	return prod;
// }

// function divide() {
// 	let quotient = arguments[0];
// 	for (let i = 1; i < arguments.length; i++) {
// 		quotient /= arguments[i];
// 	}
// 	return quotient;
// }

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let operator;
let secondNum;

function operate(operator, firstNum, secondNum) {
	switch (operator) {
		case 'add':
			return add(firstNum, secondNum);
			break;
		case 'subtract':
			return subtract(firstNum, secondNum);
			break;
		case 'multiply':
			return multiply(firstNum, secondNum);
			break;
		case 'divide':
			return divide(firstNum, secondNum);
	}
}

const display = document.querySelector('#display');
let displayValue;

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => digit.addEventListener('click', function(e) {
	display.textContent += digit.textContent;
	displayValue = Number(display.textContent);
}));

const buttons = document.querySelectorAll('.operator');
buttons.forEach(button => button.addEventListener('click', function(e) {
	firstNum = displayValue;
	display.textContent = '';
	operator = e.target.id;
}));

const equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', function(e) {
	secondNum = displayValue;
	displayValue = operate(operator, firstNum, secondNum);
	display.textContent = displayValue;
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function(e) {
	firstNum = null;
	secondNum = null;
	operator = null;
	displayValue = null;
	display.textContent = null;
})