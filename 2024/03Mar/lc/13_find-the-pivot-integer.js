/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const res = Math.sqrt(n * (n + 1) / 2);

    return res % 1 == 0 ? res : -1;
};