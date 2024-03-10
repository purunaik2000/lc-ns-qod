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

function solution(n, k, arr){
    // Code here
    let l = 0, min = Infinity;
    const map = new Map();

    for(let r=0;r<n;r++) {
        map.set(arr[r], (map.get(arr[r]) || 0) + 1);
        while(map.get(arr[l]) > 1) {
            map.set(arr[l], map.get(arr[l]) - 1);
            l++;
        }

        if(map.size == k) min = Math.min(min, r-l+1);
    }

    return min;
 }
    
function main() {
    let t = parseInt(readLine());
    // let t = 1;
    while(t--){
        let [n, k] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let res = solution(n, k, arr);
        console.log(res);
    }
}