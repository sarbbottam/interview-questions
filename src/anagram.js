/*
 * a function that takes an array of words 
 * and returns list of anagrams
 */

export default (words) => {
  let hash = {};
  let anagrams = [];
  
  words.forEach(word => {
    let sorted = word.split('').sort().join('');   
    if (!hash[sorted]) {
      hash[sorted] = [];
    }
    hash[sorted].push(word);
  }); 
  
  Object.keys(hash).forEach(key => {
    if(hash[key].length > 0) {
      anagrams = anagrams.concat(hash[key]);
    }
  });
  
  return anagrams;  
};
