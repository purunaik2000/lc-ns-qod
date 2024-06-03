class Solution {
    static int numberOfConsecutiveOnes(int n) {
        // code here
        long x = 1, y = 1;
        
        for(int i=1;i<n;i++) {
            long temp = x;
            x += y;
            x %= mod;
            y = temp;
        }
        
        return (int)( ( power(n) + mod - (x + y) % mod ) % mod);
    }
    
    static long mod = 1000000007;
    
    static long power(long n) {
        if(n == 1) return 2;
        
        long pow = power(n/2);
        
        return (pow * pow * (n%2 == 0 ? 1 : 2)) % mod;
    }
}