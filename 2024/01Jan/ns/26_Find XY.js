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

function solution(l, r){
    // Code here
    return r>=l*2 ? 'YES' : 'NO';
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [l, r] = readLine().trim().split(' ').map(Number);
        let res = solution(l, r);
        console.log(res);
    }
}