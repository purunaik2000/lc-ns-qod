import java.util.*;

class Node{
    int data;
    Node left,right;
    Node(int d){
        data=d;
        left=right=null;
    }
}

class Tree {
    public static ArrayList <Integer> diagonalSum(Node root) 
    {
        // code here.
        Queue<Node> q = new LinkedList<Node>();
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        int count = 0, sum = 0, last = 0;
        
        while(root != null) {
            if(root.left != null) {
                q.add(root.left);
                count++;
            }
            
            sum += root.data;
            root = root.right;
            
            if(root == null) {
                if(!q.isEmpty()) root = q.poll();
                
                if(last == 0) {
                    list.add(sum);
                    sum = 0;
                    last = count;
                    count = 0;
                }
                last--;
            }
        }
        
        return list;
    }
}