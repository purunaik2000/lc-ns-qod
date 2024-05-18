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
    // Code here
    let res = [0];
    for(let e of arr) {
        let size = res.length;
        for(let i=0;i<size;i++) res.push(res[i]^e);
    }
    return res.reduce((a, v) => a + v);
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = parseInt(readLine().trim());
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}