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

function solution(n, s, arr){
    // Code here
    let sum = 0, max = 0;
    for(let e of arr) {
        sum += e;
        max = Math.max(max, e);
    }

    return sum-max <= s ? 'Yes' : 'No';
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, s] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let res = solution(n, s, arr);
        console.log(res);
    }
}