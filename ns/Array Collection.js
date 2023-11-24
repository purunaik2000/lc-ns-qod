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

function solution(n, arr, k){
    // Code here
    let set = new Set(), i = n-1;
    for(;i>=0;i--) {
        if(arr[i]<=k) {
            set.add(arr[i]);
            if(set.size == k) break;
        }
    }
    if(i==-1) return 0;
    return n-i;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let [k] = readLine().split(' ').map(Number);
        let res = solution(n, arr, k);
        console.log(res);
    }
}