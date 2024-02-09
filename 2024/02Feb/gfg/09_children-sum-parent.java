class Node{
	int data;
	Node left,right;
	
	Node(int key)
	{
	    data = key;
	    left = right = null;
	}
}

class Solution
{
    //Function to check whether all nodes of a tree have the value 
    //equal to the sum of their child nodes.
    public static int isSumProperty(Node root)
    {
        // add your code here
        int res = dfs(root);
        
        return res != -1 ? 1 : 0;
        
    }
    
    public static int dfs(Node root) {
        if(root == null) return 0;
        
        int left = dfs(root.left);
        if(left == -1) return -1;
        
        int right = dfs(root.right);
        if(right == -1) return -1;
        
        if((left != 0 || right != 0) && (root.data != left + right)) return -1;
        return root.data;
    }
}