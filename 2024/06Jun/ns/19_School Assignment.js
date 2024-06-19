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

function solution(n, m, k) {
    let res = -m;
    while(n > 0) {
        res += Math.ceil(n/2)*k + m;
        n = parseInt(n/2);
        k *= 2;
    }
    return res;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, m , k] = readLine().trim().split(" ").map(Number);
        let res = solution(n, m, k);
        console.log(res);
    }
}