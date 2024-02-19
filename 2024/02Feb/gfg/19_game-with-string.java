import java.util.*;

class Solution{
    static int minValue(String s, int k){
        // code here
        int[] temp = new int[26];
        Arrays.fill(temp, 0);
        
        for(int i=0;i<s.length();i++) {
            temp[s.charAt(i)-'a']++;
        }
        
        Arrays.sort(temp);
        
        int cur = 24;
        while(cur >= 0) {
            if(temp[cur] < temp[cur+1]) {
                int x = temp[cur+1] - temp[cur];
                if(k > (x*(25-cur))) {
                    k -= x*(25-cur);
                    for(int i=cur+1;i<26;i++) temp[i] = temp[cur];
                }else {
                    int y = k/(25-cur);
                    for(int i=cur+1;i<26;i++) temp[i] -= y;
                    int z = k%(25-cur);
                    for(int i=cur+1;i<=cur+z;i++) temp[i]--;
                    int res = 0;
                    for(int i=0;i<26;i++) res += temp[i]*temp[i];
                    return res;
                }
            }else cur--;
        }
        
        int x = k/26;
        Arrays.fill(temp, temp[0]-x);
        int y = k%26;
        for(int i=0;i<y;i++) temp[i]--;
        int res = 0;
        for(int i=0;i<26;i++) res += temp[i]*temp[i];
        
        return res;
    }
}