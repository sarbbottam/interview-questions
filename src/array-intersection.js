/*
 * a function that takes two arrays as argument 
 * and returns an array with their intersection
 */

export default (firstArray, secondArray) => {
  
  let intersection;
  let hash = {};
  
  firstArray.forEach(item => {
    hash[item] = true;
  });
  
  intersection = secondArray.filter(item => {
    return hash[item];
  });
  
  return intersection;  
};
