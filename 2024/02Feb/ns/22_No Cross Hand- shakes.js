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

function solution(n){
    // Code here
    if(n&1) return 0;
    n /= 2;
    const arr = new Array(n+1).fill(0);
    arr[0] = 1;
    arr[1] = 1;
    for(let i=2;i<=n;i++) {
        for(let j=0;j<i;j++) {
            arr[i] += arr[j] * arr[i-j-1];
        }
    }

    return arr[n];
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = parseInt(readLine());
        let res = solution(n);
        console.log(res);
    }
}