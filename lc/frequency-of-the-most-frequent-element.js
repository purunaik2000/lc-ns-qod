/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let max = 1, sum = 0, l = 0;
    for(let r=0;r<nums.length;r++) {
        sum += nums[r];
        if((r-l+1)*nums[r] > sum+k) sum -= nums[l++];
        max = Math.max(max, r-l+1);
    }
    return max;
};