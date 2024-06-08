class Solution {
    public int findExtra(int n, int arr1[], int arr2[]) {
        // add code here.
        int l = 0, r = n-1;
        while(l < r) {
            int mid = l + (r - l)/2;
            if(arr1[mid] != arr2[mid]) r = mid;
            else l = mid + 1;
        }
        return l;
    }
}