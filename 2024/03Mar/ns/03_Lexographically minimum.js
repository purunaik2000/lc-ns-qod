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
    if(n>52) return String.fromCharCode(n-53+'a'.charCodeAt(0)) + "zz";
    if(n > 27) return "a" + String.fromCharCode(n-28+'a'.charCodeAt(0)) + "z";
    return "aa" + String.fromCharCode(n-3+'a'.charCodeAt(0));
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let res = solution(n);
        console.log(res);
    }
}