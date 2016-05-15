const assert = require('chai').assert;
const maxSubArray = require('../src/max-sub-array');

describe('max-sub-array', () => {
  it(`should return max-sub-array`, () => {
    assert.equal(
      15,
      maxSubArray([1, 2, 3, -7, 4, 5, 6])
    );
    assert.equal(
      16,
      maxSubArray([1, 2, 3, -5, 4, 5, 6])
    );
    assert.equal(
      15,
      maxSubArray([1, 2, 3, -6, 4, 5, 6])
    );
  });
});
