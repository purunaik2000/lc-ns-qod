class Solution{
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    public void threeWayPartition(int array[], int a, int b)
    {
        // code here 
        int l = 0, r = array.length-1, i = 0;
        
        while(i<=r) {
            if(array[i] < a) {
                swap(array, l++, i++);
            }else if(array[i] > b) {
                swap(array, r--, i);
            }else i++;
        }
    }
    
    public static void swap(int[] arr, int l, int r) {
        int temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}