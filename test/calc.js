var expect = require('chai').expect;
var calc = require('../app/calc.js');

describe('factorial', function () {

  describe('check of number', function () {
    it('should be natural number', function () {
      var result = calc.isNaturalNumber(10);
      expect(result).to.be.true;
    });
  });

  describe('recursive way', function () {
    it('should be calculated, when number more than 1', function () {
      var result = calc.calcRecursiveFactorial(5);
      expect(result).to.equal(120);
    });

    it('should be calculated, when number is 1', function () {
      var result = calc.calcRecursiveFactorial(1);
      expect(result).to.equal(1);
    });

    it('should be not calculated, when number is not natural', function () {
      var result = calc.calcRecursiveFactorial(0.3);
      expect(result).to.be.undefined;
    });
  });

  describe('iterative way', function () {
    it('should be calculated, when number more than 1', function () {
      var result = calc.calcIterativeFactorial(5);
      expect(result).to.equal(120);
    });

    it('should be calculated, when number is 1', function () {
      var result = calc.calcIterativeFactorial(1);
      expect(result).to.equal(1);
    });

    it('should be not calculated, when number is not natural', function () {
      var result = calc.calcRecursiveFactorial(0.3);
      expect(result).to.be.undefined;
    });
  });

});
