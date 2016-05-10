const assert = require('chai').assert;
const intersection = require('../src/array-intersection');

describe('array-intersection', () => {
  it(`should return the intersection of the passed arrays`, () => {
    assert.deepEqual(
      ['B', 'C', 'D'],
      intersection(['A', 'B', 'C', 'D'], ['B', 'C', 'D', 'E'])
    );
  });
});
