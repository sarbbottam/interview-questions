/*
 * a function that will repeat a string as per the count provided
 */
export default (string, count) => {
  let result = '';
  while (count > 0) {
    if (count % 2 === 1) {
      result += string;
      count -= 1;
    } else {
      string += string;
      count /= 2;
    }
  }
  return result;
};
