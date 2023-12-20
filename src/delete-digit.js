const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digit = n.toString();
  let maxValue = 0;

  for (let k = 0; k < digit.length; k++) {
    let curNumber = digit.slice(0, k) + digit.slice(k + 1, digit.length);
    if (maxValue < Number(curNumber)) {
      maxValue = Number(curNumber);
    }
  }
  return maxValue;
}

module.exports = {
  deleteDigit
};
