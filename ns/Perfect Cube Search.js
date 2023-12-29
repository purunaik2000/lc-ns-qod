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
    let res = 0;
    let l = 1, r = n;
    while(l<=r) {
        let mid = l + Math.floor((r-l)/2);
        if(mid**3 <= n) {
            res = mid;
            l = mid+1;
        }else r = mid-1;
    }
    return res**3;
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