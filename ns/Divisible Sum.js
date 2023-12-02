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

function solution(a, b, k){
    // Code here
    let sum = 0, i = 1, j =1;
    while(k--) {
        if(a*i < b*j) {
            sum += a*i;
            i++;
        }else if(b*j < a*i) {
            sum += b*j;
            j++;
        }else {
            sum += a*i;
            i++;
            j++;
        }
    }
    return sum;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, k] = readLine().split(' ').map(Number);
        let res = solution(a, b, k);
        console.log(res);
    }
}