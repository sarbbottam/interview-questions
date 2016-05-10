import {assert} from 'chai';
import stringRepeat from '../src/string-repeat';

describe('string-repeat', () => {
  it(`should repeat the string as per the count provided`, () => {
    [1, 10, 11, 100, 101, 1000, 1001, 10000, 10001, 100000, 100001, 1000000].forEach(count => {
      assert.equal(
        count,
        stringRepeat('s', count).length
      );
    });
  });
});
