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

function fact (n) {
    let res = 1n;
    for(let i=2;i<=n;i++) res *= BigInt(i)
    return res;
}

function solution(n, x, y, prices) {
    let discount = 0;
    for(let price of prices) discount += Math.min(price, y);
    return discount > x ? "COUPON" : "NO COUPON";
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, x, y] = readLine().trim().split(" ").map(Number);
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, x, y, arr);
        console.log(res);
    }
}