/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let res = Math.pow(2, cols - 1) * rows;

    for (let col = 1; col < cols; col++) {
        let bits = 0;
        for (let row = 0; row < rows; row++) {
            if (grid[row][col] == grid[row][0]) bits++;
        }
        res += Math.pow(2, cols - col - 1) * Math.max(bits, rows - bits);
    }

    return res;
};
