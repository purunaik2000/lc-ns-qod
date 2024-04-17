import java.util.*;

class Solution {  
    static int countPairs(int arr[], int n) 
    {
         // Your code goes here
         for(int i=0;i<n;i++) arr[i] *= i;
         return mergeSort(arr, 0, n-1);
    }
    
    public static int mergeSort(int[] arr, int l, int r) {
        if(l >= r) return 0;
        
        int m = l + (r-l)/2;
        
        return mergeSort(arr, l, m) + mergeSort(arr, m+1, r) + merge(arr, l, m, r);
    }
    
    public static int merge(int[] arr, int l, int m, int r) {
        int[] left = Arrays.copyOfRange(arr, l, m+1);
        int[] right = Arrays.copyOfRange(arr, m+1, r+1);
        
        int inversionCount = 0, i = 0, j = 0, k = l;
        
        while((i<left.length) && (j<right.length)) {
            if(left[i] <= right[j]) {
                arr[k++] = left[i++];
            }else {
                arr[k++] = right[j++];
                inversionCount += m-l-i+1;
            }
        }
        
        while(i<left.length) arr[k++] = left[i++];
        while(j<right.length) arr[k++] = right[j++];
        
        return inversionCount;
    } 
}