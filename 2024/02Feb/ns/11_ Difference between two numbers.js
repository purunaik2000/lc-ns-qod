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

function solution(n1, n2, n3){
    // Code here
    if((Math.abs(n1-n2) == Math.abs(n3)) || (Math.abs(n2-n3) == Math.abs(n1)) || (Math.abs(n1-n3) == Math.abs(n2))) {
        return "Yes";
    }
    return "No";
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n1, n2, n3] = readLine().split(' ').map(Number);
        let res = solution(n1, n2, n3);
        console.log(res);
    }
}