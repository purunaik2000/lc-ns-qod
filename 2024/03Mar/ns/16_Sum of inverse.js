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

function solution(n, arr){
    // Code here
    const mul = arr.reduce((a,v)=>a*v);

    let sum = 0;

    for(let e of arr) sum += mul/e;

    return (mul / sum).toFixed(8);
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let arr = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}