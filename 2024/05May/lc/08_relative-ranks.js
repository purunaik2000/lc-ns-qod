/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const n = score.length;
    score = score.map((x, i) => [x, i]).sort((a, b) => b[0] - a[0]);
    const res = new Array(n);
    res[score[0][1]] = "Gold Medal";
    if(n > 1) res[score[1][1]] = "Silver Medal";
    if(n > 2) res[score[2][1]] = "Bronze Medal";

    for(let i=3;i<n;i++) res[score[i][1]] = `${i+1}`;

    return res;
};