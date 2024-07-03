class Node {
    int data;
    Node next;
    Node(int data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    public Node removeAllDuplicates(Node head) {
        // code here
        Node dummy = new Node(0);
        
        dummy.next = head;
        
        Node prev = dummy;
        
        boolean remove = false;
        
        while(head != null) {
            if(head.next != null && head.next.data == head.data) {
                head.next = head.next.next;
                remove = true;
            } else {
                if(remove) {
                    remove = false;
                    prev.next = head.next;
                }else {
                    prev = prev.next;
                }
                
                head = head.next;
            }
        }
        
        return dummy.next;
    }
}