class Solution {
    public int kPalindrome(String str, int n, int k) {
        // code here
        int[][][] dp = new int[n+1][n+1][k+1];
        
        return dfs(str, 0, n-1, k, dp) ? 1 : 0;
    }
    
    public static boolean dfs(String str, int left, int right, int k, int[][][] dp) {
        if(left >= right) return true;
        if(dp[left][right][k] != 0) return dp[left][right][k] == 1;
        boolean res = (str.charAt(left) == str.charAt(right)) && dfs(str, left+1, right-1, k, dp);
        res = res || ((k > 0) && dfs(str, left+1, right, k-1, dp));
        res = res || ((k > 0) && dfs(str, left, right-1, k-1, dp));
        res = res || ((k > 1) && dfs(str, left+1, right-1, k-2, dp));
        dp[left][right][k] = res ? 1 : 2;
        return res;
    }
}

// The above code is TLE for n, k > 100, TC -> 3^n

class Solution2 {
    public int kPalindrome(String str, int n, int k) {
        // code here
        StringBuilder rev = new StringBuilder(str);
        rev.reverse();
        return (isPalindrom(str, rev.toString(), n, n) <= (k*2)) ? 1 : 0;
    }
    
    public static int isPalindrom(String s, String t, int m, int n) {
        int[][] dp = new int[m+1][n+1];
        for(int i=0;i<=m;i++) {
            for(int j=0;j<=n;j++) {
                if(i==0) dp[i][j] = j;
                else if(j == 0) dp[i][j] = i;
                else if(s.charAt(i-1) == t.charAt(j-1)) dp[i][j] = dp[i-1][j-1];
                else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[m][n];
    }
}

// The above code have TC -> n*n and work till n, k < 1000