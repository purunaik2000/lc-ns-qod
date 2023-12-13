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
    if(k>n+1) return -1;
    let i = 1, j = k-1;
    let arr = [];
    while(i<j) {
        arr.push(i);
        arr.push(j);
        i++;
        j--;
    }
    if(i==j) arr.push(i);
    for(let i=k;i<=n;i++) arr.push(i);
    return arr.join(' ');
 }
    
function main() {
    let t = parseInt(readLine());
    // let t = 1;
    while(t--){
        let [n, k] = readLine().split(' ').map(Number);
        let res = solution(n, k);
        console.log(res);
    }
}