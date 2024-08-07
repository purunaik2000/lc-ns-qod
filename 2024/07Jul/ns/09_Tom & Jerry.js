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

function solution(n, m) {
    const dp = new Array(m).fill(0);
    for(let i=2;i<m;i++) {
        if(dp[i] == 0) {
            for(let j=i;j<m;j+=i) {
                dp[j]++;
            }
        }
    }

    let res = 0;
    for(let i=n;i<m;i++) res += dp[i];
    return res;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, m] = readLine().trim().split(" ").map(Number);
        let res = solution(n, m);
        console.log(res);
    }
}