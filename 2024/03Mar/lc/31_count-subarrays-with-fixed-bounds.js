/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */

var countSubarrays = function(nums, minK, maxK) {
    let min = 0, max = 0;
    let start = -1, count = 0;
    for(let i=0;i<nums.length;i++) {
        if((nums[i] < minK) || (nums[i] > maxK)) {
            start = i;
            min = i+1;
            max = i+1;
            continue;
        }

        if(nums[min] >= nums[i]) min = i;
        if(nums[max] <= nums[i]) max = i;

        if((nums[min] == minK) && (nums[max] == maxK)) {
            count += Math.min(min, max) - start;
        }
    }

    return count;
};