const assert = require('chai').assert;
const cashRegister = require('../src/cash-register');

describe('cash-register', () => {
  it(`should return [['QUARTER', 0.50]]`, () => {
    assert.deepEqual(
      [['QUARTER', 0.50]],
      cashRegister(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]])
    );
  });

  it(`should return [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15.00], ['ONE', 1.00], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04]]`, () => {
    assert.deepEqual(
      [['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15.00], ['ONE', 1.00], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04]],
      cashRegister(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]])
    );
  });

  it(`should return Insufficient Funds`, () => {
    assert.deepEqual(
      'Insufficient Funds',
      cashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])
    );
  });

  it(`should return Insufficient Funds`, () => {
    assert.deepEqual(
      'Insufficient Funds',
      cashRegister(19.50, 20.00, [['PENNY', 0.01], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 1.00], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])
    );
  });

  it(`should return Closed`, () => {
    assert.deepEqual(
      'Closed',
      cashRegister(19.50, 20.00, [['PENNY', 0.50], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]])
    );
  });
});
