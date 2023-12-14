process.stdin.setEncoding('utf8');
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

function solution(x, k){
    // Code here
    if(x<=k) return (2**(x-1))%(1e9+7);
    let ways = new Array(x+1);
    ways[0] = 1;
    ways[1] = 1;
    for(let i=2;i<=k;i++) ways[i] = (2*ways[i-1])%(1e9+7);
    for(let i=k+1;i<=x;i++) ways[i] = (1e9+7 + ways[i-1]*2 -ways[i-k-1])%(1e9+7);
    return ways[x];
 }
    
function main() {
    let t = parseInt(readLine());
    // let t = 1;
    while(t--){
        let [n, k] = readLine().split(' ').map(Number);
        let res = solution(n, k);
        console.log(res);
    }
}