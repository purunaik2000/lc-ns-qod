class Node
{
    int data;
    Node left, right;
  Node(int item)    {
        data = item;
        left = right = null;
    }
}

class GfG {
    int findDist(Node root, int a, int b) {
        // Your code here
        // String[] temp = new String[2];
        
        // temp[0] = "-1";
        // temp[1] = "-1";
        
        // dfs(root, a, b, temp, "");
        
        // int min = Math.min(temp[0].length(), temp[1].length());
        
        // int i = 0;
        // while(i<min) {
        //     if(temp[0].charAt(i) == temp[1].charAt(i)) i++;
        // }
        
        // return temp[0].length() + temp[1].length() - 2*i;
        
        Node lca = findLCA(root, a, b);
        
        int x = dist(root, a, 0);
        int y = dist(root, b, 0);
        int z = dist(root, lca.data, 0);
        
        return x+y-2*z;
    }
    
    public static Node findLCA(Node root, int a, int b) {
        if(root == null) return null;
        
        if(root.data == a || root.data == b) return root;
        
        Node left = findLCA(root.left, a, b);
        Node right = findLCA(root.right, a, b);
        
        if(left == null) return right;
        if(right == null) return left;
        
        return root;
    }
    
    public static int dist(Node root, int a, int d) {
        if(root == null) return -1;
        
        if(root.data == a) return d;
        
        int left = dist(root.left, a, d+1);
        int right = dist(root.right, a, d+1);
        
        if(left != -1) return left;
        if(right != -1) return right;
        
        return -1;
    }
    
    // public static void dfs(Node root, int a, int b, String[] temp, String s) {
    //     if(root == null) return;
        
    //     if(root.data == a || root.data == b) {
    //         if(temp[0] == "-1") temp[0] = s;
    //         else {
    //             temp[1] = s;
    //             return;
    //         }
    //     }
    //     dfs(root.left, a, b, temp, s+"l");
        
    //     if(temp[1] != "-1") return;
        
    //     dfs(root.right, a, b, temp, s+"r");
    // }
}