import java.util.*;

class Node
{
    int data;
    Node next;

    Node(int key)
    {
        data = key;
        next = null;
    }
}

class Solution {

    public static int countPairs(LinkedList<Integer> head1, LinkedList<Integer> head2,
                          int x) {
        // add your code here
        HashSet<Integer> set = new HashSet<Integer>();
        
        if(head1.size() > head2.size()) {
            LinkedList<Integer> temp = head1;
            head1 = head2;
            head2 = temp;
        }
        
        for(int i=0;i<head1.size();i++) set.add(head1.get(i));
        
        int count = 0;
        
        for(int i=0;i<head2.size();i++) if(set.contains(x - head2.get(i))) count++;
        
        return count;
    }
}