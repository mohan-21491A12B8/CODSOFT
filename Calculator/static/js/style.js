const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function clearLast() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}

function calculate() {
    try {
        let expression = display.value;

        // Replace % for percentage operation between two numbers
        expression = expression.replace(/(\d+(?:\.\d+)?)%([\d\.]+)/g, "($1*$2/100)");

        display.value = eval(expression);
    } catch (error) {
        alert('Invalid Input');
    }
}
