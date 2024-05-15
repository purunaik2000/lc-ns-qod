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

function solution(s) {
    // Code here
    let res = 0n;
    for (let i = 0; i < s.length; i++) {
        i % 2 == 0 ? (res += BigInt(s[i])) : (res -= BigInt(s[i]));
    }

    res %= 11n;

    return Math.abs(Number(res));
}

function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while (t--) {
        let s = readLine().trim();
        let res = solution(s);
        console.log(res);
    }
}

// not working for some of the cases
