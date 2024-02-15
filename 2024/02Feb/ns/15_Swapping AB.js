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

function solution(n, s){
    // Code here
    let res = 0, count = 0;
    for(let c of s) {
        if(c=='A') count++;
        else {
            res += count;
            if(count > 0) count = 1;
            else count = 0;
        }
    }
    return res;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let s = readLine();
        let res = solution(n, s);
        console.log(res);
    }
}