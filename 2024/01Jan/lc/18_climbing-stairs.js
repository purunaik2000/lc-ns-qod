/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<4) return n;
    let prev = 2, cur = 3;
    for(let i=3;i<n;i++){
        cur += prev;
        prev = cur-prev;
    }
    return cur;
};