class Solution {
    int[][] rotateMatrix(int k, int mat[][]) {
        // code here
        int n = mat[0].length;
        int m = mat.length;
        k %= n;
        int[][] res = new int[m][n];
        
        for(int r = 0; r < m; r++) {
            for(int c = 0; c < n; c++) {
                res[r][(n + c - k)%n] = mat[r][c];
            }
        }
        
        return res;
    }
}