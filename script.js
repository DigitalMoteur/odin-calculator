// DOM elements
const screen = grabElement("screen");
const clear = grabElement("clear");
clear.addEventListener('click', Reset);
const toggleSign = grabElement("toggleSign");
toggleSign.addEventListener('click', () =>
{
    if (currentState.firstOperand == undefined)
        return;

    if (currentState.operator == undefined) {
        currentState.firstOperand = parseFloat(currentState.firstOperand) * -1;
    } else if (currentState.operator != undefined && currentState.secondOperand != undefined) {
        currentState.secondOperand = parseFloat(currentState.secondOperand) * -1;
    }
    updateScreen();
});
const div100 = grabElement("div100");
div100.addEventListener('click', () => {
    if (currentState.firstOperand != undefined
        && currentState.operator == undefined) {
        currentState.firstOperand = parseFloat(currentState.firstOperand) * 0.01;
    } else if (currentState.secondOperand != undefined
        && currentState.operator != undefined) {
        currentState.secondOperand = parseFloat(currentState.secondOperand) * 0.01;
    }

    updateScreen();
});

const div = grabElement("div");
const mul = grabElement("mul");
const sub = grabElement("sub");
const add = grabElement("add");
const ans = grabElement("ans");
ans.addEventListener('click', () => {
    processAnswer();
});

function addOperatorListener(elem) {
    elem.addEventListener('click', () => {
        currentState.operator = elem.textContent;
    });
}

addOperatorListener(div);
addOperatorListener(mul);
addOperatorListener(sub);
addOperatorListener(add);

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
            currentState.firstOperand = parseFloat(elem.textContent);
        }
        else if (currentState.operator == undefined) {
            currentState.firstOperand = parseFloat(`${currentState.firstOperand}` + elem.textContent);
        }
        else if (currentState.secondOperand == undefined) {
            currentState.secondOperand = parseFloat(elem.textContent);
        }
        else
        {
            currentState.secondOperand = parseFloat(`${currentState.secondOperand}` + elem.textContent);
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
    this.firstOperand = undefined;
    this.secondOperand = undefined;
    this.operator = undefined;
}

let currentState = new CalculatorState();

function Reset() {
    currentState = new CalculatorState();
    screen.textContent = '0';
}

function updateScreen() {
    if (currentState.firstOperand != undefined
        && currentState.operator == undefined) {
        screen.textContent = `${+currentState.firstOperand.toFixed(10)}`;
    } else if (currentState.secondOperand != undefined
        && currentState.operator != undefined) {
        screen.textContent = `${+currentState.secondOperand.toFixed(10)}`;
    }
}

function processAnswer() {
    switch(currentState.operator) {
        case '/':
            if (currentState.secondOperand == 0.0) {
                Reset();
                screen.textContent = "Error: Divide by zero";
                return;
            }
            currentState.firstOperand /= currentState.secondOperand;
            break;
        case '*':
            currentState.firstOperand *= currentState.secondOperand;
            break;
        case '-':
            currentState.firstOperand -= currentState.secondOperand;
            break;
        case '+':
            currentState.firstOperand += currentState.secondOperand;
            break;
        default:
            // Early out, don't update state
            return;
    }
    currentState.secondOperand = undefined;
    currentState.operator = undefined;
    updateScreen();
}