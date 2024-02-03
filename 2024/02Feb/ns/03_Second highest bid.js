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

function solution(n, arr){
    // Code here
    arr[n] = -Infinity;
    let m1 = 0, m2 = n;
    for(let i=1;i<n;i++) {
        if(arr[i] > arr[m1]) {
            m2 = m1;
            m1 = i;
        }else if(arr[i] > arr[m2]) m2 = i;
    }

    return `${m1+1} ${arr[m2]}`;
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