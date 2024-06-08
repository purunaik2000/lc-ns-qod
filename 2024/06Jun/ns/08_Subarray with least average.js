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

function solution(n, k, arr) {
    let sum = 0, res = 0;
    for(let i=0;i<k;i++) sum += arr[i];
    let min = sum;
    for(let i=k;i<n;i++) {
        sum += arr[i] - arr[i-k];
        if(sum < min) {
            min = sum;
            res = i - k + 1;
        }
    }
    return res + 1;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, k] = readLine().trim().split(" ").map(Number);
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, k, arr);
        console.log(res);
    }
}