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
    if(n%2==0) n--;
    while(n>2) {
        let j = 3;
        for(;j<=Math.sqrt(n);j++) {
            if(n%j == 0)break;
        }
        if(j>Math.sqrt(n)) return n;
        n -= 2;
    }
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