import java.util.*;

class Solution
{
    //Function to return a list containing the union of the two arrays.
    public static ArrayList<Integer> findUnion(int arr1[], int arr2[], int n, int m)
    {
        // add your code here
        HashSet<Integer> set = new HashSet<Integer>();
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        for(int e : arr1) set.add(e);
        for(int e : arr2) set.add(e);
        
        for(int e : set) list.add(e);
        
        return list;
    }
}