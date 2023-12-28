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
    let sum = arr.reduce((a,b)=>a+b);
    if(sum<n) return 'No';
    if(k==0) if(sum%n) return 'No';
    return 'Yes';
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, k] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let res = solution(n, k, arr);
        console.log(res);
    }
}