class Solution {
    static String armstrongNumber(int n){
        // code here
        int x = n;
        int y = x%10;
        x /= 10;
        int z = x%10;
        x /= 10;
        
        return x*x*x + y*y*y + z*z*z == n ? "Yes" : "No";
    }
}