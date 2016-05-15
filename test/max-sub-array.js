const assert = require('chai').assert;
const maxSubArray = require('../src/max-sub-array');

describe('max-sub-array', () => {
  it(`should return max-sub-array`, () => {
    assert.deepEqual(
      {
        max: 15,
        startIndex: 4,
        endIndex: 6
      },
      maxSubArray([1, 2, 3, -7, 4, 5, 6])
    );
    assert.deepEqual(
      {
        max: 16,
        startIndex: 0,
        endIndex: 6
      },
      maxSubArray([1, 2, 3, -5, 4, 5, 6])
    );
    assert.deepEqual(
      {
        max: 15,
        startIndex: 0,
        endIndex: 6
      },
      maxSubArray([1, 2, 3, -6, 4, 5, 6])
    );
    assert.deepEqual(
      {
        max: -1,
        startIndex: 0,
        endIndex: 0
      },
      maxSubArray([-1, -2, -3, -7, -4, -5, -6])
    );
  });
});
