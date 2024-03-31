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

function solution(a, b, c, d) {
    // Code here
    if(a == 0) return 0;
    if(b/c >= d) return -1;
    
    return Math.ceil(a/(c*d-b));
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, c, d] = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(a, b, c, d);
        console.log(res);
    }
}