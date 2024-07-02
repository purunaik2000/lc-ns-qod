class Node {
    String data;
    Node next;
    Node(String data) {
        this.data = data;
    }
}

class Solution {
    public boolean compute(Node root) {
        Node temp = root;
        String s = "";
        String t = "";
        while(temp != null) {
            s = s + temp.data;
            temp = temp.next;
        }
        temp = reverse(root);
        while(temp != null) {
            t = t + temp.data;
            temp = temp.next;
        }
        return s == t;
    }
    
    static Node reverse(Node head) {
        Node prev = null, next = null;
        while(head != null) {
            next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}