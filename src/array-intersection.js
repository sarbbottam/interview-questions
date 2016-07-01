/*
 * a function that takes two arrays as argument
 * and returns an array with their intersection
 */

module.exports = function (firstArray, secondArray) {
  const hash = {};

  firstArray.forEach(item => {
    hash[item] = true;
  });

  const intersection = secondArray.filter(item => {
    return hash[item];
  });

  return intersection;
};
