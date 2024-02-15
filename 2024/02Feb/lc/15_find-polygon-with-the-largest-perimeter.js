/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>a-b);
    let res = -1;
    let cur = nums[0] + nums[1];
    for(let i=2;i<nums.length;i++) {
        if(nums[i] < cur) {
            cur += nums[i];
            res = Math.max(res, cur);
        }
        else cur += nums[i];
    }
    return res;
};