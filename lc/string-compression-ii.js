/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    let n = s.length;
    let dp = new Array(110).fill(0).map(x=>new Array(110).fill(9999));
    dp[0][0] = 0;
    for(let i=1;i<=n;i++) {
        for(let j=0;j<=k;j++) {
            let c = 0, d = 0;
            for(let x=i;x>=1;x--) {
                if(s[x-1] == s[i-1]) c++;
                else d++;
                if(j-d >= 0) dp[i][j] = Math.min(dp[i][j], dp[x-1][j-d]+1+(c>=100 ? 3 : c>=10 ? 2 : c>1 ? 1 : 0));
            }
            if(j>0) dp[i][j] = Math.min(dp[i][j], dp[i-1][j-1]);
        }
    }
    return dp[n][k];
};