const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    for (let k = 0; k < arr.length; k++) {
      if (Array.isArray(arr[k])) {
        const depthCalc = 1 + this.calculateDepth(arr[k]);
        if (depthCalc > depth) {
          depth = depthCalc;
        }
      }
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};
