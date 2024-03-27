import java.util.*;

class Solution {
    public static int findShortestPath(int[][] mat) {
        // code here 
        int min = Integer.MAX_VALUE;
        int row = mat.length;
        int col = mat[0].length;
        int[][] dp = new int[row][col];
        boolean[][] visited = new boolean[row][col];
        
        for(int i=0;i<mat.length;i++) {
            Arrays.fill(dp[i], -1);
        }
        
        for(int i=0;i<mat.length;i++) {
            if(mat[i][0] != 0) min = Math.min(min, findPath(mat, i, 0, 0, row, col, dp, visited));
        }
        
        if(min == Integer.MAX_VALUE) return -1;
        
        return min;
    }
    
    public static int findPath(int[][] mat, int r, int c, int len, int row, int col, int[][] dp, boolean[][] visited) {
        if((r<0) || (r>=row) || (c<0)) return Integer.MAX_VALUE;
        if(c >= col) return 0;
        if(dp[r][c] != -1) return dp[r][c];
        if(visited[r][c]) return Integer.MAX_VALUE;
        visited[r][c] = true;
        if(!isSafe(mat, r, c, row, col)) return dp[r][c] = Integer.MAX_VALUE;
        
        dp[r][c] = Math.min(findPath(mat, r+1, c, len+1, row, col, dp, visited), 
            Math.min(findPath(mat, r-1, c, len+1, row, col, dp, visited), 
            Math.min(findPath(mat, r, c+1, len+1, row, col, dp, visited), 
            findPath(mat, r, c-1, len+1, row, col, dp, visited))));
            
        if(dp[r][c] != Integer.MAX_VALUE) dp[r][c]++;
        return dp[r][c];
    }
    
    public static boolean isSafe(int[][] mat, int r, int c, int row, int col) {
        if((r>0) && (mat[r-1][c] == 0)) return false;
        if((c>0) && (mat[r][c-1] == 0)) return false;
        if((r<row-1) && (mat[r+1][c] == 0)) return false;
        if((c<col-1) && (mat[r][c+1] == 0)) return false;
        
        return true;
    }
}