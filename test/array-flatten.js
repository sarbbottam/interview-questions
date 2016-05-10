import {assert} from 'chai';
import * as flattenMethods from '../src/array-flatten';

describe('array-flatten', () => {
  Object.keys(flattenMethods).forEach(method => {
    it(`should flatten array ${method}`, () => {
      assert.deepEqual(
        [1, 2, 3, 4, 5],
        flattenMethods[method]([1, 2, 3, 4, 5])
      );

      assert.deepEqual(
        [1, 2, 3, 4, 5],
        flattenMethods[method]([1, [2, 3], [4], 5])
      );

      assert.deepEqual(
        [1, 2, 3, 4, 5],
        flattenMethods[method]([1, [2, [3, 4]], 5])
      );

      assert.deepEqual(
        [1, 2, 3, 4, 5],
        flattenMethods[method]([1, [2, [3, [4]]], 5])
      );

      assert.deepEqual(
        [1, 2, 3, {d: 4}, 5],
        flattenMethods[method]([1, [2, [3, {d: 4}]], 5])
      );
    });
  });
});
