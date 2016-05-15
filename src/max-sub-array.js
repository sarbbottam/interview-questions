module.exports = array => {
  let maxEndingHere;
  let maxSoFar;
  maxEndingHere = maxSoFar = array[0];
  for (let i = 1, l = array.length; i < l; i += 1) {
    maxEndingHere = Math.max(array[i], maxEndingHere + array[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};
