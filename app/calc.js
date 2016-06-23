'use strict';
/**
 * Calc module
 * @module app/calc
 */
/**
 * Check whether the natural number
 * @constructor
 * @param {int} n - Number
 * @return {boolean} Result of checking
*/
function isNaturalNumber(n) {
  return ((n > 0) && (n % 1 === 0));
};
/**
 * The calculation of the factorial, recursive way
 * @constructor
 * @param {int} n - Naturale number
 * @return {int} Result of factorial
*/
var calcRecursiveFactorial = function func(n) {
  if (isNaturalNumber(n) == true) return (n == 1) ? 1 : n * func(n - 1);
};

/**
 * The calculation of the factorial, iterative way
 * @constructor
 * @param {int} n - Naturale number
 * @return {int} Result of factorial
*/
function calcIterativeFactorial(n) {
  var i = 2;
  var fact = 1;
  while (i <= n) {
    fact = fact * i;
    i++;
  };

  return fact;
};

module.exports.calcRecursiveFactorial = calcRecursiveFactorial;
module.exports.calcIterativeFactorial = calcIterativeFactorial;
module.exports.isNaturalNumber = isNaturalNumber;
