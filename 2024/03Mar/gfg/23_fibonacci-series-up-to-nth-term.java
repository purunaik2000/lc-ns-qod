class Solution {

    int[] Series(int n) {
        // code here
        int[] res = new int[n+1];
        
        res[0] = 0;
        res[1] = 1;
        
        for(int i=2;i<=n;i++) res[i] = (res[i-2] + res[i-1])%(1000000007);
        
        return res;
    }
}