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

function solution(n) {
    // Code here
    let count = 0;

    for(let i=1;i<Math.sqrt(n);i++) if(n%i == 0) count += 2;
    
    if(Math.sqrt(n)%1 == 0) count++;

    return count;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = parseInt(readLine());
        let res = solution(n);
        console.log(res);
    }
}