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

function gcd(a, b) {
    if(b==0) return a;
    return gcd(b, a%b);
}

function solution(n, arr, k){
    // Code here
    arr.sort((a,b)=>a-b);

    let start = 0, max = 1;
    for(let i=1;i<n;i++) {
        if(arr[i]-arr[i-1] <= k) max = Math.max(max, i-start+1);
        else start = i;
    }

    return n-max;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let [k] = readLine().split(' ').map(Number);
        let res = solution(n, arr, k);
        console.log(res);
    }
}