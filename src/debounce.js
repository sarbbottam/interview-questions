/*
 * a function that will throttle the execution of an expensive function 
 */
export default (func, wait, immediate) => {
    let timeout;
    return function() {
      let context = this;
      let args = arguments;
      let later = () => {
        func.apply(this, args);
      };
      
      if (immediate) {
        func.apply(context, args);
      } else {
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);  
      }
    };
};