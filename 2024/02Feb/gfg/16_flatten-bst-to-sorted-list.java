class Node {
    Node left;
    Node right;
    int data;

    Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    public Node flattenBST(Node root) {
        // Code here
        return flat(root);
    }
    
    public static Node flat(Node root) {
        if(root == null) return null;
        
        Node left = flat(root.left);
        Node right = flat(root.right);
        
        if(left != null) {
            Node temp = left;
            while(temp.right != null) temp = temp.right;
            temp.right = root;
        }
        
        root.right = right;
        root.left = null;
        
        return left != null ? left : root;
    }
}