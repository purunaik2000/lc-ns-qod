/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]=='1'){
                count++;
                dfs(i, j);
            }
        }
    }
    function dfs(i,j){
        grid[i][j]='0';
        if(j>0 && grid[i][j-1]=='1') dfs(i,j-1);
        if(j<grid[0].length-1 && grid[i][j+1]=='1') dfs(i,j+1);
        if(i>0 && grid[i-1][j]=='1') dfs(i-1,j);
        if(i<grid.length-1 && grid[i+1][j]=='1') dfs(i+1,j);
    }
    return count;
};