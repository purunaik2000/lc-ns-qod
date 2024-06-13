class Solution
{
  public int padovanSequence(int n)
    {
        //code here.
        int prev = 1, cur = 1, next = 1;
        for(int i=2;i<n;i++) {
            int temp = (prev + cur)%1000000007;
            prev = cur;
            cur = next;
            next = temp;
        }
        return next;
    }
    
}