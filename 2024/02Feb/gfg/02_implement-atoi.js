class Solution {
    atoi(s){
        //code here
        let i = 0;
        let sign = 1;
        if(s[i] == '-') {
            sign = -1;
            i++;
        }
        let res = 0;
        for(;i<s.length;i++) {
            if(isNaN(s[i])) return -1;
            res *= 10;
            res += +s[i];
        }
        
        if(res == 0) return res;
        
        return res*sign;
    }
}