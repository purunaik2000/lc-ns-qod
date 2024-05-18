import java.util.*;

class Solution {
    public int findPeakElement(List<Integer> a) {
        // Code here
        int l = 0, r = a.size() - 1;
        while(l < r) {
            int mid = l + (r-l)/2;
            if(a.get(mid) < a.get(r)) l = mid + 1;
            else if(a.get(mid) < a.get(l)) r = mid - 1;
            if(a.get(mid + 1) > a.get(mid)) l = mid + 1;
            else r = mid;
        }
        
        return a.get(l);
    }
}