class Solution
{
    //Function to find sum of all possible substrings of the given string.
    public static long sumSubstrings(String s)
    {
    //Your code here
        long prev = (long)(s.charAt(0)-'0'), cur;
        long res = prev;
        
        for(int i=1;i<s.length();i++) {
            long n = (long)(s.charAt(i)-'0');
            cur = (((long)i+1L) * n + 10L*prev) % 1000000007L;
            res = (res + cur) % 1000000007L;
            prev = cur;
        }
        
        return res;
    }
}