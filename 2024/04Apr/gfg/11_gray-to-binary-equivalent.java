import java.util.*;

class Solution{
    
    // function to convert a given Gray equivalent n to Binary equivalent.
    public static int grayToBinary(int n) {
        
        // Your code here
        if(n == 0) return 0;
        int len = (int)(Math.log(n)/Math.log(2)) + 1;
        int[] bits = new int[len];
        
        int i = len;
        while(i-- > 0) {
            bits[i] = n%2;
            n /= 2;
        }
        
        for(i=1;i<len;i++) bits[i] ^= bits[i-1];
        
        i = 0;
        
        for(int d : bits) i = i*2 + d;
        
        return i;
        
    }
       
}