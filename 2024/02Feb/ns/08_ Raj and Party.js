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

function solution(n, m, z){
    // Code here
    let lcm = (n*m)/gcd(n, m);
    return parseInt(z/lcm);
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, m, z] = readLine().split(' ').map(Number);
        let res = solution(n, m, z);
        console.log(res);
    }
}