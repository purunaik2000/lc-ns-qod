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

function solution(n, arr, k) {
    // Code here
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    const avg = (max + min) / 2;
    for (let i = 0; i < n; i++) {
        if (arr[i] < avg) arr[i] = Math.min(avg, arr[i] + k);
        else arr[i] = Math.max(avg, arr[i] - k);
    }
    max = Math.max(...arr);
    min = Math.min(...arr);

    return Math.ceil(max - min);
}

function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while (t--) {
        let n = parseInt(readLine().trim());
        let arr = readLine().trim().split(" ").map(Number);
        let k = parseInt(readLine().trim());
        let res = solution(n, arr, k);
        console.log(res);
    }
}
