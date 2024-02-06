import java.util.*;

class Node  
{ 
    int data; 
    Node left, right; 
   
    public Node(int d)  
    { 
        data = d; 
        left = right = null; 
    } 
}

class Solution
{
    //Function to return count of nodes at a given distance from leaf nodes.
    int printKDistantfromLeaf(Node root, int k)
    {
        // Write your code here
        if(root == null) return 0;
        
        ArrayList<Node> list = new ArrayList<Node>();
        HashSet<Node> res = new HashSet<Node>();
        
        dfs(root, list, res, k);
        
        return res.size();
    }
    
    public static void dfs(Node root, ArrayList<Node> list, HashSet<Node> res, int k) {
        if(root.left == null && root.right == null) {
            if(k == 0) res.add(root);
            else if(list.size() >= k) {
                res.add(list.get(list.size() - k));
            }
            return;
        }
        
        list.add(root);
        
        if(root.left != null) dfs(root.left, list, res, k);
        if(root.right != null) dfs(root.right, list, res, k);
        
        list.remove(list.size() - 1);
    }

}
