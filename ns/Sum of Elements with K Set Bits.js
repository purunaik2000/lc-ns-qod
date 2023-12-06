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

function solution(n, arr, k){
    // Code here
    let sum = 0, i = 0;
    for(let e of arr) {
        const setBits = i.toString(2).split('').map(Number).reduce((a,b)=>a+=b);
        if(setBits == k) sum += e;
        i++;
    }
    return sum;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let [k] = readLine().split(' ').map(Number);
        let res = solution(n, arr, k);
        console.log(res);
    }
}