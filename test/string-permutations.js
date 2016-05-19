const assert = require('chai').assert;
const stringPermutation = require('../src/string-permutations');

function factorial(number) {
  let product = 1;
  for (let i = 1; i <= number; i += 1) {
    product *= i;
  }

  return product;
}

describe('string-permutations', () => {
  ['a', 'ab', 'abc', 'abcd', 'abcde'].forEach(string => {
    it(`should return permutation of ${string}`, () => {
      assert.equal(
        factorial(string.length),
        stringPermutation(string).length
      );
    });
  });
});
