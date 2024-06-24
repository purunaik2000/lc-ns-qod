class Solution {
    static long sumMatrix(long n, long q) {
        // code here
        long min = Math.max(1, q - n);
        long max = Math.min(n, q - 1);
        
        if(min <= max) return max - min + 1;
        return 0;
    }
}