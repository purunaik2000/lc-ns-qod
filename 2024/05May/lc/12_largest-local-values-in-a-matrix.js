/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    return new Array(grid.length - 2)
        .fill(0)
        .map((x, i) =>
            new Array(grid.length - 2)
                .fill(0)
                .map((y, j) =>
                    Math.max(
                        grid[i][j],
                        grid[i + 1][j],
                        grid[i + 2][j],
                        grid[i][j + 1],
                        grid[i + 1][j + 1],
                        grid[i + 2][j + 1],
                        grid[i][j + 2],
                        grid[i + 1][j + 2],
                        grid[i + 2][j + 2]
                    )
                )
        );
};
