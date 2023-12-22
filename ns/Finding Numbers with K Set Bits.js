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
    let bits = parseInt(Math.log2(n)) + 1;
    if(bits > k) return 'Yes';
    if(bits < k) return 'No';
    if(parseInt(Math.log2(n+1)) == bits) return 'Yes';
    return 'No';
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