/*
 * a function that will convert a roman string to number 
 * refer http://www.roman-numerals.org/numbers.html for converstion rule
 */

let additiveHash = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

let subtractiveHash = {
  'I': {'V': true, 'X': true},
  'X': {'L': true, 'C': true},
  'C': {'D': true, 'M': true}
};

export default (string) => {
  let result = 0;
  
  for(let i = 0, l = string.length; i < l; i += 1) {
    let currentChar = string.charAt(i);
    let nextChar = string.charAt(i + 1);
      if(subtractiveHash[currentChar]
        && subtractiveHash[currentChar][nextChar]) {
      result -= additiveHash[currentChar];
    } else {
      result += additiveHash[currentChar];
    }
  }
  
  return result;    
};