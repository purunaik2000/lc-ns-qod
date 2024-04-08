import java.util.*;

class solve
{
    //Function to find the maximum possible amount of money we can win.
    static long countMaximum(int n, int arr[])
    {
        // Your code here
        int[][] dp = new int[n][n];
        
        for(int[] row : dp) Arrays.fill(row, -1);
        
        return play(arr, dp, 0, n-1, n);
    }
    
    public static int play(int[] arr, int[][] dp, int l, int r, int n) {
        if(l>r) return 0;
        if(l==r) return dp[l][r] = arr[l];
        if(dp[l][r] != -1) return dp[l][r];
        
        int left = arr[l] + Math.min(play(arr, dp, l+2, r, n), play(arr, dp, l+1, r-1, n));
        int right = arr[r] + Math.min(play(arr, dp, l+1, r-1, n), play(arr, dp, l, r-2, n));
        
        return dp[l][r] = Math.max(left, right);
    }
}