'use strict'

class Calculator {
    constructor() {
        this.math = new Map()
        this.math.set('+', (a, b) => a + b);
        this.math.set('-', (a, b) => a - b);
    }

    calculate(str) {
        let arr = str.split(' ');
        let [num1, operator, num2] = [...arr];
        let calc = this.math.get(operator);

        return calc(Number(num1), Number(num2));
    }

    addMethod(name, func) {
        this.math.set(name, func);
    }
}

let calc = new Calculator;
alert(calc.calculate("3 + 7"));
alert(calc.calculate("3 - 7"));

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);
let result = powerCalc.calculate('2 ** 3');
alert(result)