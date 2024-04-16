import java.util.*;

class Solution {
    public static int minimizeDifference(int n, int k, int[] arr) {
        // code here
        int[] max = new int[n];
        int[] min = new int[n];
        
        max[n-1] = arr[n-1];
        min[n-1] = arr[n-1];
        
        for(int i=n-2;i>=0;i--) {
            max[i] = Math.max(max[i+1], arr[i]);
            min[i] = Math.min(min[i+1], arr[i]);
        }
        
        int ans = max[k] - min[k];
        
        int maxi = arr[0], mini = arr[0];
        
        for(int i=0;i<n-k;i++) {
            ans = Math.min(ans, Math.max(max[i+k],maxi) - Math.min(min[i+k], mini));
            
            maxi = Math.max(maxi, arr[i]);
            mini = Math.min(mini, arr[i]);
        }
        
        ans = Math.min(ans, maxi-mini);
        
        return ans;
    }
}