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

function solution(a, b, n){
    // Code here
    if(n%3 == 0) return a;
    if(n%3 == 1) return b;
    return a^b;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, n] = readLine().split(' ').map(Number);
        let res = solution(a, b, n);
        console.log(res);
    }
}