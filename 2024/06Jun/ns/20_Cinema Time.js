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
    let l = 1, r = n;
    while(l < r) {
        let mid = l + parseInt((r - l) / 2);
        let sum = mid*(mid + 1)/2;
        if(sum >= n) r = mid;
        else l = mid + 1;
    }
    return Math.min(l + (l*(l+1)/2 - n), l-1 + (n - l*(l-1)/2));
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