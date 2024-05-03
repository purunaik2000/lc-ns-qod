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

function solution(arr) {
    // Code here
    for(let i=0;i<5;i++) {
        if(arr[i] == 0) return i+1;
    }
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let arr = readLine().split(' ').map(Number);
        let res = solution(arr);
        console.log(res);
    }
}