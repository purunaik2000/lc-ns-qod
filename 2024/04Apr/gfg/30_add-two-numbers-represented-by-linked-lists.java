class Node {
    int data;
    Node next;

    Node(int d) {
        data = d;
        next = null;
    }
}

class Solution{
    //Function to add two numbers represented by linked list.
    static Node addTwoLists(Node num1, Node num2){
        // code here
        // return head of sum list
        while((num1 != null) && (num1.data == 0)) num1 = num1.next;
        while((num2 != null) && (num2.data == 0)) num2 = num2.next;
        
        num1 = reverse(num1);
        num2 = reverse(num2);
        
        Node res = new Node(0);
        Node head = res;
        int carry = 0;
        while((num1 != null) && (num2 != null)) {
            int sum = num1.data + num2.data + carry;
            res.next = new Node(sum%10);
            carry = sum/10;
            res = res.next;
            num1 = num1.next;
            num2 = num2.next;
        }
        
        while(num1 != null) {
            int sum = num1.data + carry;
            res.next = new Node(sum%10);
            carry = sum/10;
            res = res.next;
            num1 = num1.next;
        }
        
        while(num2 != null) {
            int sum = num2.data + carry;
            res.next = new Node(sum%10);
            carry = sum/10;
            res = res.next;
            num2 = num2.next;
        }
        
        while(carry > 0) {
            res.next = new Node(carry%10);
            res = res.next;
            carry = carry/10;
        }
        
        if(head.next == null) return head;
        return reverse(head.next);
    }
    
    public static Node reverse(Node head) {
        Node prev = null;
        while(head != null) {
            Node next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}