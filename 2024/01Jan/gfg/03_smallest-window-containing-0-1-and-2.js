class Solution {
    smallestSubstring(S)
    {
        //your code here
        let res = S.length+1;
        let obj = {
            0: 0,
            1: 0,
            2: 0
        }
        let l = 0;
        for(let r=0;r<S.length;r++) {
            obj[S[r]]++;
            while(obj[S[l]]>1) {
                obj[S[l++]]--;
            }
            if(obj[0] && obj[1] && obj[2]) res = Math.min(res, r-l+1);
        }
        return res>S.length ? -1 : res;
    }
}