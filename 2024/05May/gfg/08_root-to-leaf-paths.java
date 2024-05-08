import java.util.*;

class Node
{
    int data;
    Node left;
    Node right;

    Node(int data)
    {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {
    public static ArrayList<ArrayList<Integer>> Paths(Node root) {
        // code here
        ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
        
        ArrayList<Integer> cur = new ArrayList<Integer>();
        
        dfs(root, cur, res);
        
        return res;
    }
    
    static void dfs(Node root, ArrayList<Integer> cur, ArrayList<ArrayList<Integer>> res) {
        cur.add(root.data);
        if((root.left == null) && (root.right == null)) {
            ArrayList<Integer> clone = (ArrayList)cur.clone();
            res.add(clone);
        }
        
        if(root.left != null) dfs(root.left, cur, res);
        if(root.right != null) dfs(root.right, cur, res);
        
        cur.remove(cur.size() - 1);
    }
}