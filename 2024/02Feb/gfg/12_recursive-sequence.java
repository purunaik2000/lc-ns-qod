class Solution{
    static long sequence(int n){
        // code here
        long res = 0, cur = 1;
        
        for(int i=1;i<=n;i++) {
            long prod = 1;
            for(int j=0;j<i;j++) {
                prod *= cur;
                cur++;
                prod %= 1000000007L;
                cur %= 1000000007L;
            }
            res += prod;
            res %= 1000000007L;
        }
        
        return res;
    }
}