/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let n = grid.length, m = grid[0].length;
    let rowOnes = new Array(n).fill(0);
    let colOnes = new Array(m).fill(0);
    let rowZeros = new Array(n).fill(0);
    let colZeros = new Array(m).fill(0);
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            if(grid[i][j]) {
                rowOnes[i]++;
                colOnes[j]++;
            } else {
                rowZeros[i]++;
                colZeros[j]++;
            }
        }
    }
    let res = new Array(n).fill(0).map(e=>new Array(m));
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            res[i][j] = rowOnes[i] + colOnes[j] - rowZeros[i] - colZeros[j];
        }
    }
    return res;
};