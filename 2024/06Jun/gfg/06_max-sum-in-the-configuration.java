class Solution {
    long max_sum(int a[], int n) {
        // Your code here
        long sum = 0L, left = 0L, max;
        
        for(int e : a) sum += e;
        
        for(long i=0L;i<n;i++) left += i*a[(int)i];
        
        max = left;
        
        for(long i=1L;i<n;i++) {
            left -= sum - a[(int)i - 1] - (1L*( n - 1 )) * a[(int)i - 1];
            if(left > max) max = left;
        }
        
        return max;
    }
}