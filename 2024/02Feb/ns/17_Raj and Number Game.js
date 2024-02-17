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

function solution(n, k){
    // Code here
    let res = 0;
    for(let i=1;i<=n;i++) {
        let x = i%k, y = parseInt(i/k);
        if(x == k/2) {
            res += y*6 + (y*(y-1)/2)*6 + 1;
        }else if(x == 0) {
            y--;
            res += y*6 + y*(y-1)*3 + 1;
        }
    }
    return res;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, k] = readLine().split(' ').map(Number);
        let res = solution(n, k);
        console.log(res);
    }
}