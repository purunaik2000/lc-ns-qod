class Solution
{
    public void swapElements(int[] arr, int n)
    {
        // Code here
        if(n <= 2) return;
        
        int first = arr[0], second = arr[1];
        
        for(int i=2;i<n;i++) arr[i-2] = arr[i];
        
        if(n%2==0) {
            arr[n-2] = first;
            arr[n-1] = second;
        }else {
            arr[n-2] = second;
            arr[n-1] = first;
        }
    }
}