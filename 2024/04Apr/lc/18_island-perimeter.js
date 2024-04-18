/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const row = grid.length, col = grid[0].length;
    let perimeter = 0;
    for(let i=0;i<row;i++) {
        for(let j=0;j<col;j++) {
            if(grid[i][j] == 1) {
                if(i == 0) perimeter++;
                if(j == 0) perimeter++;
                if(i == row-1) perimeter++;
                if(j == col-1) perimeter++;

                if((j>0) && (grid[i][j-1] == 0)) perimeter++;
                if((j<col-1) && (grid[i][j+1] == 0)) perimeter++;
                if((i>0) && (grid[i-1][j] == 0)) perimeter++;
                if((i<row-1) && (grid[i+1][j] == 0)) perimeter++;
            }
        }
    }

    return perimeter;
};