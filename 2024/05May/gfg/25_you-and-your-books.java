class Solution {
    long max_Books(int arr[], int n, int k) {
        // Your code here
        long count = 0L, max = 0L;
        for(int h : arr) {
            if(h <= k) {
                count += h;
                max = Math.max(max, count);
            }else count = 0L;
        }
        return max;
    }
}