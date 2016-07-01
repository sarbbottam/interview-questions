/*
 * a function that takes an array of words
 * and returns list of anagrams
 */

module.exports = function (words) {
  const hash = {};
  let anagrams = [];

  words.forEach(word => {
    const sorted = word.split('').sort().join('');
    if (!hash[sorted]) {
      hash[sorted] = [];
    }
    hash[sorted].push(word);
  });

  Object.keys(hash).forEach(key => {
    /* istanbul ignore next */
    if (hash[key].length > 0) {
      anagrams = anagrams.concat(hash[key]);
    }
  });

  return anagrams;
};
