class Solution {
    int minRow(int n, int m, int a[][]) {
        // code here
        int min = m, ind = 0;
        
        for(int i=0;i<n;i++) {
            int sum = 0;
            for(int e : a[i]) sum += e;
            if(sum < min) {
                min = sum;
                ind = i;
            }
        }
        
        return ind+1;
    }
};