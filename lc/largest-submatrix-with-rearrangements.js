/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    let n = matrix.length, m = matrix[0].length, res = 0;
    for(let i=1;i<n;i++) {
        for(let j=0;j<m;j++) {
            if(matrix[i][j]) matrix[i][j] += matrix[i-1][j];
        }
    }
    for(let i=0;i<n;i++) {
        matrix[i].sort((a,b)=>b-a);
        for(let j=0;j<m;j++) {
            res = Math.max(res, (j+1)*matrix[i][j]);
        }
    }
    return res;
};