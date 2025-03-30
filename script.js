// DOM elements
const screen = grabElement("screen");
const clear = grabElement("toggleSign");
const toggleSign = grabElement("div100");

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
            currentState.firstOperand = currentState.firstOperand + elem.textContent;
        }
        else if (currentState.secondOperand == undefined) {
            currentState.secondOperand = elem.textContent;
        }
        else
        {
            currentState.secondOperand = currentState.secondOperand + elem.textContent;
        }

        if (currentState.addToFirst)
        {
            screen.textContent = currentState.firstOperand;
        }
        else
        {
            screen.textContent = currentState.secondOperand;
        }
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
    this.addToFirst = true;
}

let currentState = new CalculatorState();

function Reset() {

}