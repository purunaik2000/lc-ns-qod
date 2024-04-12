class Solution {
    static long pairAndSum(int n, long arr[]) {
        // code here
        long[] bits = new long[32];
        
        for(long e : arr) {
            int i = 0;
            while(e > 0L) {
                if(e%2L == 1L) bits[i]++;
                e >>= 1;
                i++;
            }
        }
        
        long res = 0;
        long i = 1L;
        for(long e : bits) {
            res += i * e * (e-1L) / 2L;
            i *= 2L;
        }
        
        return res;
    }
}