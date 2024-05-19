/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    const n = nums.length;
    const dp = Array.from({length: n}, () => [-1, -1]);

    function cal(i, j) {
        if(i == n) return j ? 0 : -Infinity;
        if(dp[i][j] != -1) return dp[i][j];
        return dp[i][j] = Math.max(nums[i] + cal(i+1, j), (nums[i]^k) + cal(i+1, 1-j));
    }

    return cal(0, 1);
};