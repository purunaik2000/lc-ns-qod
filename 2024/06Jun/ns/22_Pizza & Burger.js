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

function solution(x, y, z) {
    if(x >= y) return "PIZZA";
    if(x >= z) return "BURGER";
    return "NOTHING";
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [x, y, z] = readLine().trim().split(" ").map(Number);
        let res = solution(x, y, z);
        console.log(res);
    }
}