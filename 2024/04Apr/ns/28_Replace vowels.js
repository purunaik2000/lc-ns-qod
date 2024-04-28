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

function solution(n, s) {
    // Code here
    const map = {
        "a": "b",
        "e": "f",
        "i": "j",
        "o": "p",
        "u": "v"
    }

    return s.split('').map(x=>map[x] || x).join('');
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = parseInt(readLine());
        let s = readLine();
        let res = solution(n, s);
        console.log(res);
    }
}