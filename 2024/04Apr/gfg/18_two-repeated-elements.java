import java.util.*;

class Solution
{
    //Function to find two repeated elements.
    public int[] twoRepeated(int arr[], int n)
    {
        // Your code here
        int[] res = {-1, -1};
        
        for(int i=0;i<=n+1;i++) {
            if(arr[Math.abs(arr[i])] < 0) {
                if(res[0] == -1) res[0] = Math.abs(arr[i]);
                else res[1] = Math.abs(arr[i]);
            }else arr[Math.abs(arr[i])] *= -1;
        }
        
        return res;
    }
    
}