module.exports = array => {
  let maxEndingHere;
  let maxSoFar;
  let startIndex = 0;
  let endIndex = 0;

  maxEndingHere = maxSoFar = array[0];

  for (let i = 1, l = array.length; i < l; i += 1) {
    if (array[i] > maxEndingHere + array[i]) {
      startIndex = i;
      maxEndingHere = array[i];
    } else {
      maxEndingHere += array[i];
    }

    if (maxEndingHere > maxSoFar) {
      endIndex = i;
      maxSoFar = maxEndingHere;
    }
  }

  if (startIndex > endIndex) {
    startIndex = endIndex;
  }

  return {
    max: maxSoFar,
    startIndex,
    endIndex
  };
};
