/*
 * a function that takes multiple function as aruguments
 * the last function will be a callback function 
 * that needs to be executed once all other functions are done
 */
import async from 'async';

export const promisify = (...args) => {
  let callback = args.pop();
  let promiseArray = args.map((fn) => {
    return new Promise((resolve) => {
      fn(resolve);
    });
  });  
  Promise.all(promiseArray)
    .then(callback);
};

export const asyncify = (...args) => {
  let callback = args.pop();
  
  async.parallel(
    args,
    callback
  );

};

export const oldschoolify = (...args) => {
  let callback = args.pop();
  args.forEach((fn) => fn(callback));
};
