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
    let sum = n%10;
    n = parseInt(n/10);
    sum += n%10;
    n = parseInt(n/10);
    sum += n;

    let res = ""+sum%10;
    let rem = parseInt(sum/10);
    res = (sum+rem)%10+res;
    rem = parseInt((sum+rem)/10);
    return (sum+rem)+res;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(n);
        console.log(res);
    }
}