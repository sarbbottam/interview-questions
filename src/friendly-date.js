/**
 * https://www.freecodecamp.com/challenges/friendly-date-ranges
 */

const monthsHash = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};

function stringifyDay(day) {
  day = parseInt(day, 10);

  switch (day) {
    case 1:
    case 21:
    case 31:
      day += 'st';
      break;
    case 2:
    case 22:
      day += 'nd';
      break;
    case 3:
    case 23:
      day += 'rd';
      break;
    default:
      day += 'th';
      break;
  }

  return day;
}

function makeFriendlyDates(arr) {
  const dateString1 = arr[0].split('-');
  const dateString2 = arr[1].split('-');

  const dayDiff = Math.round(
    (
      new Date(dateString2[0], dateString2[1] - 1, dateString2[2]) -
      new Date(dateString1[0], dateString1[1] - 1, dateString1[2])
    ) /
    (1000 * 60 * 60 * 24)
  );

  const dateArray1 = [];
  const dateArray2 = [];

  if (dayDiff === 0) {
    dateArray1.push(`${monthsHash[dateString1[1]]} ${stringifyDay(dateString1[2])}`);
    dateArray1.push(dateString1[0]);
    return [dateArray1.join(', ')];
  }

  if (dayDiff >= 365) {
    dateArray1.push(`${monthsHash[dateString1[1]]} ${stringifyDay(dateString1[2])}`);
    dateArray1.push(dateString1[0]);
    dateArray2.push(`${monthsHash[dateString2[1]]} ${stringifyDay(dateString2[2])}`);
    dateArray2.push(dateString2[0]);
    return [dateArray1.join(', '), dateArray2.join(', ')];
  }

  dateArray1.push(`${monthsHash[dateString1[1]]} ${stringifyDay(dateString1[2])}`);
  if (parseInt(dateString1[0], 10) !== new Date().getFullYear()) {
    dateArray1.push(dateString1[0]);
  }
  if (dateString1[1] === dateString2[1] && dateString1[0] === dateString2[0]) {
    dateArray2.push(stringifyDay(dateString2[2]));
  } else {
    dateArray2.push(`${monthsHash[dateString2[1]]} ${stringifyDay(dateString2[2])}`);
  }

  return [dateArray1.join(', '), dateArray2.join(', ')];
}

module.exports = makeFriendlyDates;
