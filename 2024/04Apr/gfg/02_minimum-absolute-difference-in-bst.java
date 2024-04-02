class Node {
    int data;
    Node left;
    Node right;
};

class Solution
{
    
    int absolute_diff(Node root)
    {
        //Your code here
        int[] last = {0};
        int[] minDiff = {1000000000};
        
        inorderTraversal(root, last, minDiff);
        
        return minDiff[0];
    }
    
    public static void inorderTraversal(Node root, int[] last, int[] minDiff) {
        if(root == null) return;
        
        inorderTraversal(root.left, last, minDiff);
        if(last[0] != 0) if(minDiff[0] > (root.data - last[0])) minDiff[0] = root.data - last[0];
        last[0] = root.data;
        inorderTraversal(root.right, last, minDiff);
    }
}