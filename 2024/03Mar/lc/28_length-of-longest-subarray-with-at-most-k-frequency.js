/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let max = 0, start = 0, map = new Map();
    for(let i=0;i<nums.length;i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        while(map.get(nums[i]) > k) {
            map.set(nums[start], map.get(nums[start]) - 1);
            start++;
        }

        max = Math.max(max, i-start+1);
    }

    return max;
};