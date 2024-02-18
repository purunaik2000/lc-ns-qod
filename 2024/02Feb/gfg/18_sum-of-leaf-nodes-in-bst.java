class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution
{
    public static int sumOfLeafNodes(Node root)
    {
        // code here 
        int[] sum = new int[1];
        sum[0] = 0;
        
        dfs(root, sum);
        
        return sum[0];
    }
    
    public static void dfs(Node root, int[] sum) {
        if(root == null) return;
        
        if(root.left == null && root.right == null) {
            sum[0] += root.data;
            return;
        }
        
        dfs(root.left, sum);
        dfs(root.right, sum);
    }
}