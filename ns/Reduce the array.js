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

function solution(n, arr){
    // Code here
    let res = 0, rem = 0;
    for(let i=n-1;i>=0;i--) {
        if(arr[i] < 0) rem += arr[i];
        else {
            if(rem + arr[i] > 0) {
                res += rem + arr[i];
                rem = 0;
            }else {
                rem += arr[i];
            }
        }
    }
    return res;
 }
    
function main() {
    let t = parseInt(readLine());
    // let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}