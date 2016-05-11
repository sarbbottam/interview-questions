function _gcd(x, y) {
  if (y === 0) {
    return x;
  }
  return _gcd(y, x % y);
}

function gcd(...args) {
  return args.reduce((previous, current) => {
    return _gcd(previous, current);
  }, args[0]);
}

function lcm(...args) {
  return args.reduce((previous, current) => {
    return (previous * current) / _gcd(previous, current);
  }, args[0]);
}

module.exports = {
  gcd,
  lcm
};
