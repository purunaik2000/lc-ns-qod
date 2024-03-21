import java.util.*;

class Node
{
    int data;
    Node left,right;
    Node(int d)
    {
        data=d;
        left=right=null;
    }
}

class GFG
{
    //Function to store the zig zag order traversal of tree in a list.
	ArrayList<Integer> zigZagTraversal(Node root)
	{
	    //Add your code here.
	    Deque<Node> dq = new ArrayDeque<Node>();
	    ArrayList<Integer> list = new ArrayList<Integer>();
	    
	    boolean isLeft = false;
	    
	    dq.add(root);
	    
	    while(dq.size() > 0) {
	        int size = dq.size();
	        while(size-- > 0) {
	            Node node;
	            if(isLeft) {
	                node = dq.removeLast();
	                if(node.right != null) dq.addFirst(node.right);
	                if(node.left != null) dq.addFirst(node.left);
	            }else {
	                node = dq.removeFirst();
	                if(node.left != null) dq.addLast(node.left);
	                if(node.right != null) dq.addLast(node.right);
	            }
	            
	            list.add(node.data);
	        }
	        
	        isLeft = !isLeft;
	    }
	    
	    return list;
	}
}