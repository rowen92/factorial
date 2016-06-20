"use strict";

var calcRecursiveFactorial = function func(n){
  return (n==1) ? 1 : n * func(n-1);
};

function calcIterativeFactorial(n){
  var i = 2, fact = 1;
  while(i<=n){
    fact = fact * i;
    i++;
  };
  return fact;
};

module.exports.calcRecursiveFactorial = calcRecursiveFactorial;
module.exports.calcIterativeFactorial = calcIterativeFactorial;
