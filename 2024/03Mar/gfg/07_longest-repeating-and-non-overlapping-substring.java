import java.util.*;

class Solution {
    static String longestSubstring(String s, int n) {
        // code here
        int[][] dp = new int[n+1][n+1];
        int max = 0, index = 0;
        
        for(int i=1;i<=n;i++) {
            for(int j=i+1;j<=n;j++) {
                if(s.charAt(i-1) == s.charAt(j-1) && dp[i-1][j-1] < (j-i)) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                    if(dp[i][j] > max) {
                        max = dp[i][j];
                        index = Math.max(index, i);
                    }
                }
            }
        }
        
        String res = "";
        
        if(max>0) {
            for(int i=index-max;i<index;i++) {
                res = res + s.charAt(i);
            }
        }else return "-1";
        
        return res;
    }
};