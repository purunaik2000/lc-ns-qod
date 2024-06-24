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

function solution(a, b, c, d, e) {
    [a, b, c] = [a, b, c].sort((a, b) => b - a);
    if(a <= e) return b + c <= d ? "Yes" : "No";
    if(b <= e) return a + c <= d ? "Yes" : "No";
    if(c <= e) return a + b <= d ? "Yes" : "No";
    return "No";
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, c, d, e] = readLine().trim().split(" ").map(Number);
        let res = solution(a, b, c, d, e);
        console.log(res);
    }
}