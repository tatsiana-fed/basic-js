const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let value;
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== -1) {
      for (let n = k + 1; n < arr.length; n++) {
        if (arr[n] !== - 1) {
          if (arr[k] > arr[n]) {
            tmp = arr[n]
            arr[n] = arr[k];
            arr[k] = tmp;
          }
        }
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
