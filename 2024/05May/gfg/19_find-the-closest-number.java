class Solution {
    public static int findClosest(int n, int k, int[] arr) {
        // code here
        if(k >= arr[n-1]) return arr[n-1];
        
        int l = 0, r = n - 1;
        while(l < r) {
            int mid = l + (r-l)/2;
            if(arr[mid] > k) r = mid;
            else {
                if(arr[mid + 1] >= k) {
                    int x = arr[mid + 1] - k;
                    int y = k - arr[mid];
                    return y < x ? arr[mid] : arr[mid + 1];
                }
                l = mid + 1;
            }
        }
        
        return arr[l];
    }
}