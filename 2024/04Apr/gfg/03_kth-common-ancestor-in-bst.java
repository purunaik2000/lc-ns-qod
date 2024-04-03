class Node {
    int data;
    Node left, right;

    public Node(int d) {
        data = d;
        left = right = null;
    }
}

class Solution {
    public int kthCommonAncestor(Node root, int k, int x, int y) {
        // code here
        int[] res = {-1};
        
        dfs(root, k, x, y, res);
        
        return res[0];
    }
    
    public static int dfs(Node root, int k, int x, int y, int[] res) {
        int a;
        if((root.data < x) && (root.data < y)) a = dfs(root.right, k, x, y, res);
        else if((root.data > x) && (root.data > y)) a = dfs(root.left, k, x, y, res);
        else {
            if(k == 1) res[0] = root.data;
            return 2;
        }
        
        if(a == -1) return -1;
        if(a == k) res[0] = root.data;
        return a+1;
    }
}