class Solution
{
    public static Node sorted = null;
    public static Node insertionSort(Node head_ref)
    {
        //code here
        sorted = null; 
        Node current = head_ref; 
        // Traverse the given linked list and insert every 
        // node to sorted 
        while (current != null)  
        { 
            // Store next for next iteration 
            Node next = current.next; 
            // insert current in sorted linked list 
            sortedInsert(current); 
            // Update current 
            current = next; 
        } 
        // Update head_ref to point to sorted linked list 
        return sorted;
    }
    public static void sortedInsert(Node newnode)  
    { 
        /* Special case for the head end */
        if (sorted == null || sorted.data >= newnode.data)  
        { 
            newnode.next = sorted; 
            sorted = newnode; 
        } 
        else 
        { 
            Node current = sorted; 
            /* Locate the node before the point of insertion */
            while (current.next != null && current.next.data < newnode.data)  
            { 
                current = current.next; 
            } 
            newnode.next = current.next; 
            current.next = newnode; 
        } 
    } 
}