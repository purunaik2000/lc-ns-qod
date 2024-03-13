class Solution {
    public int[] matrixDiagonally(int[][] mat) {
        int n = mat.length;
        int[] res = new int[n*n];
        int i = 0, j = 0, k = 0;
        boolean isUp = true;
        
        while(k<n*n) {
            if (isUp) { 
                for (; i >= 0 && j < n; j++, i--) { 
                    res[k++] = mat[i][j];
                }
                
                if (i < 0 && j <= n - 1) i = 0; 
                if (j == n) { 
                    i = i + 2; 
                    j--; 
                }
            }else { 
                for (; j >= 0 && i < n; i++, j--) { 
                    res[k++] = mat[i][j];
                } 
  
                if (j < 0 && i <= n - 1) j = 0; 
                if (i == n) { 
                    j = j + 2; 
                    i--; 
                }
            }
            
            isUp = !isUp;
        }
        
        return res;
    }
}