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

function solution(s) {
    // Code here
    const upper = [];
    const lower = [];

    for(let c of s) c.charCodeAt(0) > 93 ? lower.push(c) : upper.push(c);
    lower.sort();
    upper.sort();

    let i = 0, j = 0;
    let res = "";

    for(let k=0;k<s.length;k++) {
        s.charCodeAt(k) > 93 ? res += lower[i++] : res += upper[j++];
    }

    return res;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine();
        let res = solution(s);
        console.log(res);
    }
}