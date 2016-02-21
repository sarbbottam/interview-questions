import {assert} from 'chai';
import anagram from '../src/anagram';

describe('anagram', () => {
  
  it(`should return the list of anagmars`, () => {
    assert.deepEqual(
      ['monk', 'konm', 'nkom', 'bbc', 'cbb', 'dell', 'ledl', 'llde'], 
      anagram(['monk', 'konm', 'nkom', 'bbc', 'cbb', 'dell', 'ledl', 'llde'])
    );    
  });
  
});
