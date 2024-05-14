/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
    let max = 0,
        rows = grid.length,
        cols = grid[0].length;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] != 0) max = Math.max(max, dfs(row, col));
        }
    }

    return max;

    function dfs(row, col) {
        if (row >= rows) return 0;
        if (col >= cols) return 0;
        if (row < 0) return 0;
        if (col < 0) return 0;
        if (grid[row][col] == 0) return 0;

        const temp = grid[row][col];
        grid[row][col] = 0;

        const left = dfs(row, col - 1);
        const right = dfs(row, col + 1);
        const top = dfs(row - 1, col);
        const bottom = dfs(row + 1, col);

        grid[row][col] = temp;

        return Math.max(left, right, top, bottom) + grid[row][col];
    }
};
