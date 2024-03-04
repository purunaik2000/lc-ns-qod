/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b)=>a-b);

    let l = 0, r = tokens.length-1, score = 0;
    while(l<=r) {
        if(tokens[l]<=power) {
            power -= tokens[l];
            l++;
            score++;
        }else {
            if((score == 0) || (l==r)) break;
            score--;
            power += tokens[r];
            r--;
        }
    }

    return score;
};