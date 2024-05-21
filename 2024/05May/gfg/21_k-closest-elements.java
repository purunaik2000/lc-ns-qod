class Solution {
    int[] printKClosest(int[] arr, int n, int k, int x) {
        // code here
        int l = 0, r = n - 1;
        while(l < r) {
            int mid = l + (r - l) / 2;
            if(arr[mid] == x) {
                l = mid;
                break;
            }
            if(arr[mid] < x) l = mid + 1;
            else r = mid;
        }
        
        if(arr[l] > x) l--;
        r = l + 1;
        if((l >= 0) && (arr[l] == x)) l--;
        else if((r < n) && (arr[r] == x)) r--;
        
        int[] res = new int[k];
        int i = 0;
        
        while((i < k) && (l >= 0) && (r < n)) {
            if(x - arr[l] < arr[r] - x) res[i++] = arr[l--];
            else res[i++] = arr[r++];
        }
        
        while((i < k) && (l >= 0)) res[i++] = arr[l--];
        while((i < k) && (r < n)) res[i++] = arr[r++];
        
        return res;
    }
}