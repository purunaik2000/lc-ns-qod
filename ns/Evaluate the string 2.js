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

function solution(s){
    // Code here
    return s.split('+').map(Number).reduce((a,b)=>a+=b);
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine();
        // let [n, k] = readLine().split(' ').map(Number);
        let res = solution(s);
        console.log(res);
    }
}