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
    if(!b) return a;
    return gcd(b, a%b);
}

function solution(a, b, n){
    // Code here
    while(n) {
        const gcd1 = gcd(a, n);
        if(gcd1 == n) return 0;
        n -= gcd1;
        const gcd2 = gcd(b, n);
        if(gcd2 == n) return 1;
        n -= gcd2;
    }
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, n] = readLine().split(' ').map(Number);
        let res = solution(a, b, n);
        console.log(res);
    }
}