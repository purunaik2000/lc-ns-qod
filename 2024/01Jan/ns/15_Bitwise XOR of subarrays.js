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

function solution(n, arr){
    // Code here
    if(n%2==0) return 0;
    let res = 0;
    for(let i=0;i<n;i+=2) {
        res ^= arr[i];
    }
    return res;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(' ').map(Number);
        let arr = readLine().trim().split(' ').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}