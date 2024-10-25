//VARIABLES FOR EVERY PART
let firstNumber = 0;
let secondNumber = 0;
let operator = 0;

//FUNCTIONS FOR BASIC MATH OPERATORS
function adding(a, b) {
    screen.textContent = parseInt(a) + parseInt(b)
}

function subtracting(a, b) {
    screen.textContent = parseInt(a) - parseInt(b)
}

function multiplying(a, b) {
    screen.textContent = parseInt(a) * parseInt(b)
}

function dividing(a, b) {
    screen.textContent = parseInt(a) / parseInt(b)
}

//OPERATE FUNCTION
function operate(firstNumber, secondNumber, operator) {
    if (operator == '+') {
        return adding(firstNumber, secondNumber);
    } else if (operator == '-') {
        return subtracting(firstNumber, secondNumber);
    } else if (operator == '*') {
        return multiplying(firstNumber, secondNumber);
    } else if (operator == '/') {
        return dividing(firstNumber, secondNumber);
    }
}

const screen = document.querySelector('.bottom-right');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id < 10 && button.id >= 0 && screen.textContent != '+' &&
                                                screen.textContent != '-' &&
                                                screen.textContent != '/' &&
                                                screen.textContent != '*'
        ) {
            screen.textContent = screen.textContent + button.id;
        } else if (button.id == 'c') {
            screen.textContent = '';
        } else if (button.id == '+' || button.id == '-' || button.id == '*' || button.id == '/') {
            firstNumber = screen.textContent;
            screen.textContent = button.id;
        } else if (screen.textContent == '+' ||
            screen.textContent == '-' ||
            screen.textContent == '/' ||
            screen.textContent == '*' &&
            button.id < 10 && button.id >= 0) {
            operator = screen.textContent;
            screen.textContent = button.id;
        } else if (button.id == '=') {
            secondNumber = screen.textContent
            operate(firstNumber,secondNumber, operator)
        }
    })
})