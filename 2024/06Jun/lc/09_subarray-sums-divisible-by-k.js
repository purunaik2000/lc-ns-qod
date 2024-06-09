/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
    let c = 0, s = k * 3e8, m = [1, ...Array(k - 1).fill(0)];
    for (let i = 0; i < nums.length; i++) c += m[(s += nums[i]) % k]++;
    return c;
};