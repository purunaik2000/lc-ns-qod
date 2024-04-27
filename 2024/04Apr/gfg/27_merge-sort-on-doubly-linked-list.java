class Node
{
    int data;
    Node next, prev;
    Node(int data)
    {
        this.data = data;
        next = prev = null;
    }
}

class Solution {
    // Function to sort the given doubly linked list using Merge Sort.
    static Node sortDoubly(Node head) {
        // add your code here
        if (head == null || head.next == null) return head;
        
        Node second = split(head);
 
        // Recur for left and right halves
        head = sortDoubly(head);
        second = sortDoubly(second);
 
        // Merge the two sorted halves
        return merge(head, second);
    }
    
    public static Node merge(Node first, Node second) {
        // If first linked list is empty
        if (first == null) {
            return second;
        }
 
        // If second linked list is empty
        if (second == null) {
            return first;
        }
 
        // Pick the smaller value
        if (first.data < second.data) {
            first.next = merge(first.next, second);
            first.next.prev = first;
            first.prev = null;
            return first;
        }
        else {
            second.next = merge(first, second.next);
            second.next.prev = second;
            second.prev = null;
            return second;
        }
    }
    
    public static Node split(Node head) {
        Node fast = head, slow = head;
        while (fast.next != null
               && fast.next.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        Node temp = slow.next;
        slow.next = null;
        return temp;
    }
}