let main = document.querySelector("main")
let display = document.querySelector(".display");
let operatorPad = document.querySelector(".operatorPad")

let x = "";
let y = "";
let operator = null;
let result = null;

function generateKeypad() {
    const keypad = document.querySelector(".keypad")
    for (let i = 0; i <= 9; i++) {
        let button = document.createElement("button");
        button.textContent = i;
        keypad.append(button);
    
        button.addEventListener("click", () => {
            if (result !== null) {
                if (operator === null) {
                    // previous result is shown and no operator -> start a fresh calculation
                    display.textContent = "";
                    result = null;
                    x = "";
                    y = "";
                    operator = null;
                } else {
                    // there is a pending operator -> use previous result as x and start entering y
                    // clear the result flag but keep x (which already holds the result)
                    result = null;
                    // ensure display shows "x operator " so appending digits builds y
                    if (!display.textContent.includes(operator)) {
                        display.textContent = x + " " + operator + " ";
                    }
                }
            }

            display.textContent += i

            if (operator === null) {
                x += i;
                console.log("x equals: " + x);
            }
            else {
                y += i;
                console.log("y equals: " + y)
            }
        })
    
    }
}


function clearButton() {
    const clearButton = document.createElement("button")
    clearButton.textContent = "Cl"
    main.appendChild(clearButton)

    clearButton.addEventListener("click", () => {
            display.textContent = display.textContent.slice(0, -1)

            if (operator === null) {
                x = x.slice(0, -1);
                console.log("x equals: " + x);
            }
            else {
                y = y.slice(0, -1);
                console.log("y equals: " + y)
            }
        })
}

function clearAllButton() {
    const clearAllButton = document.createElement("button")
    clearAllButton.textContent = "Clear All"
    main.appendChild(clearAllButton)

    clearAllButton.addEventListener("click", () => {
            display.textContent = ""
            x = ""
            y = ""
            operator = null
            result = null
        })
}


function generateOperators() {
    const operations = ["+", "-", "*", "/"];
    
    for (let i = 0; i < operations.length; i++) {
        let opButton = document.createElement("button");
        opButton.textContent = operations[i];
        operatorPad.append(opButton)
        
        opButton.addEventListener("click", () => {
            if (operator === null) {
                operator = opButton.textContent;
                display.textContent = x + " " + operator + " ";
                console.log("operation: " + operator)
                y = ""
            }
            else {
                // compute pending result, then set new operator for chaining
                operate();
                operator = opButton.textContent;
                display.textContent = x + " " + operator + " ";
            }
        })
    }
}
function operate() {
    if (x === "" || y === "" || operator === null) {
        throw new Error("Incomplete expression");
    }

    const numx = Number(x);
    const numy = Number(y);
    if (Number.isNaN(numx) || Number.isNaN(numy)) {
        throw new Error("Invalid number");
    }

    if (operator === "/" && numy === 0) {
        throw new Error("Division by zero");
    }

    // compute into a local variable, then store to the global `result`
    let r;
    switch (operator) {
        case "+":
            r = numx + numy;
            break;
        case "-":
            r = numx - numy;
            break;
        case "*":
            r = numx * numy;
            break;
        case "/":
            r = numx / numy;
            break;
        default:
            throw new Error("Unknown operator");
    }

    // persist result globally so keypad can detect it
    result = String(r);
    display.textContent = result;
    x = result;
    y = "";
    operator = null;
}

function generateEqualSign() {
    let equalSign = document.createElement("button");
    equalSign.textContent = "=";
    operatorPad.append(equalSign)

    equalSign.addEventListener("click", () => {
        try {
            operate();
        } catch (err) {
            display.textContent = err.message;
            x = "";
            y = "";
            operator = null;
            console.error(err);
        }
    });
}




generateKeypad()
clearButton()
clearAllButton()
generateOperators()
generateEqualSign()