class Node
{
	Node next;
	int data;
	Node(int d)
	{
		data = d;
		next = null;
	}
}

class Solution
{
    /*You are required to complete this method*/
    Node delete(Node head, int k)
    {
	// Your code here	
	    Node newHead = new Node(0);
	    newHead.next = head;
	    
	    Node temp = newHead;
	    
	    while(temp.next != null) {
	        int x = k;
	        while((temp.next != null) && (--x > 0)) {
	            temp = temp.next;
	        }
	        if(temp.next != null) temp.next = temp.next.next;
	    }
	    
	    return newHead.next;
    }
}