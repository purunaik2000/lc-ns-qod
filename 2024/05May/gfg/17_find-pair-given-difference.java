import java.util.*;

class Solution {
    public int findPair(int n, int x, int[] arr) {
        // code here
        Arrays.sort(arr);
        int l = 0, r = 1;

        while (r < n) {
            if (r == l) {
                r++;
                continue;
            }
            int diff = arr[r] - arr[l];
            if (diff == x)
                return 1;
            if (diff < x)
                r++;
            else
                l++;
        }

        return -1;
    }
}