const assert = require('chai').assert;
const makeFriendlyDates = require('../src/friendly-date');

describe('friendly-date', () => {
  it(`should return ['July 1st', '4th']`, () => {
    assert.deepEqual(
      ['July 1st', '4th'],
      makeFriendlyDates(['2016-07-01', '2016-07-04'])
    );
  });
  it(`should return ['December 1st', 'February 3rd']`, () => {
    assert.deepEqual(
      ['December 1st', 'February 3rd'],
      makeFriendlyDates(['2016-12-01', '2017-02-03'])
    );
  });
  it(`should return ['December 1st, 2016', 'February 3rd, 2018']`, () => {
    assert.deepEqual(
      ['December 1st, 2016', 'February 3rd, 2018'],
      makeFriendlyDates(['2016-12-01', '2018-02-03'])
    );
  });
  it(`should return ['March 1st, 2017', 'May 5th'`, () => {
    assert.deepEqual(
      ['March 1st, 2017', 'May 5th'],
      makeFriendlyDates(['2017-03-01', '2017-05-05'])
    );
  });
  it(`should return ['January 13th, 2018']`, () => {
    assert.deepEqual(
      ['January 13th, 2018'],
      makeFriendlyDates(['2018-01-13', '2018-01-13'])
    );
  });
  it(`should return ['September 5th, 2022', 'September 4th']`, () => {
    assert.deepEqual(
      ['September 5th, 2022', 'September 4th'],
      makeFriendlyDates(['2022-09-05', '2023-09-04'])
    );
  });
  it(`should return ['September 5th, 2022', 'September 5th, 2023']`, () => {
    assert.deepEqual(
      ['September 5th, 2022', 'September 5th, 2023'],
      makeFriendlyDates(['2022-09-05', '2023-09-05'])
    );
  });
});
