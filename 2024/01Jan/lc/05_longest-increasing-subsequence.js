/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = [nums[0]], l, r, m;
    for(let e of nums){
        l = 0, r = dp.length-1;
        while(l<=r){
            m = parseInt((l+r)/2);
            if(dp[m]<e) l = m+1;
            else r = m-1;
        }
        if(l>=dp.length) dp.push(e);
        else dp[l] = e;
    }
    return dp.length;
};