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

function solution(n){
    // Code here
    if(n<4) return n;
    let prev = 2, cur = 3;
    for(let i=4;i<=n;i++) {
        [prev, cur] = [cur, (prev+cur)%(1e9+7)];
    }
    return cur;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = parseInt(readLine());
        let res = solution(n);
        console.log(res);
    }
}