const { NotImplementedError } = require("../extensions/index.js");

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
  let repeatT = options.repeatTimes ? options.repeatTimes : 1;
  let sep = options.separator ? String(options.separator) : "+";
  let addit =
    options.addition != undefined || options.addition === null
      ? String(options.addition + "~")
      : "~";
  let additRT = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let addSep = options.additionSeparator
    ? String(options.additionSeparator)
    : "|";

  let rrr = str + addit.repeat(additRT);
  rrr = rrr.split("~");
  rrr.pop();
  let result = rrr.join(addSep);
  result = (result + "~").repeat(repeatT).split("~");
  result.pop();
  return result.join(sep);
}

module.exports = {
  repeater,
};
