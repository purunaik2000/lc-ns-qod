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

function solution(a, b) {
    let ram = 1, shyam = 2;
    while(ram <= a) {
        a -= ram;
        ram += 2;
        if(shyam > b) return "Ram";
        b -= shyam;
        shyam += 2;
    }
    return "Shyam";
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a, b] = readLine().trim().split(" ").map(Number);
        let res = solution(a, b);
        console.log(res);
    }
}