class Solution {
    /*You are required to complete this method*/
    boolean isToeplitz(int mat[][]) {
        // Your code here
        int n = mat.length;
        int m = mat[0].length;
        for(int i=0;i<n;i++) if(!check(mat, i+1, 1, n, m, mat[i][0])) return false;
        for(int j=1;j<m;j++) if(!check(mat, 1, j+1, n, m, mat[0][j])) return false;
        return true;
    }
    
    static boolean check(int[][] mat, int i, int j, int n, int m, int num) {
        while(i < n && j < m) if(mat[i++][j++] != num) return false;
        return true;
    }
}