class Solution
{
    public static int distributeCandy(Node root)
    {
        //code here
        int[] res = {0};
        
        dfs(root, res);
        
        return res[0];
    }
    
    public static int dfs(Node root, int[] res) {
        if(root == null) return 0;
        
        int left = dfs(root.left, res);
        int right = dfs(root.right, res);
        
        res[0] += Math.abs(left) + Math.abs(right);
        
        return root.data + left + right - 1;
    }
}