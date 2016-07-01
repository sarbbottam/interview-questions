/*
 * a function that takes multiple function as aruguments
 * the last function will be a callback function
 * that needs to be executed once all other functions are done
 */

const async = require('async');

function promisify(...args) {
  const callback = args.pop();
  const promiseArray = args.map(func => {
    return new Promise(resolve => {
      func(resolve);
    });
  });
  Promise.all(promiseArray)
  .then(callback);
}

function asyncify(...args) {
  const callback = args.pop();

  async.parallel(
    args,
    callback
  );
}

function oldschoolify(...args) {
  const callback = args.pop();
  args.forEach(func => func(callback));
}

module.exports = {
  promisify,
  asyncify,
  oldschoolify
};
