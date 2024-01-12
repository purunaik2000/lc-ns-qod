process.stdin.setEncoding('utf8');
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

function solution(n, k, arr){
    // Code here
    let mins = new Array(n);
    mins[n-1] = arr[n-1];
    for(let i=n-2;i>0;i--) mins[i] = Math.min(mins[i+1], arr[i]);
    let res = 0;
    let max = arr[0];
    for(let i=1;i<n;i++) {
        if(max+mins[i] >= k) res++;
        max = Math.max(max, arr[i]);
    }
    return res;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, k] = readLine().trim().split(' ').map(Number);
        let arr = readLine().trim().split(' ').map(Number);
        let res = solution(n, k, arr);
        console.log(res);
    }
}