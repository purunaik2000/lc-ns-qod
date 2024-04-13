class Solution {
    static Long reversedBits(Long x) {
        // code here
        long res = 0L;
        long y = 2147483648L;
        
        while(x > 0L) {
            if(x%2L == 1L) res += y;
            x /= 2L;
            y /= 2L;
        }
        
        return res;
    }
};