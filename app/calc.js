'use strict';
/**
 * Calc module
 * @module app/calc
 */

var _this = this;

/**
 * Check whether the natural number
 * @param {int} n - Number
 * @return {boolean} Result of checking
 */
exports.isNaturalNumber = function (n) {
  return ((n > 0) && (n % 1 === 0));
};

/**
 * The calculation of the factorial, recursive way
 * @param {int} n - Naturale number
 * @return {int} Result of factorial
 */
exports.calcRecursiveFactorial = function func(n) {
  if (_this.isNaturalNumber(n) === true) {
    return (n == 1) ? 1 : n * func(n - 1);
  } else {
    console.log('Number should be natural');
    return undefined;
  };
};

/**
 * The calculation of the factorial, iterative way
 * @param {int} n - Naturale number
 * @return {int} Result of factorial
 */
exports.calcIterativeFactorial = function (n) {
  if (_this.isNaturalNumber(n) === true) {
    var i = 2;
    var fact = 1;
    while (i <= n) {
      fact *= i;
      i++;
    };

    return fact;
  } else {
    console.log('Number should be natural');
    return undefined;
  };
};
