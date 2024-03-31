class Node
{
    int key;
    Node left, right;

    Node(int x)
    {
        key = x;
        left = right = null;
    }

}
class Solution {
    public static int findMaxForN(Node root, int n) {
        // Add your code here.
        int res = root.key;
        while(root != null) {
            if(root.key == n) return root.key;
            else if(root.key > n) {
                root = root.left;
            }else {
                res = root.key;
                root = root.right;
            }
        }
        
        if(res > n) return -1;
        
        return res;
    }
}