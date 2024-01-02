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
    let sum = arr.reduce((a, v)=>a+v);
    let temp = [];
    for(let i=2;i<sum;i++) {
        let isPrime = true;
        for(let e of temp) {
            if(i%e == 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) temp.push(i);
    }
    let i = sum;
    while(true) {
        let isPrime = true;
        for(let e of temp) {
            if(i%e == 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) return i-sum;
        i++;
    }
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}