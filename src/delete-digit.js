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
  const N = String(n).split('').map(Number);
  let delNum = '';
  let flag = 0;
  for (let i = 0; i < N.length; i += 1) {
    if (N[i] < N[i + 1]) {
      delNum = N[i];
      flag = 1
    }  
  }
  if (!flag && N[N.length - 1] < N[N.length - 2]) {
    delNum = N[N.length - 1];
  }
  return +N.join('').replace(delNum, '');
}

module.exports = {
  deleteDigit
};
