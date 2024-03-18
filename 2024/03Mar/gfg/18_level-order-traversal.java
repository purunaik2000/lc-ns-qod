import java.util.*;

class Node
{
    int data;
    Node left, right;

    Node(int item)
    {
        data = item;
        left = right = null;
    }
}

class Solution
{
    //Function to return the level order traversal of a tree.
    static ArrayList <Integer> levelOrder(Node root) 
    {
        // Your code here
        ArrayList<Integer> list = new ArrayList<Integer>();
        Queue<Node> q = new LinkedList<Node>();
        
        q.add(root);
        
        while(q.size() > 0) {
            int size = q.size();
            while(size-- > 0) {
                Node temp = q.remove();
                list.add(temp.data);
                
                if(temp.left != null) q.add(temp.left);
                if(temp.right != null) q.add(temp.right);
            }
        }
        
        return list;
    }
}