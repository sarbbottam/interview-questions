import {assert} from 'chai';
import sinon from 'sinon';
import debounce from '../src/debounce';

describe('debounce', () => {
  
  it(`should call the debounced function only once for a timeout`, (done) => {
    let spy = sinon.spy(() => true);
    let debounced = debounce(spy, 100);
       
    debounced();
    debounced();
    debounced();
    debounced();
    debounced();
    
    setTimeout(() => {
      assert.equal(
        1, 
        spy.callCount
      );
      done();
    }, 200);
      
  });
  
});
