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
    if (n <= 3) return 1;

    let dp = 2;
    let dp1 = 1;
    let dp2 = 1;
    let dp3 = 1;
    let dp4 = 2;

    for (let i = 5; i <= n; i++) {
        dp = dp4 + dp1;
        dp1 = dp2;
        dp2 = dp3;
        dp3 = dp4;
        dp4 = dp;
    }

    return dp;
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