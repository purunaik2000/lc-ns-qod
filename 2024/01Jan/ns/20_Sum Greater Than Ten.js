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

function solution(a, b, c){
    // Code here
    return ((a+b >= 10) || (a+c >= 10) || (b+c >= 10)) ? "YES" : "NO";
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, c] = readLine().trim().split(' ').map(Number);
        let res = solution(a, b, c);
        console.log(res);
    }
}