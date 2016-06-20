var expect = require('chai').expect;
var calc = require('../app/calc.js');

describe('Calc factorials', function(){

  describe('Recursive way', function(){
    it('Factorial of 5', function(){
      var result = calc.calcRecursiveFactorial(5);
      expect(result).to.equal(120);
    });
    it('Factorial of 1', function(){
      var result = calc.calcRecursiveFactorial(1);
      expect(result).to.equal(1);
    });
  });

  describe('Iterative way', function(){
    it('Factorial of 5', function(){
      var result = calc.calcIterativeFactorial(5);
      expect(result).to.equal(120);
    });
    it('Factorial of 1', function(){
      var result = calc.calcIterativeFactorial(1);
      expect(result).to.equal(1);
    });
  });

});