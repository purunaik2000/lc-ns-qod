class Solution {
    public int findCoverage(int[][] matrix) {
        // code here
        int res = 0;
        int n = matrix.length;
        int m = matrix[0].length;
        
        for(int i=0;i<n;i++) {
            for(int j=0;j<m;j++) {
                if(matrix[i][j] == 0) {
                    if(i > 0) res += matrix[i-1][j];
                    if(i < n - 1) res += matrix[i+1][j];
                    if(j > 0) res += matrix[i][j-1];
                    if(j < m - 1) res += matrix[i][j+1];
                }
            }
        }
        
        return res;
    }
}