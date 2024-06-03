/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let i = 0, n = t.length;
    for(let c of s) {
        if(c == t[i]) i++;
        if(i == n) return 0;
    }
    return n-i;
};