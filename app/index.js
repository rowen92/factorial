var calc = require('./calc');
var n = 5;
var recursive = calc.calcRecursiveFactorial(n);
var iterative = calc.calcIterativeFactorial(n);
console.log('Calculated factorial\nRecursive way: ' + recursive + '\nIterative way: ' + iterative);
