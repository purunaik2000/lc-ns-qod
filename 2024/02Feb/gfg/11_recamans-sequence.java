import java.util.*;

class Solution{
    static ArrayList<Integer> recamanSequence(int n){
        // code here
        HashSet<Integer> set = new HashSet<Integer>();
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        set.add(0);
        list.add(0);
        
        int last = 0;
        
        for(int i=1;i<=n;i++) {
            if(last-i > 0 && !set.contains(last-i)) {
                set.add(last-i);
                list.add(last-i);
                last = last - i;
            }else {
                set.add(last+i);
                list.add(last+i);
                last = last + i;
            }
        }
        
        return list;
    }
}