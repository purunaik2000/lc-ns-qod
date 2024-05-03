class Node
{
    int data;
    Node left, right;
   Node(int item)    {
        data = item;
        left = right = null;
    }
}

class Tree
{
     // Recursive function to print right view of a binary tree.
     ArrayList<Integer> Kdistance(Node root, int k)
     {
          // Your code here
          ArrayList<Integer> list = new ArrayList<Integer>();
          dfs(root, k, list, 0);
          return list;
     }
     
     static void dfs(Node root, int k, ArrayList<Integer> list, int n) {
         if(root == null) return;
         if(n == k) {
             list.add(root.data);
             return;
         }
         dfs(root.left, k, list, n+1);
         dfs(root.right, k, list, n+1);
     }
}