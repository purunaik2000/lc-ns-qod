class Solution {
    public static int countWays(String s1, String s2) {
        // code here
        int n = s1.length(), m = s2.length();
        int[][] dp = new int[n][m];
        return dfs(0, 0, n, m, s1, s2, dp);
    }
    
    static int dfs(int i, int j, int n, int m, String s1, String s2, int[][] dp) {
        if(j == m) return 1;
        if(i == n) return 0;
        
        if(dp[i][j] != 0) return dp[i][j] - 1;
        
        int count = 0;
        
        for(int k=i;k<n;k++) {
            if(s1.charAt(k) == s2.charAt(j)) count = (count + dfs(k+1, j+1, n, m, s1, s2, dp))%1000000007;
        }
        
        dp[i][j] = count + 1;
        
        return count;
    }
}