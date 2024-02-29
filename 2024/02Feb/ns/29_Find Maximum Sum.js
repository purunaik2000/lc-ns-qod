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
    let x = parseInt(n/2);
    let y = parseInt(n/3);
    let z = parseInt(n/4);

    if(x+y+z > n) {
        x = Math.max(x, solution(x));
        y = Math.max(y, solution(y));
        z = Math.max(z, solution(z));
    }

    return Math.max(x+y+z, n);
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