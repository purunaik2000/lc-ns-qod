class Solution {
    
    countPairs(head1, head2, x)
    {
        //your code here
        const set = new Set();
        while(head1 != null) {
            set.add(head1.data);
            head1 = head1.next;
        }
        
        let res = 0;
        
        while(head2 != null) {
            if(set.has(x - head2.data)) res++;
            head2 = head2.next;
        }
        
        return res;
    }
}