const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should return sum of numbers in an array', function() {
      assert.equal(sum([1,3,5]), 9);
      assert.equal(sum([1,-4,-2]), -5);
    });

    it('Should round to two places if sum is a decimal', function() {
      assert.equal(sum([1.2, 4.6432, 0.5]), 6.34);
    });

    it('Should throw an error if input is not an array', function() {
      assert.throws(function(){sum('a','b');}, Error, 'Wrong input type');
    });

    it('Should throw an error if input contains not a number', function() {
      assert.throws(function(){sum([1,2,'a','b']);}, Error, 'Input not a number');
    });
});
