class Solution {
    public Node subLinkedList(Node head1, Node head2) {
        // code here
        while(head1 != null) {
            if(head1.data == 0) head1 = head1.next;
            else break;
        }
        while(head2 != null) {
            if(head2.data == 0) head2 = head2.next;
            else break;
        }
        int maxNode = 0;
        Node temp1 = head1, temp2 = head2;
        while((temp1 != null) && (temp2 != null)) {
            if((maxNode == 0) && (temp1.data != temp2.data)) {
                if(temp1.data > temp2.data) maxNode = 1;
                else maxNode = 2;
            }
            temp1 = temp1.next;
            temp2 = temp2.next;
        }
        
        if((temp1 != null) || (temp2 != null)) {
            if(temp1 != null) maxNode = 1;
            else maxNode = 2;
        }
        
        if(maxNode == 0) {
            Node res = new Node(0);
            return res;
        }
        
        head1 = reverse(head1);
        head2 = reverse(head2);
        
        if(maxNode == 2) {
            Node temp = head1;
            head1 = head2;
            head2 = temp;
        }
        
        Node res = new Node(0);
        Node temp = res;
        
        int c = 0;
        
        while(head2 != null) {
            int cal = head1.data - head2.data + c;
            if(cal < 0) {
                c = -1;
                cal += 10;
            }else {
                c = 0;
            }
            Node node = new Node(cal);
            temp.next = node;
            temp = node;
            
            head1 = head1.next;
            head2 = head2.next;
        }
        
        while(head1 != null) {
            int cal = head1.data + c;
            if(cal < 0) {
                c = -1;
                cal += 10;
            }else {
                c = 0;
            }
            
            Node node = new Node(cal);
            temp.next = node;
            temp = node;
            
            head1 = head1.next;
        }
        
        res = res.next;
        
        res = reverse(res);
        
        while(res.data == 0) res = res.next;
        
        return res;
    }
    
    public static Node reverse(Node head) {
        Node prev = null;
        Node next = null;
        while(head != null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}