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

function solution(a, b, c, n){
    // Code here
    let max = Math.max(a, b, c);

    let need = max*3 - a - b - c;
    
    if(n<need) return "NO";

    n -= need;

    return n%3 == 0 ? "YES" : "NO";
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, c, n] = readLine().trim().split(' ').map(Number);
        let res = solution(a, b, c, n);
        console.log(res);
    }
}