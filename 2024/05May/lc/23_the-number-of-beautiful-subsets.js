/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    let c = 0, n = nums.length;
    if (n == 0) return 0;
    for (let i = 0; i < n; i++) {
        let b = [];
        for (let j = i + 1; j < n; j++) {
            if (Math.abs(nums[i] - nums[j]) != k) b.push(nums[j]);
        }
        c += 1 + beautifulSubsets(b, k);
    }
    return c;
};