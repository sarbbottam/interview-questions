/*
 * a function that will throttle the execution of an expensive function
 */
module.exports = function (func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    function later() {
      func.apply(context, args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
