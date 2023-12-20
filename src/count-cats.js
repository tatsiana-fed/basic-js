const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;

  for (let k = 0; k < matrix.length; k++) {
    for (let i = 0; i < matrix[k].length; i++) {
      if (matrix[k][i] === "^^") {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};
