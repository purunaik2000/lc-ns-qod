import java.util.*;

class Solution {
    long findSwapValues(long a[], int n, long b[], int m) {
        // Your code goes here
        Arrays.sort(a);
        Arrays.sort(b);
        
        long diff = 0L;
        for(long e : a) diff += e;
        for(long e : b) diff -= e;
        
        if(diff%2 != 0) return -1;
        
        diff /= 2;
        
        int i = 0, j = 0;
        while((i<n) && (j<m)) {
            if(a[i] - b[j] == diff) return 1;
            if(a[i] - b[j] > diff) j++;
            else i++;
        }
        
        return -1;
    }
}