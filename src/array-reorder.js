/*
 * a funtion that takes two array as arguments and reorder the array
 * with respect to the order
 * array = ['C', 'D', 'E', 'F', 'G'];
 * order = [3, 0, 4, 1, 2];
 * result = ['D', 'F', 'G', 'C', 'E'];
 */

module.exports = (array, order) => {
  for (let i = 0, l = order.length; i < l; i += 1) {
    if (order[i] !== i) {
      const orderIndex = order[i];
      order[i] = order[orderIndex];
      order[orderIndex] = orderIndex;

      const temp = array[i];
      array[i] = array[orderIndex];
      array[orderIndex] = temp;
    }
  }
  return array;
};
