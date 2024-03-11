class Solution {
    int countPairs(int mat1[][], int mat2[][], int n, int x) {
        // code here
        int count = 0, lr = 0, lc = 0, rr = n-1, rc = n-1;
        
        while((rr >= 0) && (lr < n)) {
            if((mat1[lr][lc] + mat2[rr][rc]) < x) {
                lc++;
                if(lc == n) {
                    lc = 0;
                    lr++;
                }
            }else if((mat1[lr][lc] + mat2[rr][rc]) > x) {
                rc--;
                if(rc == -1) {
                    rc = n-1;
                    rr--;
                }
            }else {
                count++;
                
                lc++;
                if(lc == n) {
                    lc = 0;
                    lr++;
                }
                
                rc--;
                if(rc == -1) {
                    rc = n-1;
                    rr--;
                }
            }
        }
        
        return count;
    }
}