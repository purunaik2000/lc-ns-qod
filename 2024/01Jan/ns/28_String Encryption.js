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
    let last = s[0];
    let count = 0;
    let res = '';
    for(let i=0;i<s.length;i++) {
        if(s[i] == last) count++;
        else {
            res += last + count.toString(16);
            last = s[i];
            count = 1;
        }
    }
    res += last + count.toString(16);

    return res.toString().split('').reverse().join('');
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