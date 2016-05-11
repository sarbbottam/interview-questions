const assert = require('chai').assert;
const gcd = require('../src/gcd-and-lcm').gcd;
const lcm = require('../src/gcd-and-lcm').lcm;

describe('gcd-and-lcm', () => {
  it(`gcd`, () => {
    assert.equal(gcd(10, 20, 30), 10);
    assert.equal(gcd(20, 40, 60, 80), 20);
  });

  it(`lcm`, () => {
    assert.equal(lcm(1, 2, 3, 4, 5), 60);
    assert.equal(lcm(3, 4, 9, 12), 36);
  });
});
