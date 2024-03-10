import java.util.*;

class Solution {
    String removeDuplicates(String str) {
        HashSet<Character> set = new HashSet<Character>();
        String res = "";
        
        for(int i=0;i<str.length();i++) {
            if(!set.contains(str.charAt(i))) {
                res = res + str.charAt(i);
                set.add(str.charAt(i));
            }
        }
        
        return res;
    }
}