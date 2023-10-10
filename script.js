function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(operator, number1, number2) {
    console.log('this is where i would operate');
    if (operator == '+') {
        solution = add(number1, number2)
    } else if (operator == '-') {
        solution = subtract(number1, number2);
    } else if (operator == '*') {
        solution = multiply(number1, number2);
    } else {
        solution = divide(number1, number2);
    }

}

function updateDisplay() {
    display.textContent = solution;
}
function storeNumber(e) {
    if (operator == "") {
        if (e.target.textContent == '.' && num1 == "") {
            num1 += '0' + '.';
        } else {
            num1 += e.target.textContent;
        }
        display.textContent = num1;

    } else {
        if (e.target.textContent == '.' && num2 == "") {
            num2 += '0' + '.';
        } else {
            num2 += e.target.textContent;
        }
        display.textContent = num2;
    }
}

let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let num1 = "";
let num2 = "";
let operator = "";
let solution = "";
const operators = ['+', '-', '*', '/'];


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e.target.textContent);
        if (!isNaN(e.target.textContent) || e.target.textContent == '.') {
            storeNumber(e);
        } else if (e.target.textContent == 'clear') {
            display.textContent = "0";
            num1 = "";
            num2 = "";
            operator = "";
            solution = "";
        } else if (operators.includes(e.target.textContent)) {
            operator = e.target.textContent;
            operator = e.target.textContent;
        } else if (e.target.textContent == '=') {
            operate(operator, Number(num1), Number(num2));
            updateDisplay();

        }
    });
});