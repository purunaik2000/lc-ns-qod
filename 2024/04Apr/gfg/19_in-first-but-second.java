import java.util.*;

class Solution
{
    ArrayList<Integer> findMissing(int a[], int b[], int n, int m)
    {
        HashSet<Integer> set = new HashSet<Integer>();
        
        for(int e : b) set.add(e);
        
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        for(int e : a) if(!set.contains(e)) list.add(e);
        
        return list;
    }
}