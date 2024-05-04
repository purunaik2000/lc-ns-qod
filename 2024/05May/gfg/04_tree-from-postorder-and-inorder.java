class Node
{
    int data;
    Node left;
    Node right;

        Node(int value)
    {
        data = value;
        left = null;
        right = null;
    }
}


class GfG
{
    //Function to return a tree created from postorder and inoreder traversals.
    Node buildTree(int in[], int post[], int n) {
        // Your code here
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for(int i=0;i<n;i++) map.put(in[i], i);
        
        index = n-1;
        
        return build(in, post, 0, n-1, map);
    }
    
    static int index;
    
    static Node build(int[] in, int[] post, int start, int end, HashMap<Integer, Integer> map) {
        if(start > end) return null;
        
        Node node = new Node(post[index--]);
        
        if(start == end) return node;
        
        int i = map.get(node.data);
        
        node.right = build(in, post, i+1, end, map);
        node.left = build(in, post, start, i-1, map);
        
        return node;
    }
}