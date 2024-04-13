/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let res = 0;

    for(let row of matrix) row.forEach((e, i) => row[i] = Number(e));

    for(let i=1;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++) {
            if(matrix[i][j] == 1) matrix[i][j] += matrix[i-1][j];
        }
    }

    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[0].length;j++) {
            let min = Infinity;
            for(let k=j;k<matrix[0].length;k++) {
                if(matrix[i][k] == 0) break;
                min = Math.min(min, matrix[i][k]);
                res = Math.max(res, min*(k-j+1));
            }
        }
    }

    return res;
};