const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    array.push([]);
    for (let k = 0; k < matrix[i].length; k++) {
      array[i][k] = 0;
      for (let ix = -1; ix < 2; ix++) {
        for (let ky = -1; ky < 2; ky++) {
          if (ix !== 0 || ky !== 0) {
            if (i + ix >= 0 && k + ky >= 0 && i + ix < matrix.length && k + ky < matrix[i].length) {
              if (matrix[i + ix][k + ky]) {
                array[i][k] = array[i][k] + 1;
              }
            }
          }
        }
      }


    }
  }
  return array;
}


module.exports = {
  minesweeper
};
