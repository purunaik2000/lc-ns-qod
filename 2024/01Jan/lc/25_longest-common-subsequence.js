/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length, n = text2.length;
    let prev = new Array(m+1).fill(0);
    let cur = new Array(m+1);
    cur[0] = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(text2[i]==text1[j]) cur[j+1]=prev[j]+1;
            else cur[j+1] = Math.max(prev[j+1], cur[j]);
        }
        [cur, prev] = [prev, cur];
    }
    return prev[m];
};