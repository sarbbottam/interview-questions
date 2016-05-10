const assert = require('chai').assert;
const reorder = require('../src/array-reorder');

describe('array-reorder', () => {
  it(`should reorder the array as per given order`, () => {
    assert.deepEqual(
      ['D', 'F', 'G', 'C', 'E'],
      reorder(['C', 'D', 'E', 'F', 'G'], [3, 0, 4, 1, 2])
    );
  });
});
