import java.util.*;

class Solution {
    public boolean canPair(int[] nums, int k) {
        // Code here
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for(int i=0;i<nums.length;i++) {
            int x = nums[i]%k;
            if(map.containsKey(x) && map.get(x)>0) {
                map.put(x, map.get(x)-1);
            }else map.put((k-x)%k, 1);
        }
        
        for(int key : map.keySet()) {
            if(map.get(key) > 0) return false;
        }
        return true;
    }
}