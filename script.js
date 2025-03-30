// DOM elements
const screen = grabElement("screen");
const clear = grabElement("clear");
clear.addEventListener('click', Reset);
const toggleSign = grabElement("toggleSign");
toggleSign.addEventListener('click', () =>
{
    if (currentState.firstOperand == undefined)
        return;

    if (currentState.addToFirst) {
        currentState.firstOperand = parseFloat(currentState.firstOperand) * -1;
        screen.textContent = `${currentState.firstOperand}`;
    } else if (!currentState.addToFirst && currentState.secondOperand != undefined) {
        currentState.secondOperand = parseFloat(currentState.secondOperand) * -1;
        screen.textContent = `${currentState.secondOperand}`;
    }
});
const div100 = grabElement("div100");
div100.addEventListener('click', () => {
    if (currentState.firstOperand != undefined
        && currentState.addToFirst) {
        currentState.firstOperand = parseFloat(currentState.firstOperand) * 0.01;
    } else if (currentState.secondOperand != undefined
        && !currentState.addToFirst) {
        currentState.secondOperand = parseFloat(currentState.secondOperand) * 0.01;
    }

    updateScreen();
});

const div = grabElement("div");
const mul = grabElement("mul");
const sub = grabElement("sub");
const add = grabElement("add");
const ans = grabElement("ans");

const zero = grabElement("zero");
const one = grabElement("one");
const two = grabElement("two");
const three = grabElement("three");
const four = grabElement("four");
const five = grabElement("five");
const six = grabElement("six");
const seven = grabElement("seven");
const eight = grabElement("eight");
const nine = grabElement("nine");

function addNumberListener(elem) {
    elem.addEventListener('click', () => {
        if (currentState.firstOperand == undefined) {
            currentState.firstOperand = elem.textContent;
        }
        else if (currentState.addToFirst) {
            currentState.firstOperand += elem.textContent;
        }
        else if (currentState.secondOperand == undefined) {
            currentState.secondOperand = elem.textContent;
        }
        else
        {
            currentState.secondOperand += elem.textContent;
        }

        updateScreen();
    });
}

addNumberListener(zero);
addNumberListener(one);
addNumberListener(two);
addNumberListener(three);
addNumberListener(four);
addNumberListener(five);
addNumberListener(six);
addNumberListener(seven);
addNumberListener(eight);
addNumberListener(nine);

const decimalPoint = grabElement("decimalPoint");


function grabElement(id) {
    return document.querySelector(`#${id}`);
}

function CalculatorState() {
    this.screenValue = undefined;
    this.firstOperand = undefined;
    this.secondOperand = undefined;
    this.operator = undefined;
    this.addToFirst = true;
}

let currentState = new CalculatorState();

function Reset() {
    currentState = new CalculatorState();
    screen.textContent = '0';
}

function updateScreen() {
    if (currentState.firstOperand != undefined
        && currentState.addToFirst) {
        screen.textContent = `${+parseFloat(currentState.firstOperand).toFixed(10)}`;
    } else if (currentState.secondOperand != undefined
        && !currentState.addToFirst) {
        screen.textContent = `${+parseFloat(currentState.secondOperand).toFixed(10)}`;
    }
}