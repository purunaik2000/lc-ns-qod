import java.util.*;

class Solution
{
    int  subsequenceCount(String s, String t)
    {
	    // Your code here	
	    int[][] dp = new int[s.length()][t.length()];
	    
	    for(int i=0;i<s.length();i++) {
	        Arrays.fill(dp[i], -1);
	    }
	    
	    return find(0, 0, s, t, dp);
    }
    
    public static int find(int i, int j, String s, String t, int[][] dp) {
        if(j >= t.length()) return 1;
        if(i >= s.length()) return 0;
        
        if(dp[i][j] != -1) return dp[i][j];
        
        int ways = 0;
        
        for(int x=i;x<s.length();x++) {
            if(t.charAt(j) == s.charAt(x)) {
                ways += find(x+1, j+1, s, t, dp);
                ways %= 1000000007;
            }
        }
        
        dp[i][j] = ways;
        return ways;
    }
}