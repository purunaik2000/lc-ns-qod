class Solution {
    longSubarrWthSumDivByK(arr,n,k){
        //code here
        let res = 0, sum = 0, map = new Map([[0, -1]]);
        for(let i=0;i<n;i++) {
            sum += arr[i];
            let mod = ((sum%k)+k)%k;
            if(map.has(mod)) res = Math.max(res, i-map.get(mod));
            else map.set(mod, i);
        }
        return res;
    }
}