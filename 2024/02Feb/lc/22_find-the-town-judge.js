/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const temp = new Array(n+1).fill(0);

    for(let [x, y] of trust) {
        temp[x]--;
        temp[y]++;
    }

    for(let i=1;i<=n;i++) if(temp[i] == n-1) return i;

    return -1;
};