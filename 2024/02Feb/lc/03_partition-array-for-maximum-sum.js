/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;

    const dp = Array(k+1).fill(0);

    for (let start = n - 1; start >= 0; start--) {
        let currMax = 0;
        const end = Math.min(n, start + k);

        for (let i = start; i < end; i++) {
            currMax = Math.max(currMax, arr[i]);
            dp[start % (k+1)] = Math.max(dp[start % (k+1)], dp[(i + 1) % (k+1)] + currMax * (i - start + 1));
        }
    }
    return dp[0];
};