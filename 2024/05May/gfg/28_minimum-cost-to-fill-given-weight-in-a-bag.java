class Solution {
    public static int minimumCost(int n, int w, int[] cost) {
        // code here
        int[][] dp = new int[n+1][w+1];
        
        for(int i=0;i<=w;i++) dp[0][i] = Integer.MAX_VALUE;
        
        for(int i=1;i<=n;i++) {
            for(int j=1;j<=w;j++) {
                if(i>j) dp[i][j] = dp[i-1][j];
                else dp[i][j] = Math.min(dp[i][j-i] + cost[i-1], dp[i-1][j]);
            }
        }
        
        if(dp[n][w] == Integer.MAX_VALUE) return -1;
        
        return dp[n][w];
    }
}
