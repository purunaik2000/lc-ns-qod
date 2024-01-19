/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    let n = matrix.length;
    let dp = matrix[n - 1];
    let row = n;
    while (--row) {
        let prev = Infinity;
        for (let i = 0; i < n - 1; i++) {
            let temp = dp[i];
            dp[i] = Math.min(prev, dp[i], dp[i + 1]) + matrix[row - 1][i];
            prev = temp;
        }
        dp[n - 1] = Math.min(prev, dp[n - 1]) + matrix[row - 1][n - 1];
    }
    return Math.min(...dp);
};