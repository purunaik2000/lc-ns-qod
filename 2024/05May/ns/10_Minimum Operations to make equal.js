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

function solution(a, b) {
    // Code here
    let A = 0, B = 0;
    a = a.toString(2);
    b = b.toString(2);
    let i = a.length-1, j = b.length - 1;
    while(i>=0 && j>=0) {
        if(a[i] != b[j]) a[i] > b[j] ? A = 1 : B = 1;
        i--, j--;
    }
    if(i >= 0) A = 1;
    else if( j >= 0) B = 1;
    return A + B;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b] = readLine().split(" ").map(Number);
        let res = solution(a, b);
        console.log(res);
    }
}