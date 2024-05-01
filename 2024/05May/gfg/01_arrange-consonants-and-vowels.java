class Node {
    char data;
    Node next;
    
    public Node(char data){
        this.data = data;
        next = null;
    }
}

class Solution {
    
    public Node arrangeCV(Node head){
        //write code here and return the head of changed linked list
        HashSet<Character> vowels = new HashSet<Character>();
        Node newHead = new Node('0');
        Node prev = newHead;
        
        vowels.add('a');
        vowels.add('e');
        vowels.add('i');
        vowels.add('o');
        vowels.add('u');
        newHead.next = head;
        
        while((head != null) && (vowels.contains(head.data))) {
            prev = head;
            head = head.next;
        }
        
        if(head == null) return newHead.next;
        
        Node tail = prev;
        
        while(head != null) {
            if(vowels.contains(head.data)) {
                Node next = head.next;
                head.next = tail.next;
                tail.next = head;
                tail = head;
                prev.next = next;
                head = next;
            }else {
                prev = head;
                head = head.next;
            }
        }
        
        return newHead.next;
    }
}