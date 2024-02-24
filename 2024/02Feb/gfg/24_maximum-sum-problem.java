class Solution
{
    public int maxSum(int n) 
    { 
        //code here.
        int x = n/2;
        int y = n/3;
        int z = n/4;
        if(x + y + z > n) {
            x = maxSum(x);
            y = maxSum(y);
            z = maxSum(z);
        }
        return Math.max(n, x+y+z);
    } 
}