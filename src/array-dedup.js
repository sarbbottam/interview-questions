function oldschoolify(array) {
  const hash = {};

  array.forEach(item => {
    hash[item] = item;
  });

  return Object.keys(hash).map(key => {
    return hash[key];
  });
}

function setify(array) {
  const set = new Set(array);

  // return Array.from(set);
  return [...set];
}

module.exports = {
  oldschoolify,
  setify
};
