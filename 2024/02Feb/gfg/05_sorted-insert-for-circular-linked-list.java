class Node
{
    int data;
    Node next;

    Node(int x){
        data = x;
        next = null;
    }
}

class Solution {
    public Node sortedInsert(Node head, int data) {
        // code here
        if(head == null ){
            head = new Node(data);
            head.next = head;
            return head;
        }
        if(head.data >= data) {
            Node temp = head;
            while(temp.next != head) temp = temp.next;
            Node node = new Node(data);
            temp.next = node;
            node.next = head;
            head = node;
            return head;
        }
        Node temp = head;
        while(temp.next != head) {
            if(temp.next.data > data) break;
            temp = temp.next;
        }
        
        Node node = new Node(data);
        
        node.next = temp.next;
        temp.next = node;
        
        return head;
    }
}