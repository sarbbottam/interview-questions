const assert = require('chai').assert;
const romanToNumber = require('../src/roman-to-number');

describe('roman-to-number', () => {
  it(`should convert roman to number`, () => {
    const hash = {
      MMXVI: 2016,
      MCMXLVIII: 1948,
      MCMXXXIX: 1939
    };

    Object.keys(hash).forEach(roman => {
      assert.equal(
        hash[roman],
        romanToNumber(roman)
      );
    });
  });
});
