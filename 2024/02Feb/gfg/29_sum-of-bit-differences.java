class Solution {
    long sumBitDifferences(int[] arr, int n) {
        // code here
        long sum = 0L;
        long[] temp = new long[32];
        for(int i=0;i<n;i++) {
            int x = 0;
            while(arr[i] > 0) {
                if(arr[i]%2 != 0) temp[x]++;
                arr[i] /= 2;
                x++;
            }
        }
        
        for(int i=0;i<32;i++) {
            sum += temp[i]*((long)n - temp[i])*2L;
        }
        
        return sum;
    }
}