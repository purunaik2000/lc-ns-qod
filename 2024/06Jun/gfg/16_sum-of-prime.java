import java.util.*;

class Solution {
    public static ArrayList<Integer> getPrimes(int n) {
        // code here
        boolean[] primes = new boolean[n+1];
        ArrayList<Integer> res = new ArrayList<Integer>();
        for(int i=2;i<=n;i++) {
            if(!primes[i]) {
                for(int j=2*i;j<=n;j+=i) primes[j] = true;
            }
        }
        for(int i=2;i<=n/2;i++) {
            if(!primes[i] && !primes[n-i]) {
                res.add(i);
                res.add(n-i);
                return res;
            }
        }
        res.add(-1);
        res.add(-1);
        return res;
    }
}