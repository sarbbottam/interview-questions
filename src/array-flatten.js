/*
 * a function that takes an array which can contain nested arrays
 * and return a flattened array
 */

export const iteratively = (array) => {
  
  for(let i = 0, l = array.length; i < l; i += 1) {
    if( Array.isArray(array[i]) ) {
      // if the item at ith index is an array
      array = Array.prototype.concat(
        array.slice(0, i), // portion of the before the ith index 
        array[i], // the item of ith index, which is an array
        array.slice(i + 1, l) // portion of the after the ith index
      );
      l = array.length; // update the value of l as length of the array has increased
      i -= 1; // the item at current ith idex could be an array    
    }
  }
  
  return array;  
};

export const recursively = (array) => {
  
  return array.reduce((previous, current) => {
    return previous.concat(
      // if current item is an array flatten it
      Array.isArray(current) ? recursively(current) : current
    );
  }, []);
    
};