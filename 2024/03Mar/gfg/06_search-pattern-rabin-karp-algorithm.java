import java.util.*;

class Solution
{
    
    ArrayList<Integer> search(String pattern, String text)
    {
        // your code here
        int n = text.length();
        int m = pattern.length();
        int p = 0, t = 0, h = 1, q = 101, d = 256;
        
        for(int i=0;i<m-1;i++) h = (h*d)%q;
        
        for(int i=0;i<m;i++) {
            p = (d*p + pattern.charAt(i)) % q;
            t = (d*t + text.charAt(i)) % q;
        }
        
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        for(int i=0;i<=n-m;i++) {
            if(p == t) {
                int j;
                for(j=0;j<m;j++) {
                    if(pattern.charAt(j) != text.charAt(i+j)) break;
                }
                
                if(j == m) list.add(i+1);
            }
            
            if(i<n-m) {
                t = (d * (t - text.charAt(i) * h) + text.charAt(i+m)) % q;
                
                if(t<0) t += q;
            }
        }
        
        return list;
    }
}