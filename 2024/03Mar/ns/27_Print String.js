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

function solution(p) {
    // Code here
    return p.map(c=>String.fromCharCode('a'.charCodeAt(0)+c-1)).join('');
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let p = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(p);
        console.log(res);
    }
}