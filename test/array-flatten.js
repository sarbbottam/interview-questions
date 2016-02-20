import {assert} from 'chai';
import flatten from '../src/array-flatten';

describe('array-flatten', () => {
  
  it('should flatten the array', () => {
    assert.deepEqual(
      [1, 2, 3, 4, 5], 
      flatten([1, 2, 3, 4, 5])
    );    
  });
  
});
