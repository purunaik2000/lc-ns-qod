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

function solution(n, nums){
    // Code here
    let max = 0;
    for(let i=0;i<n;i++) {
        for(let j=i+1;j<n;j++) {
            for(let k=j+1;k<n;k++) {
                max = Math.max(max, (nums[i]-nums[j])*nums[k]);
            }
        }
    }
    return max;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}