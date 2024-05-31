class Solution {
    static int swapNibbles(int n) {
        // code here
        int[] bits = new int[8];
        int res = 0;
        for(int i=7;i>=0;i--) {
            bits[i] = n%2;
            n /= 2;
        }
        for(int i=4;i<12;i++) {
            res *= 2;
            res += bits[i%8];
        }
        return res;
    }
}