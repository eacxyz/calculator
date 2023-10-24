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
	return operator(firstNum, secondNum);
}