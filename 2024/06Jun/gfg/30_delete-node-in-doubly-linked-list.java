class Node {
    int data;
    Node next;
    Node prev;
    Node(int x){
        data = x;
        next = null;
        prev = null;
    }
}

class Solution {
    public Node deleteNode(Node head, int x) {
        Node temp = new Node(0);
        temp.next = head;
        Node cur = temp;
        Node prev = null;
        while(x-- > 0) {
            prev = cur;
            cur = cur.next;
        }
        Node next = cur.next;
        prev.next = next;
        if(next != null) next.prev = prev;
        return temp.next;
    }
}