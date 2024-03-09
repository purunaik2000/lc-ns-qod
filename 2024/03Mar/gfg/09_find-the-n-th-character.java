class Solution
{
    public char nthCharacter(String s, int r, int n)
    {
        //code here
        r = (int)Math.pow(2, r);
        
        int i = n/r;
        
        if(n%r == 0) return s.charAt(i);
        return cal(s.charAt(i) == '1', r/2, n%r);
    }
    
    public static char cal(boolean x, int r, int n) {
        if(r == 0) return x ? '1' : '0';
        return cal(n>=r ? !x : x, r/2, n%r);
    }
}