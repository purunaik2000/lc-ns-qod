// Your code hereprocess.stdin.setEncoding('utf8');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on("data", function (data) {
    input_stdin += data;
});

process.stdin.on("end", function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solution(n, s) {
    // Code here
    if (Math.ceil(s / 9) > n) return -1;
    return (
        "9".repeat(parseInt(s / 9)) +
        (s % 9 > 0 ? s % 9 : "") +
        "0".repeat(n - Math.ceil(s / 9))
    );
}

function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while (t--) {
        let [n, s] = readLine().split(" ").map(Number);
        let res = solution(n, s);
        console.log(res);
    }
}
