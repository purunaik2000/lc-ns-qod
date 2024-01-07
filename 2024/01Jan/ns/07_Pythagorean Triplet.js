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
    let set = new Set();
    for(let i=0;i<n;i++) {
        for(let j=i+1;j<n;j++) {
            set.add(arr[i]**2+arr[j]**2);
        }
    }
    for(let e of arr) if(set.has(e**2)) return 'Yes';
    return 'No';
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let n = readLine().trim().split(' ').map(Number);
        let arr = readLine().trim().split(' ').map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}