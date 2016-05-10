/*
 * a function that will throttle the execution of an expensive function
 */
module.exports = (func, wait, immediate) => {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      func.apply(this, args);
    };

    /* istanbul ignore next */
    if (immediate) {
      func.apply(context, args);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }
  };
};
