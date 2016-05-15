const assert = require('chai').assert;
const dedupMethods = require('../src/array-dedup');

describe('array-dedup', () => {
  Object.keys(dedupMethods).forEach(method => {
    it(`should dedup array ${method}`, () => {
      assert.deepEqual(
        [1, 2, 3],
        dedupMethods[method]([1, 1, 2, 2, 3])
      );
    });
  });
});

