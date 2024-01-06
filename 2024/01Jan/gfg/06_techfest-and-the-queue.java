class Solution {
    public static long sumOfPowers(long x, long y) {
        // code here
        int a = (int)x;
        int b = (int)y;
        long[] fact = new long[b+1];
        for(int i=2;i<=b;i++) {
            if(fact[i] != 0L ) continue;
            for(int j=i;j<=b;j+=i) {
                int z = j;
                while(z>=i) {
                    if(z%i==0) {
                        fact[j]++;
                        z /= i;
                    }else break;
                }
            }
        }
        long res = 0L;
        for(int i=a;i<=b;i++) res += fact[i];
        return res;
    }
}