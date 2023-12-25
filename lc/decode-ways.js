/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(-1);
    function dfs(i){
        if(i==n) return 1;
        if(dp[i]!=-1) return dp[i];
        if(s[i]=='0') return 0;
        if(Number(s[i])>2 || i==n-1 || (s[i]=='2' && Number(s[i+1])>6)){
            dp[i] = dfs(i+1);
        }else{
            dp[i] = dfs(i+1)+dfs(i+2);
        }
        return dp[i];
    }
    return dfs(0);
};