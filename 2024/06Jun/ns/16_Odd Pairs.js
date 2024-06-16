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

function solution(n) {
    return (n%2 == 0 ? BigInt(n/2-1)*BigInt(n/2)*2n + BigInt(n) : BigInt((n-1)/2)*BigInt((n+1)/2)*2n).toString().substring(-1);
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let res = solution(n);
        console.log(res);
    }
}