const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let operator;
let secondNum;
let operated = true;

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
	if (operated) {
		displayValue = null;
		display.textContent = null;
		operated = false;
	}
	display.textContent += digit.textContent;
	displayValue = Number(display.textContent);
	if (display.textContent.includes('.')) {
		decimal.disabled = true;
	} else {
		decimal.disabled = false;
	}
}));

const buttons = document.querySelectorAll('.operator');
buttons.forEach(button => button.addEventListener('click', function(e) {
	if (firstNum) {
		secondNum = displayValue;
		displayValue = operate(operator, firstNum, secondNum);
		display.textContent = displayValue.toPrecision(10) * 10 / 10;
	}
	firstNum = displayValue;
	operator = e.target.id;
	operated = true;
	decimal.disabled = false;
}));

const equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', function(e) {
	secondNum = displayValue;
	displayValue = operate(operator, firstNum, secondNum);
	display.textContent = displayValue.toPrecision(10) * 10 / 10;
	firstNum = null;
	if (display.textContent.includes('.')) {
		decimal.disabled = true;
	}
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function(e) {
	firstNum = null;
	secondNum = null;
	operator = null;
	displayValue = null;
	display.textContent = 0;
	operated = true;
	decimal.disabled = false;
});

const plusMinus = document.querySelector('#plusMinus');
plusMinus.addEventListener('click', function (e) {
	displayValue *= -1;
	display.textContent = displayValue;
});

const decimal = document.querySelector('#decimal');

const percent = document.querySelector('#percent');
percent.addEventListener('click', function(e) {
	displayValue /= 100;
	display.textContent = displayValue;
});