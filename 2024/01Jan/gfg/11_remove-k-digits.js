class Solution {
    removeKdigits(s, k) {
        // code here
        if(k==s.length) return 0;
        let res = [s[0]];
        for(let i=1;i<s.length;i++) {
            while((Number(s[i]) < Number(res[res.length-1])) && (k>0)) {
                res.pop();
                k--;
            }
            res.push(s[i]);
        }
        while(k>0) {
            res.pop();
            k--;
        }
        
        let i=0;
        while(i<res.length && res[i]==0) i++;
        if(i==res.length) return 0;
        return res.slice(i).join('');
    }
}