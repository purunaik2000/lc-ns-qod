import java.util.*;

class Solution
{
    public List<String> AllPossibleStrings(String s)
    {
        // Code here
        List<String> list = new ArrayList<String>();
        for(int i=0;i<s.length();i++) {
            String t = "";
            t = t+s.charAt(i);
            list.add(t);
            traverse(t, s, i+1, list);
        }
        
        Collections.sort(list, (a,b)->a.compareToIgnoreCase(b));
        
        return list;
    }
    
    public static void traverse(String t, String s, int i, List<String> list) {
        if(i==s.length()) return;
        
        traverse(t, s, i+1, list);
        t = t+s.charAt(i);
        list.add(t);
        traverse(t, s, i+1, list);
    }
}