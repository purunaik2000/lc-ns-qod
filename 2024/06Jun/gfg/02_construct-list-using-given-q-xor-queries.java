import java.util.*;

class Solution {
    public static ArrayList<Integer> constructList(int q, int[][] queries) {
        // code here
        ArrayList<Integer> list = new ArrayList<Integer>();
        int xor = 0;
        
        for(int i=q-1;i>=0;i--) {
            if(queries[i][0] == 0) list.add(queries[i][1]^xor);
            else xor ^= queries[i][1];
        }
        
        list.add(xor);
        
        Collections.sort(list);
        
        return list;
    }
}