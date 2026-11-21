const add = (a, b) => {
    console.log(a + b);
}

const subtract = (a, b) => {
    console.log(a - b);
}

const multiply = (a, b) => {
    console.log(a * b);
}

const divide = (a, b) => {
    if (b == 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log(a / b);
    }
}

const calculate = (a, b, action) => {
    action(a, b);
}

calculate(20, 10, add);
calculate(20, 10, subtract);
calculate(20, 10, multiply);
calculate(20, 10, divide);