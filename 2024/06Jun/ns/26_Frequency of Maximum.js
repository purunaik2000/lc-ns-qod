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

function solution(n, arr) {
    const map = new Map();
    let res = [0, 0];
    for(let e of arr) map.set(e, (map.get(e) || 0) + 1);
    for(let [k, v] of map) if((v > res[1]) || ((v == res[1]) && (k < res[0]))) res = [k, v];
    return res.join(" ");
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}