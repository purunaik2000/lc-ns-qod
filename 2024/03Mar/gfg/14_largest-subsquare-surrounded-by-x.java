class Solution {
    int largestSubsquare(int n, char a[][]) {
        // code here
        int[][][] dp = new int[n+1][n+1][2];
        
        int x, y;
        
        for(int i=0;i<n;i++) {
            x = 0;
            y = 0;
            for(int j=0;j<n;j++) {
                if(a[i][j] == 'X') x++;
                else x = 0;
                
                if(a[j][i] == 'X') y++;
                else y = 0;
                
                dp[i][j][0] = x;
                dp[j][i][1] = y;
            }
        }
        
        int cur = 0, max = 0;
        
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                cur = Math.min(dp[i][j][0], dp[i][j][1]);
                while(cur > max) {
                    if((dp[i][j-cur+1][1] >= cur) && (dp[i-cur+1][j][0] >= cur)) {
                        max = cur;
                        break;
                    }else {
                        cur--;
                    }
                }
            }
        }
        
        return max;
    }
};