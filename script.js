let displayValue;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0){
        return 'UNDEFINED';
    }
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        case "%":
            return modulo(a, b);
    }
}


//Sets up the number buttons to add text to the screen.
function numbers(){
    let buttons = document.querySelectorAll('.number',);
    let screen = document.querySelector('.screen-input');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let text = e.target.textContent;
            screen.textContent += text;
            displayValue = screen.textContent;
        })
    })
}

//Sets up the operator buttons to add text to the screen.
function operators(){
    let buttons = document.querySelectorAll('.operator',);
    let screen = document.querySelector('.screen-input');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let text = e.target.textContent;
            screen.textContent += " " + text + " ";
            displayValue = screen.textContent;
        })
    })
}

//Sets up the clear buttons and equals buttons to work.
function funcs() {
    let buttons = document.querySelectorAll('.func');
    let screen = document.querySelector('.screen-input');
    let screenSolution = document.querySelector('.screen-solution');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target.getAttribute('id') === 'AC') {
                screen.textContent = "";
                screenSolution.textContent = "";
                displayValue = screen.textContent;
                
            } 
            if (e.target.getAttribute('id') === 'C') {
                screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
                displayValue = screen.textContent;
            }
            if (e.target.getAttribute('id') === 'equals') {
                displayValue = screen.textContent;
                let solution = equals(displayValue.split(" "));
                screenSolution.textContent = solution;
                
            }
        });
    })
}

//Does the math
function equals(textArr) {
    let runningTotal = 0;
    console.log(textArr);
    while (textArr.length > 2) {
        console.log(textArr);
        if (textArr[2] == "") {
            return "Syntax Error";
        }
        
        runningTotal = operate(textArr[1], Number(textArr[0]), Number(textArr[2]));
        textArr.shift();
        textArr.shift();
        textArr[0] = runningTotal;
        console.log(runningTotal);
    }

    return runningTotal;
}

numbers();
operators();
funcs();
