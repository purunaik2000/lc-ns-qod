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

class Solution
{
    boolean check(Node root)
    {
	// Your code here
	    int[] temp = {-1};
	    return dfs(root, temp, 0);
    }
    
    public static boolean dfs(Node root, int[] temp, int height) {
        if(root == null) return true;
        
        if(root.left == null  && root.right == null) {
            if(temp[0] == -1) {
                temp[0] = height;
                return true;
            }
            return height == temp[0];
        }
        
        boolean left = dfs(root.left, temp, height+1);
        if(!left) return false;
        boolean right = dfs(root.right, temp, height+1);
        return right;
    }
}