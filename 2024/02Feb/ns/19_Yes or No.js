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

function gcd(a, b) {
    if(b==0) return a;
    return gcd(b, a%b);
}

function solution(l, r){
    // Code here
    if(r<4) return "No";
    if(l != r) return "Yes";

    if(r%2 == 0) return "Yes";
    
    let i = 2;
    let j = r-i;

    while(i<j) {
        if(gcd(i, j) != 1) return "Yes";
        i++;
        j--;
    }

    return "No";
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b] = readLine().split(' ').map(Number);
        let res = solution(a, b);
        console.log(res);
    }
}