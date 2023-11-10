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

function solution(n, t){
    // Code here
    t %= 2*(n-1);
    if(t<n) return t+1;
    return 2*n-t-1;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, t] = readLine().split(' ').map(Number);
        let res = solution(n, t);
        console.log(res);
    }
}