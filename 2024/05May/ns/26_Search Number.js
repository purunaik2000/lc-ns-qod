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
    n = BigInt(n)
    const v = [9n, 1n, 3n, 5n, 7n];
    let ans = 0n;
    while (n > 0n) {
        ans = (ans * 10n) + v[Number(n % 5n)]
 
        if (n % 5n == 0n) {
            n /= 5n;
            n--;
        }
        else n /= 5n;
    }
    const q = [];
    while (ans > 0n) {
        q.push(ans % 10n);
        ans /= 10n;
    }
    while (q.length != 0) {
        ans = ans * 10n + q[0];
        q.shift();
    }
    return ans.toString().substring(-1);
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