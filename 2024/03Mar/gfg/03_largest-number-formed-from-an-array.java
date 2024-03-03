import java.util.*;

class Solution {
    String printLargest(int n, String[] arr) {
        // code here
        Arrays.sort(arr, new Comparator<String>() {
            @Override public int compare(String x, String y) {
                String xy = x+y;
                String yx = y+x;
                
                return -xy.compareTo(yx);
            }
        });
        
        String res = arr[0];
        
        for(int i=1;i<n;i++) res = res + arr[i];
        
        return res;
    }
}