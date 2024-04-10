class Solution{
    static int findSingle(int n, int arr[]){
        // code here
        int res = 0;
        
        for(int e : arr) res ^= e;
        
        return res;
    }
}