class Solution{
    
    // A[]: input array
    // N: size of array
    // Function to find the maximum index difference.
    static int maxIndexDiff(int a[], int n) { 
        
        // Your code here
        int[] leftMin = new int[n];
        int[] rightMax = new int[n];
        
        leftMin[0] = a[0];
        rightMax[n-1] = a[n-1];
        
        for(int i=1;i<n;i++) leftMin[i] = Math.min(leftMin[i-1], a[i]);
        for(int i=n-2;i>=0;i--) rightMax[i] = Math.max(rightMax[i+1], a[i]);
        
        int i = 0, j = 0, diff = -1;
        while(i<n && j<n) {
            if(leftMin[i] <= rightMax[j]) {
                diff = Math.max(diff, j-i);
                j++;
            }else i++;
        }
        
        return diff;
    }
}