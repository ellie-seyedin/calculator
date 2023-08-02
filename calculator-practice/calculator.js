class calculator{
    constructor(){

    }


    add(num1, num2) {
        return num1+num2;
    }

    subtract(num1, num2) {
        return num1-num2;
    }

    multiply(num1, num2) {
        return num1*num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
          }
        return num1/num2;
    }

    remainder(num1, num2) {
        return num1%num2;
    }

}
const calculator1 = new calculator();
console.log("Addition is = " + calculator1.add(1,2));
console.log("Subtraction is = " + calculator1.subtract(54,19));
console.log("Multiplication is = " + calculator1.multiply(18,987));
console.log("Division is = " + calculator1.divide(1,2));
console.log("Remainder is = " + calculator1.remainder(1,2));

