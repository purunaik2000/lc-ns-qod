/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
    const dp = new Array(grid.length).fill(null).map(() => new Array(grid[0].length).fill(-1));

    function dfs(i, last) {
        if (i == grid.length) return 0;

        if (dp[i][last] !== -1) return dp[i][last];

        let res = Infinity;

        for (let j = 0; j < grid[0].length; j++) {
            if (j !== last)
                res = Math.min(res, grid[i][j] + dfs(i + 1, j));
        }

        return dp[i][last] = res;
    }

    let ans = Infinity;

    for (let j = 0; j < grid[0].length; j++) {
        ans = Math.min(ans, grid[0][j] + dfs(1, j));
    }

    return ans;
};