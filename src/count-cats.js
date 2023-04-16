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
    let c = matrix.flat(Infinity);
    let count = 0;
    for(i = 0; i < c.length; i++) {
        if(c[i] == '^^') {
            count++;
        }
    } 
    return count;
    throw new NotImplementedError('Not implemented');
}

module.exports = {
  countCats
};
