import {assert} from 'chai';
import romanToNumber from '../src/roman-to-number';

describe('roman-to-number', () => {
  
  it(`should convert roman to number`, () => {
    let hash = {
      'MMXVI': 2016,
      'MCMXLVIII': 1948,
      'MCMXXXIX': 1939
    };
    
    Object.keys(hash).forEach((roman) => {
      assert.equal(
        hash[roman], 
        romanToNumber(roman)
      );
    }); 
         
  });
  
});
