/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let count = 0;
    while(n>1) {
        count += parseInt(n/2);
        n = parseInt(n/2) + n%2;
    }
    return count;
};