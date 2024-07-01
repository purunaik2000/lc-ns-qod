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
    arr.sort((a, b) => a-b);
    let left = 0, right = 0;
    for(let i=0;i<parseInt(n/2);i++) left += arr[i];
    for(let i=parseInt(n/2);i<n;i++) right += arr[i];
    return right - left;
}
    
function main() {
    let t = parseInt(readLine());
    // let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}