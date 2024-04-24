/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n < 2) return n;
    
    let prev = 0, cur = 1, next = 1;

    for(let i=2;i<n;i++) {
        [prev, cur, next] = [cur, next, prev + cur + next];
    }

    return next;
}