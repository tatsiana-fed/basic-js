const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = '';
  if (!options.additionSeparator) options.additionSeparator = '|'

  const addition = Array(options.additionRepeatTimes)
    .fill(String(options.addition))
    .join(options.additionSeparator);

  const string = str + addition;

  return Array(options.repeatTimes).fill(string).join(options.separator);

}

module.exports = {
  repeater
};
