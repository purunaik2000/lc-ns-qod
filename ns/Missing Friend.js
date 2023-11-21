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
    const set = new Set(arr);
    for(let i=1;i<=n;i++) if(!set.has(i)) return 2*i;
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