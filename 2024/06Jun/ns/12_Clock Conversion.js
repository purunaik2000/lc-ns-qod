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

function solution(s) {
    const time = s.split(":");
    return (time[0]%12 || 12).toString().padStart(2, "0") + ":" + time[1] + " " + (time[0] >= 12 ? "PM" : "AM");
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine().trim();
        let res = solution(s);
        console.log(res);
    }
}