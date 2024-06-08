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

function solution(n, arr) {
    let c = [0,0,0], i, res = 0; 
    for (let e of arr) c[e%3]++;
    res += ((c[0]*(c[0]-1))>>1);
    res += c[1] * c[2];
    res += (c[0] * (c[0]-1) * Math.floor((c[0]-2))/6);
    res += (c[1] * (c[1]-1) * Math.floor((c[1]-2))/6);
    res += (Math.floor(c[2]*(c[2]-1)*(c[2]-2))/6);
    res += c[0]*c[1]*c[2];
    return res;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}