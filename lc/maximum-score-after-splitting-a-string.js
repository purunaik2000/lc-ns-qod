/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ones = 0;
    for(let i=0;i<s.length;i++) if(s[i] == '1') ones++;
    let maxScore = 0;
    let zeroes = 0;
    for(let i=0;i<s.length-1;i++) {
        if(s[i] == '0') zeroes++;
        else ones--;
        maxScore = Math.max(maxScore, zeroes+ones);
    }
    return maxScore;
};