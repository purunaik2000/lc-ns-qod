/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let cur = 1, i = 0, res = 0;
    while(cur <= n) {
        if(i < nums.length && nums[i] <= cur) cur += nums[i++];
        else {
            cur *= 2;
            res++;
        }
    }
    return res;
};