const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  str = str.split('');
  let sum = 1;
  let string = '';
  let k = 0;
  while (k < str.length) {
    if (str[k] === str[k + 1]) {
      sum++;
    } else {
      if (sum === 1) sum = '';
      string += `${sum}${str[k]}`;
      sum = 1;
    }
    k++;
  }
  return string;
}

module.exports = {
  encodeLine
};
