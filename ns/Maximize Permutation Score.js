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

function solution(n, x, y){
    // Code here
    let count = 0;
    for(let temp = y; temp <= n; temp += y) {
        if( temp % x == 0) count++;
    }

    return (n-(count-1)/2)*count;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, x, y] = readLine().split(' ').map(Number);
        let res = solution(n, x, y);
        console.log(res);
    }
}