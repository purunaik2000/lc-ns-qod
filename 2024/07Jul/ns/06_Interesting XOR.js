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

function solution(n) {
    const s = n.toString(2);
    let a = 1 << (s.length - 1), b = (1 << (s.length - 1)) - 1;
    for(let i=1;i<s.length;i++) {
        if(s[i] == "0") a += 1 << (s.length - (i + 1));
    }
    return (BigInt(a)*BigInt(b)).toString();
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let res = solution(n);
        console.log(res);
    }
}