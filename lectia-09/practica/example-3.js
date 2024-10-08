/*
## Example 3 -Calculator

Create a `calculator` object with three methods:

- `read(a, b)`- takes two values and stores them as object properties.
- `add()` - returns the sum of the stored values.
- `mult()` - multiplies the stored values and returns the result.
*/

const calculator = {
  firstNumber: 0,
  secondNumber: 0,
  read(firstValue, secondValue) {
    this.firstNumber = firstValue;
    this.secondNumber = secondValue;
  },
  add() {
    return `Suma celor doua numere este ${this.firstNumber + this.secondNumber}`
  },
  mult() {
    return `Produsul celor doua numere este ${this.firstNumber * this.secondNumber}`
  }
};

calculator.read(5, 3);

console.log(calculator.add())
console.log(calculator.mult())