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

function solution(n, arr) {
    let max = 0;
    for(let i=0;i<n;i++) {
        for(let j=0;j<n;j++) max = Math.max(max, Math.abs(arr[i]-arr[j]) + Math.abs(i-j));
    }
    return max;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = parseInt(readLine().trim());
        let arr = readLine().split(" ").map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}