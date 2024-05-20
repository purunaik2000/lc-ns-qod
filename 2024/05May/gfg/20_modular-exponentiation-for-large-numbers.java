class Solution {
    /**
    * @param number x
    * @param number n
    * @param number M

    * @returns number
    */
    PowMod(x, n, M) {
        // code here
        const mod = BigInt(M);
        function get(x, n) {
            if(n == 1n) return x%mod;
            let res = get(x, n/2n);
            return (res*res*(n%2n==1n ? x : 1n))%mod;
        }
        return Number(get(BigInt(x), BigInt(n)));
    }
}