import {assert} from 'chai';
import reorder from '../src/array-reorder';

describe('array-reorder', () => {
  it(`should reorder the array as per given order`, () => {
    assert.deepEqual(
      ['D', 'F', 'G', 'C', 'E'],
      reorder(['C', 'D', 'E', 'F', 'G'], [3, 0, 4, 1, 2])
    );
  });
});
