// Your code hereprocess.stdin.setEncoding('utf8');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solution(n, arr) {
    const res = new Array(n+1).fill(0);
    const dp = Array.from({length: n}, () => new Array(n+1).fill(0));

    for(let i=0;i<n;i++) res[i+1] = res[i] + arr[i];

    return dfs(0, 1);

    function dfs(i, m) {
        if(m*2 >= n-i) return res[n] - res[i];
        if(dp[i][m]) return dp[i][m];
        let count = 0;
        for(let j=1;j<=m*2;j++) count = Math.max(count, res[n] - res[i] - dfs(i+j, Math.max(m, j)));
        return dp[i][m] = count;
    }
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}