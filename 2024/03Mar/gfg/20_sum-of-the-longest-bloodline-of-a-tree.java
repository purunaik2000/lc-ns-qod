class Node {
    int data;
    Node left, right;
    
    public Node(int data){
        this.data = data;
    }
}

class Solution{
    public int sumOfLongRootToLeafPath(Node root)
    {
        //code here
        int[] maxSum = new int[1];
        int[] maxHeight = new int[1];
        
        dfs(root, 0, 0, maxSum, maxHeight);
        
        return maxSum[0];
    }
    
    public static void dfs(Node root, int sum, int height, int[] maxSum, int[] maxHeight) {
        if(root == null) {
            if(height > maxHeight[0]) {
                maxHeight[0] = height;
                maxSum[0] = sum;
            }else if(height == maxHeight[0]) {
                if(sum > maxSum[0]) maxSum[0] = sum;
            }
            return;
        }
        
        dfs(root.left, sum+root.data, height+1, maxSum, maxHeight);
        dfs(root.right, sum+root.data, height+1, maxSum, maxHeight);
    }
}