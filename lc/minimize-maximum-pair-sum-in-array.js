/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let max = -Infinity;
    let i=0, j=nums.length-1;
    while(i<j) {
        max = Math.max(nums[i]+nums[j], max);
        i++;
        j--;
    }
    return max;
};