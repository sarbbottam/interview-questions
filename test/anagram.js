const assert = require('chai').assert;
const anagram = require('../src/anagram');

describe('anagram', () => {
  it(`should return the list of anagmars`, () => {
    assert.deepEqual(
      ['monk', 'konm', 'nkom', 'bbc', 'cbb', 'dell', 'ledl', 'llde'],
      anagram(['monk', 'konm', 'nkom', 'bbc', 'cbb', 'dell', 'ledl', 'llde'])
    );
  });
});
