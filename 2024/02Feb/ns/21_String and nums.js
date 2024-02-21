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

function solution(s){
    // Code here
    let sum = 0;
    const arr = new Array(26).fill(0);
    for(let c of s) {
        if(isNaN(c)) {
            arr[c.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }else {
            sum += Number(c);
        }
    }
    
    let res = '';
    for(let i=0;i<26;i++) {
        while(arr[i] != 0) {
            res += String.fromCharCode('a'.charCodeAt(0)+i);
            arr[i]--;
        }
    }
    return res + sum;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine();
        let res = solution(s);
        console.log(res);
    }
}