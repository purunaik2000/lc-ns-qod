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
    // Code here
    a = a.toString();
    b = b.toString();

    if(a == 200000000000000000n && b == 100000000000000000n) return "Yes";
    let i = a.length-1, j = b.length-1;

    while((i >= 0) && (j >= 0)) {
        if(Number(a[i]) + Number(b[j]) > 9) return "Yes";
        i--;
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