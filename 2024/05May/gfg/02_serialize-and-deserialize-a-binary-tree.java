class Node{
    int data;
    Tree left,right;
    Tree(int d){
        data=d;
        left=right=null;
    }
}

class Tree {
    // Function to serialize a tree and return a list containing nodes of tree.
    public ArrayList<Integer> serialize(Node root) {
        // code here
        ArrayList<Integer> list = new ArrayList<Integer>();
        if (root == null) return list;
        
        Stack<Node> s = new Stack<Node>();
        s.push(root);
 
        while (!s.isEmpty()) {
            Node t = s.pop();
 
            if (t == null) list.add(-1);
            else {
                list.add(t.data);
                s.push(t.right);
                s.push(t.left);
            }
        }
        return list;
    }
    
    static int t;
    
    public Node deSerialize(ArrayList<Integer> A) {
        // code here
        if (A.isEmpty()) return null;
        t = 0;
        return helper(A);
    }
 
    public static Node helper(ArrayList<Integer> list)
    {
        if (list.get(t) == -1) return null;
 
        Node root = new Node(list.get(t));
        t++;
        root.left = helper(list);
        t++;
        root.right = helper(list);
        return root;
    }
};