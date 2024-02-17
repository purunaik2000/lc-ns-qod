import java.util.*;

class Solution {
    
    public boolean countSub(long arr[], long n)
    {
        // Your code goes here
        int len = arr.length;
        Queue<Integer> q = new LinkedList<>();
        q.add(1);
        
        while(!q.isEmpty()) {
            int x = q.remove();
            int left = 2*x;
            int right = 2*x+1;
            
            if(left <= len) {
                if(arr[left-1] > arr[x-1]) return false;
                q.add(left);
            }
            
            if(right <= len) {
                if(arr[right-1] > arr[x-1]) return false;
                q.add(right);
            }
        }
        
        return true;
    }
}