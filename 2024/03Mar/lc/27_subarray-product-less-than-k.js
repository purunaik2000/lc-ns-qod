/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if((k == 0) || (k == 1)) return 0;
    let prod = 1, start = 0, count = 0;
    for(let i=0;i<nums.length;i++) {
        prod *= nums[i];
        while(prod >= k) {
            prod /= nums[start];
            start++;
        }

        count += i - start + 1;
    }

    return count;
};