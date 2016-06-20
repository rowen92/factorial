const calc = require('./calc');

const n = 5;

const result1 = calc.calcRecursiveFactorial(n);
const result2 = calc.calcIterativeFactorial(n);

console.log(`Recursive factorial = ${result1}`)
console.log(`Iterative factorial = ${result2}`)
