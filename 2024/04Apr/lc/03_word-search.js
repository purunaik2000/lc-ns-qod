/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const n=board.length, m = board[0].length;
    const l = word.length, visited = new Array(n);
    for(let i=0;i<n;i++){
        visited[i] = new Array(m).fill(false);
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(dfs(i,j,0)) return true;
        }
    }
    function dfs(r,c,i){
        if(i==l) return true;
        if(r<0 || c<0 || r==n || c == m || visited[r][c] || board[r][c]!=word[i]) return;
        visited[r][c] = true;
        let res = dfs(r-1, c, i+1) || dfs(r+1, c, i+1) || dfs(r, c-1, i+1) || dfs(r, c+1, i+1);
        visited[r][c] = false;
        return res;
    }
    return false;
};