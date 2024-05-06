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

class Tree
{
    ArrayList<Integer> noSibling(Node node)
    {
        // code here
        ArrayList<Integer> list = new ArrayList<Integer>();
        dfs(node, false, list);
        if(list.size() == 0) list.add(-1);
        Collections.sort(list);
        return list;
    }
    
    static void dfs(Node root, Boolean isNotSibling, ArrayList<Integer> list) {
        if(root == null) return;
        if(isNotSibling) list.add(root.data);
        dfs(root.left, root.right == null, list);
        dfs(root.right, root.left == null, list);
    }
}