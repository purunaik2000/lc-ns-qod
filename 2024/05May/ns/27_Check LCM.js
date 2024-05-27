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

function solution(n) {
    if(n < 3) return n;
    n = BigInt(n);
    if(n%2n == 1n) return (n*(n-1n)*(n-2n)).toString().substring(-1);
    else if(n%3n == 0n) return ((n-1n)*(n-2n)*(n-3n)).toString().substring(-1);
    else return (n*(n-1n)*(n-3n)).toString().substring(-1);
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let res = solution(n);
        console.log(res);
    }
}