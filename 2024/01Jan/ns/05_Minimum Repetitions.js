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

function solution(s1, s2){
    // Code here
    let n1 = s1.length, n2 = s2.length;
    let d = Math.ceil(n2/n1);
    let temp = s1.repeat(d);
    if(temp.indexOf(s2) != -1) return d;
    temp = temp + s1;
    if(temp.indexOf(s2) != -1) return d+1;
    return -1;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s1 = readLine().trim();
        let s2 = readLine().trim();
        let res = solution(s1, s2);
        console.log(res);
    }
}