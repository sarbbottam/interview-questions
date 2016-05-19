function stringPermutation(string, startIndex = 0, permutations = []) {
  const endIndex = string.length - 1;

  if (startIndex === endIndex) {
    permutations.push(string);
    return permutations;
  }

  const stringArray = string.split('');

  for (let i = startIndex; i <= endIndex; i += 1) {
    [stringArray[startIndex], stringArray[i]] = [stringArray[i], stringArray[startIndex]];
    stringPermutation(stringArray.join(''), startIndex + 1, permutations);
  }

  return permutations;
}

module.exports = stringPermutation;
