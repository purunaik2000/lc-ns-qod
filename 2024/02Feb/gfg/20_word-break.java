import java.util.*;

class Solution
{
    public static int wordBreak(String A, ArrayList<String> B )
    {
        //code here
        return check(A, B, 0);
    }
    
    public static int check(String A, ArrayList<String> B, int inx) {
        if(inx >= A.length()) return 1;
        for(int i=0;i<B.size();i++) {
            String s = B.get(i);
            if(s.length() > A.length()-inx) continue;
            int k = inx;
            for(int j=0;j<s.length();j++) {
                if(A.charAt(k) == s.charAt(j)) k++;
                else break;
            }
            if(k-s.length() == inx) {
                int x = check(A, B, k);
                if(x == 1) return 1;
            }
        }
        return 0;
    }
}