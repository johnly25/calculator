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
    if (operator == '+') {
        return add(number1, number2);
    } if (operator == '-') {
        return subtract(number1, number2);
    } if (operator == 'x') {
        return multiply(number1, number2);
    } else {
        return divide(number1, number2);
    }
}

function storeNumber(e, num) {
    console.log(e.target.textContent);
    if (e.target.textContent == '.' && !num.includes('.')) {
        if (num == "") {
            return '0' + e.target.textContent;
        }
        return e.target.textContent;
    } else if (e.target.textContent == '0') {
        if(num == '0') {
            return '';
        } else {
            return e.target.textContent;
        }
    } else if (!e.target.textContent.includes('.')) {
        return e.target.textContent;
    }
    return '';
}

function isNumberOrPeriod(e) {
    if (!isNaN(e.target.textContent) || e.target.textContent == '.') {
        return true;
    }
    return false;
}

let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let num1 = "";
let num2 = "";
let operator = "";
let solution = "";
const operators = ['+', '-', 'x', '/'];

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        if (isNumberOrPeriod(e) && operator == "" && solution == "") {
            num1 += storeNumber(e, num1);
            display.textContent = num1;
        } else if (isNumberOrPeriod(e) && operator == "" && solution != "") {
            num1 = "";
            num1 += storeNumber(e, num1);
            display.textContent = num1;
        } else if (e.target.textContent == 'AC') {
            num1 = "";
            num2 = "";
            operator = "";
            solution = "";
            display.textContent = '0';
        } else if (operators.includes(e.target.textContent) && num1 != '' && num2 == '') {
            operator = e.target.textContent;
        } else if (operator != "" && isNumberOrPeriod(e)) {
            num2 += storeNumber(e, num2);
            display.textContent = num2;
        } else if (e.target.textContent == '=' && num2 != '') {
            solution = operate(operator, Number(num1), Number(num2));
            operator = "";
            num1 = solution;
            num2 = "";
            display.textContent = solution;
            solution == "";
        } else if (num1 != '' && num2 != '' && operator != '') {
            solution = operate(operator, Number(num1), Number(num2));
            num1 = solution;
            num2 = '';
            operator = e.target.textContent;
            display.textContent = solution;
        }
    });
});