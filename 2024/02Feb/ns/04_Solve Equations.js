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

function solution(n, m){
    // Code here
    let count = 0;
    for(let a=1;a<n;a++) {
        let b = n - a*a;
        if(b<1) return count;
        if(a + b*b == m) count++;
    }
    return count;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, m] = readLine().split(' ').map(Number);
        let res = solution(n, m);
        console.log(res);
    }
}