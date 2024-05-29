/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let res = 0, i = s.length - 1;
    while(s[i] === '0') {
        res++;
        i--;
    }
    if(i != 0) res += 2;
    while(i > 0) {
        s[i] === '0' ? res += 2 : res++;
        i--;
    }
    return res;
};