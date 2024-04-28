class Node {
    int data;
    Node next;
    Node(int d)  { data = d;  next = null; }
}

class Solution {
    Node deleteMid(Node head) {
        // This is method only submission.
        // You only need to complete the method.
        if(head.next == null) return null;
        
        Node slow = head;
        Node fast = head.next.next;
        
        while((fast != null) && (fast.next != null)) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        slow.next = slow.next.next;
        
        return head;
    }
}