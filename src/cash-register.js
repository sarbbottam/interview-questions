/**
 * refer https://www.freecodecamp.com/challenges/exact-change
 */

const hash = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.10,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100
};

function checkCashRegister(price, cash, cashRegister) {
  const change = [];
  let balance = cash - price;
  let totalCashAvailable = 0;

  for (let i = cashRegister.length - 1; i >= 0; i -= 1) {
    const cash = cashRegister[i];
    const cashType = cash[0];
    const denomination = hash[cashType];

    let cashAvailable = cash[1];
    let cashUsed = 0;

    if (balance > denomination) {
      const cashRequired = Math.floor(balance / denomination) * denomination;

      if (cashRequired < cashAvailable) {
        cashUsed = cashRequired;
      } else {
        cashUsed = cashAvailable;
      }
      cashAvailable -= cashUsed;

      cashRegister[i][1] = cashAvailable;
      totalCashAvailable += cashAvailable;

      balance -= cashUsed;
      balance = Math.round(balance * 100) / 100;

      change.push([cash[0], cashUsed]);

      if (!balance) {
        break;
      }
    } else {
      totalCashAvailable += cashAvailable;
    }
  }

  if (balance) {
    return 'Insufficient Funds';
  }

  if (!totalCashAvailable) {
    return 'Closed';
  }

  return change;
}

module.exports = checkCashRegister;
