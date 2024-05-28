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
    n = BigInt(n);
    let l = 1n, r = 6700n;
    let res = 1n;
    while(l<=r) {
        let mid = l + (r-l)/2n;
        if((mid*(mid+1n)*(2n*mid+1n)/6n) <= n) {
            res = mid;
            l = mid+1n;
        }else r = mid-1n;
    }
    return Number(res);
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