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

function isPrime(x) {
    for(let i=2;i<=Math.sqrt(x);i++) {
        if(x%i == 0) return false;
    }
    return true;
}

function solution(l, r) {
    // Code here
    if(r<4) return "No";
    if(r != l) return "Yes";
    return isPrime(l) ? "No" : "Yes";
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [l, r] = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(l, r);
        console.log(res);
    }
}