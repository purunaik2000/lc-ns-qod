import java.util.*;

class Solution {
    int findMaxSum(int n, int m, int mat[][]) {
        // code here
        if(n < 3) return -1;
        
        int max = 0;
        for(int r=0;r<n-2;r++) {
            for(int c=2;c<m;c++) {
                max = Math.max(max, mat[r][c] + mat[r][c-1] + mat[r][c-2]
                        + mat[r+1][c-1] + mat[r+2][c] + mat[r+2][c-1] + mat[r+2][c-2]);
            }
        }
        
        return max;
    }
};