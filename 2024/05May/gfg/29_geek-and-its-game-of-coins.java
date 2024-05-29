class Solution {
    public static int findWinner(int n, int x, int y) {
        // code here
        boolean[] dp = new boolean[n+1];
        for(int i=1;i<=n;i++) {
            if((x == i) || (y == i)) dp[i] = true;
            else {
                dp[i] = !dp[i-1];
                if(i > x) dp[i] |= !dp[i-x];
                if(i > y) dp[i] |= !dp[i-y];
            }
        }
        return dp[n] ? 1 : 0;
    }
}
