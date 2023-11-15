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

function solution(n){
    // Code here
    let count = 0;
    for(let i=1;i<=n;i++) {
        let s = i.toString();
        if(s.length%2 == 0) {
            let arr = s.split('').map(Number);
            let left = 0, right = 0;
            for(let j=0;j<s.length/2;j++) left += arr[j];
            for(let j=s.length/2;j<s.length;j++) right += arr[j];
            if(left==right) count++;
        }
    }
    return count;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let res = solution(n);
        console.log(res);
    }
}