class Solution {
    public int[] FindExitPoint(int n, int m, int[][] matrix) {
        // code here
        int[][] dir = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        return move(n, m, matrix, dir, 0, 0, 0);
    }
    
    public static int[] move(int n, int m, int[][] matrix, int[][] dir, int cur, int i, int j) {
        if((i<0) || (j<0) || (i==n) || (j==m)) {
            int[] res = new int[2];
            
            res[0] = i-dir[cur][0];
            res[1] = j-dir[cur][1];
            
            return res;
        }
        
        if(matrix[i][j] == 1) {
            matrix[i][j] = 0;
            cur = (cur+1)%4;
        }
        
        return move(n, m, matrix, dir, cur, i+dir[cur][0], j+dir[cur][1]);
    }
}