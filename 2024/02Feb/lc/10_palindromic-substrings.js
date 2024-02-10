/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length;
    const dp = Array.from(Array(n), ()=>Array(n).fill(false));
    let res = n;

    // Calculate for length 1
    // It will always true
    for(let i=0;i<n;i++) {
        dp[i][i] = true;
    }

    // Calculate for length 2
    // It will true if both char same
    for(let i=1;i<n;i++) {
        if(s[i-1] == s[i]) {
            dp[i-1][i] = true;
            res++;
        }
    }

    // Calculate for length 3 and above
    // It will true if start and end char are same
    // and start+1 to end-1 are already palidromic
    for(let len=3;len<=n;len++) {
        for(let i=0;i<=n-len;i++) {
            if(s[i] == s[i+len-1] && dp[i+1][i+len-2]) {
                dp[i][i+len-1] = true;
                res++;
            }
        }
    }

    return res;
};