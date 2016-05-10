import {assert} from 'chai';
import {promisify, asyncify, oldschoolify} from '../src/async-all';

describe('async-all', () => {
  it(`promisify`, done => {
    const fn1 = callback => {
      setTimeout(callback, 100, 1);
    };

    const fn2 = callback => {
      setTimeout(callback, 200, 2);
    };

    const fn3 = callback => {
      setTimeout(callback, 300, 3);
    };

    const callback = result => {
      assert.deepEqual(
        [1, 2, 3],
        result
      );
      done();
    };

    promisify(fn1, fn2, fn3, callback);
  });

  it(`asyncify`, done => {
    const fn1 = callback => {
      setTimeout(() => {
        callback(null, 1);
      }, 100);
    };

    const fn2 = callback => {
      setTimeout(() => {
        callback(null, 2);
      }, 200);
    };

    const fn3 = callback => {
      setTimeout(() => {
        callback(null, 3);
      }, 300);
    };

    const callback = (error, result) => {
      assert.deepEqual(
        [1, 2, 3],
        result
      );
      done();
    };

    asyncify(fn1, fn2, fn3, callback);
  });

  it(`oldschoolify`, done => {
    const fn1 = callback => {
      setTimeout(callback, 100, 1);
    };

    const fn2 = callback => {
      setTimeout(callback, 200, 2);
    };

    const fn3 = callback => {
      setTimeout(callback, 300, 3);
    };

    const result = [];
    const callback = value => {
      result.push(value);
      if (result.length === 3) {
        assert.deepEqual(
          [1, 2, 3],
          result.sort()
        );
        done();
      }
    };

    oldschoolify(fn1, fn2, fn3, callback);
  });
});
