// 1. Display even numbers from 1 to 100
function displayEvenNumbers() {
    let result = "";
    for (let i = 2; i <= 100; i += 2) {
        result += i + "\n";
    }
    document.getElementById("evenResult").innerText = "Even Numbers : " + result;
}

// 2. Calculator using switch
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator!";
    }

    document.getElementById("calcResult").innerText = "Result: " + result;
}

// 3. Find tax based on salary
function findTax() {
    let salary = parseFloat(document.getElementById("salary").value);
    let tax = 0;

    switch (true) {
        case salary > 1500000:
            tax = salary * 0.30;
            break;
        case salary > 1000000:
            tax = salary * 0.20;
            break;
        case salary > 500000:
            tax = salary * 0.10;
            break;
        default:
            tax = 0;
    }

    document.getElementById("taxResult").innerText = "Tax Amount: " + tax;
}

// 4. Sum of Products of corresponding digits
function sumOfProducts() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let len = Math.max(n1.length, n2.length);
    n1 = n1.padStart(len, '0');
    n2 = n2.padStart(len, '0');

    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += parseInt(n1[i]) * parseInt(n2[i]);
    }

    document.getElementById("sumResult").innerText = "Sum of Products: " + sum;
}
