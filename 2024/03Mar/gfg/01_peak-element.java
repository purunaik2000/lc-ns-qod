class Solution
{
	// Function to find the peak element
	// arr[]: input array
	// n: size of array a[]
	public int peakElement(int[] arr,int n)
    {
       //add code here.
       
       int l = 0, r = n-1;
       
       while(l<=r) {
           int mid = l + (r-l)/2;
           if(( mid == r || arr[mid] >= arr[mid+1]) && (mid == l || arr[mid] >= arr[mid-1])) return mid;
           if(arr[mid+1] > arr[mid]) l = mid+1;
           else r = mid-1;
       }
       
       return -1;
    }
}