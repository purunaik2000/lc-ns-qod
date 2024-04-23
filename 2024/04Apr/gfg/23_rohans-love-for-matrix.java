class Solution {
    static int firstElement(int n) {
        // code here
        if(n < 3) return 1;
        
        int prev = 1, next = 2;
        
        for(int i=3;i<n;i++) {
            int temp = (prev + next) % 1000000007;
            prev = next;
            next = temp;
        }
        
        return next;
    }
}