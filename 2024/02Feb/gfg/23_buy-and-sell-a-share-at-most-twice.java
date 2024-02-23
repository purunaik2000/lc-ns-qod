import java.util.*;

class Solution {
    public static int maxProfit(int n, int[] price) {
        // code here
        // int[] b = new int[3];
        // int[] s = new int[3];
        
        // Arrays.fill(b, 100001);
        
        // b[0] = price[0];
        
        // for(int i=0;i<n;i++) {
        //     for(int j=1;j<3;j++) {
        //         s[j] = Math.max(s[j], price[i] - b[j]);
        //         b[j] = Math.min(b[j], price[i] - s[j-1]);
        //     }
        // }
        
        // return s[2];
        
        int loss1 = Integer.MAX_VALUE, profit1 = 0;
        int loss2 = Integer.MAX_VALUE, profit2 = 0;
        
        for(int i=0;i<n;i++) {
            loss1 = Math.min(loss1, price[i]);
            profit1 = Math.max(profit1, price[i] - loss1);
            loss2 = Math.min(loss2, price[i] - profit1);
            profit2 = Math.max(profit2, price[i] - loss2);
        }
        
        return profit2;
    }
}