// codigo completo da calculadora 

let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    if (number === '0' && display.value === '0') return;
    if (display.value === '0' || display.value === '') {
        display.value = number;
    } else {
        display.value += number;
    }
    currentOperand = display.value;
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    display.value = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    display.value = computation;
    currentOperand = computation;
    previousOperand = '';
    operation = null;
}

function clearDisplay() {
    display.value = '';
    currentOperand = '';
    previousOperand = '';
    operation = null;
}
