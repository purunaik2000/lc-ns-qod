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

function solution(n, k) {
    // Code here
    let count = 0;

    while(n>0) {
        n = parseInt(n/k);
        count++;
    }

    return count;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, k] = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(n, k);
        console.log(res);
    }
}