class GfG
{
    Node mergeResult(Node node1, Node node2)
    {
	// Your code here
	    Node head1 = reverse(node1);
	    Node head2 = reverse(node2);
	    
	    Node head = new Node(0);
	    Node res = head;
	    while((head1 != null) && (head2 != null)) {
	        if(head1.data < head2.data) {
	            head.next = head2;
	            head2 = head2.next;
	        }else {
	            head.next = head1;
	            head1 = head1.next;
	        }
	        head = head.next;
	    }
	    
	    if(head1 != null) head.next = head1;
	    else if(head2 != null) head.next = head2;
	    
	    return res.next;
    }
    
    public static Node reverse(Node head) {
        Node prev = null;
        Node cur = head;
        while(cur != null) {
            Node next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
}