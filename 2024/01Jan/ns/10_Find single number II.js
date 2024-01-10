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
    let map = new Map();
    for(let e of arr) map.set(e, (map.get(e) || 0) + 1);
    for(let [k, v] of map) if(v==1) return k;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(' ').map(Number);
        let arr = readLine().trim().split(' ').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}