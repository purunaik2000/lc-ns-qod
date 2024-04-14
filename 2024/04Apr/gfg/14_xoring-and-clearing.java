class Solution {
    public void printArr(int n, int arr[]) {
        // code here
        for(int i=0;i<n-1;i++) {
            System.out.print(arr[i] + " ");
        }
        
        System.out.println(arr[n-1]);
    }

    public void setToZero(int n, int arr[]) {
        // code here
        Arrays.fill(arr, 0);
    }

    public void xor1ToN(int n, int arr[]) {
        // code here
        for(int i=0;i<n;i++) {
            arr[i] ^= i;
        }
    }
}