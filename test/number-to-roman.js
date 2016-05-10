const assert = require('chai').assert;
const numberToRoman = require('../src/number-to-roman');

describe('roman-to-number', () => {
  it(`should convert roman to number`, () => {
    const hash = {
      MMXV: 2015,
      MMXVI: 2016,
      MCMXLVIII: 1948,
      MCMXXXIX: 1939
    };

    Object.keys(hash).forEach(roman => {
      assert.equal(
        roman,
        numberToRoman(hash[roman])
      );
    });
  });
});
