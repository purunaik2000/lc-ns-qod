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

function solution(a, b, c, x, y, z) {
    const sum1 = a + b + c - Math.min(a, b, c);
    const sum2 = x + y + z - Math.min(x, y, z);
    if(sum1 == sum2) return "Tie";
    return sum1 > sum2 ? "Ram" : "Shyam";
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b, c, x, y, z] = readLine().trim().split(" ").map(Number);
        let res = solution(a, b, c, x, y, z);
        console.log(res);
    }
}