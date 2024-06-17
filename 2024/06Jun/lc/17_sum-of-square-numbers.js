/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let l = 0, r = parseInt(Math.sqrt(c));
    while(l <= r) {
        const sum = l**2 + r**2;
        if(sum == c) return true;
        if(sum > c) r--;
        else l++;
    }
    return false;
};