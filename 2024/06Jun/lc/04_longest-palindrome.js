/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const set = new Set();
    let count = 0;
    for(let c of s) {
        if(set.has(c)) {
            count += 2;
            set.delete(c);
        }else set.add(c);
    }
    if(set.size) count++;
    return count;
};