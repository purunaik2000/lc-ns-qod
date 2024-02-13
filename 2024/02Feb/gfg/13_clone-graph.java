import java.util.*;

class Node{
    int val;
    ArrayList<Node> neighbors;
    public Node(){
        val = 0;
        neighbors = new ArrayList<>();
    }

    public Node(int val){
        this.val = val;
        neighbors = new ArrayList<>();
    }

    public Node(int val, ArrayList<Node> neighbors){
        this.val = val;
        this.neighbors = neighbors;
    }
}

class Solution{
    Node cloneGraph(Node node){
        Queue<Node> q = new LinkedList<Node>();
        HashMap<Node, Node> map = new HashMap<Node, Node>();
        
        q.add(node);
        map.put(node, new Node(node.val));
        
        while(!q.isEmpty()) {
            Node temp = q.poll();
            Node clone = map.get(temp);
            
            if(temp.neighbors.size() != 0) {
                ArrayList<Node> list = temp.neighbors;
                for(int i=0;i<list.size();i++) {
                    Node temp1 = map.get(list.get(i));
                    
                    if(temp1==null) {
                        q.add(list.get(i));
                        temp1 = new Node(list.get(i).val);
                        map.put(list.get(i), temp1);
                    }
                    
                    clone.neighbors.add(temp1);
                }
            }
        }
        
        return map.get(node);
    }
}