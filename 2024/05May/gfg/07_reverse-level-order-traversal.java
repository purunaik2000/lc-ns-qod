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

class Tree
{
    public ArrayList<Integer> reverseLevelOrder(Node node) 
    {
        // code here
        ArrayList<ArrayList<Integer>> list = new ArrayList<ArrayList<Integer>>();
        
        Queue<Node> q = new LinkedList<Node>();
        q.add(node);
        
        while(!q.isEmpty()) {
            int size = q.size();
            ArrayList<Integer> temp = new ArrayList<Integer>();
            while(size-- > 0) {
                Node cur = q.remove();
                temp.add(cur.data);
                if(cur.left != null) q.add(cur.left);
                if(cur.right != null) q.add(cur.right);
            }
            list.add(temp);
        }
        
        ArrayList<Integer> res = new ArrayList<Integer>();
        
        int i = list.size()-1;
        
        for(;i>=0;i--) {
            ArrayList<Integer> temp = list.get(i);
            for(int e : temp) res.add(e);
        }
        
        return res;
    }
}  