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

function solution(n, arr){
    // Code here
    const bits = new Array(32).fill(0);
    for(let e of arr) {
        let i = 0;
        while(e>0) {
            bits[i] += e&1;
            e >>= 1;
            i++;
        }
    }

    let res = 0;
    for(let i=0;i<32;i++) {
        res += Math.pow(2, i)*(bits[i]%3);
    }

    return res;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}