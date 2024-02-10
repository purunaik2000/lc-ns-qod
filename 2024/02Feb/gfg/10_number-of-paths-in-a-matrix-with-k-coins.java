class Solution {
    long numberOfPath(int n, int k, int [][]arr) {
        // code here
        long[][][] dp = new long[n][n][k];
        
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                for(int x=0;x<k;x++) {
                    dp[i][j][x] = -1L;
                }
            }
        }
        
        return backTrack(n, 0, 0, 0, k, arr, dp);
    }
    
    public static long backTrack(int n, int i, int j, int k, int sum, int[][] arr, long[][][] dp) {
        if(i==n || j==n || (k+arr[i][j] > sum)) return 0L;
        
        if(i==n-1 && j==n-1) {
            if(k+arr[i][j] == sum) return 1L;
            return 0L;
        }
        
        if(dp[i][j][k] == -1L) {
            long right = backTrack(n, i+1, j, k+arr[i][j], sum, arr, dp);
            long down = backTrack(n, i, j+1, k+arr[i][j], sum, arr, dp);
            
            dp[i][j][k] = right + down;
        }
        
        return dp[i][j][k];
    }
}