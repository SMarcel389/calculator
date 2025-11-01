/*const body = document.querySelector("body");


let x = "";
let y = "";
let operation = null;


const display = document.createElement("div");
display.className = "display";
display.textContent = "";
body.appendChild(display);


function generateNumberKeypad() {
    const keypad = document.createElement("div");
    keypad.className = "keypad";
    body.appendChild(keypad);

    for (let i = 0; i <= 9; i++) {
        const button = document.createElement("button");
        button.textContent = i;

        button.addEventListener("click", () => {
            if (operation === null) {
                x += Number(i);
                display.textContent = x;
                console.log("x =", x);
            } else {
                y += Number(i);
                display.textContent = y;
                console.log("y =", y);
            }
        });

        keypad.appendChild(button);
    }
}

function generateOperators() {
    const operators = ["+", "-", "*", "/"];
    const operatorContainer = document.createElement("div");
    operatorContainer.className = "operators";
    body.appendChild(operatorContainer);

    operators.forEach(op => {
        const button = document.createElement("button");
        button.textContent = op;

        button.addEventListener("click", () => {
            if (x !== null) {
                operation = op;
                display.textContent = op;
                console.log("Operation =", operation);
            } else {
                alert("Select a number first!");
            }
        });

        operatorContainer.appendChild(button);
    });
}

function generateEqualSign() {
    const equalSign = document.createElement("button");
    equalSign.className = "equalSign";
    equalSign.textContent = "=";
    body.appendChild(equalSign);
    
        equalSign.addEventListener("click", function() {
            numx = Number(x)
            numy = Number(y)
            let result = ""
    switch (operation) {
        case "+": 
            result = numx + numy
            break 
        case "-":
            result = numx - numy
            break
        case "*":
            result = numx * numy
            break
        case "/":
            result = numx / numy
            break
        }
            display.innerText = result
            x = result
        })
}

function generateClearButton() {
    const clearButton = document.createElement("button");
    clearButton.className = "C";
    clearButton.textContent = "C";
    body.appendChild(clearButton);
    
        clearButton.addEventListener("click", function() {
            x = "";
            y = "";
            operation = null
            display.innerText = ""






        })
}


generateNumberKeypad();
generateOperators();
generateEqualSign();
generateClearButton();

*/