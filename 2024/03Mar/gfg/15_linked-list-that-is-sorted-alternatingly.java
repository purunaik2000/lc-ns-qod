class Node {
    int data;
    Node next;
    
    public Node (int data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    
    public Node sort(Node head){
         //your code here, return the head of the sorted list
         Node list1 = new Node(0);
         Node list2 = new Node(0);
         
         split(list1, list2, head);
         
         list1 = list1.next;
         list2 = reverse(list2.next);
         
         return merge(list1, list2);
         
    }
    
    public static void split(Node list1, Node list2, Node head) {
        Node temp1 = list1, temp2 = list2, temp = head;
        
        boolean isList1 = true;
        while(temp != null) {
            if(isList1) {
                temp1.next = temp;
                temp1 = temp1.next;
            }
            else {
                temp2.next = temp;
                temp2 = temp2.next;
            }
            
            isList1 = !isList1;
            temp = temp.next;
        }
        
        temp1.next = null;
        temp2.next = null;
    }
    
    public static Node reverse(Node head) {
        Node prev = null, cur = head, next = null;
        
        while(cur != null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        
        return prev;
    }
    
    public static Node merge(Node list1, Node list2) {
        Node head = new Node(0);
        Node temp = head;
        
        while((list1 != null) && (list2 != null)) {
            if(list1.data > list2.data) {
                temp.next = list2;
                list2 = list2.next;
            }else {
                temp.next = list1;
                list1 = list1.next;
            }
            
            temp = temp.next;
        }
        
        if(list1 != null) temp.next = list1;
        else temp.next = list2;
        
        return head.next;
    }
 
 
 }