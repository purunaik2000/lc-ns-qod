import java.util.*;

class Solution {
    static List<Integer> jugglerSequence(int n) {
        // code here
        List<Integer> list = new ArrayList<Integer>();
        list.add(n);
        
        while(n != 1) {
            if(n%2 == 0) {
                n = (int)(Math.sqrt(n));
            }else {
                n = (int)(Math.sqrt(n)*n);
            }
            list.add(n);
        }
        
        return list;
    }
}