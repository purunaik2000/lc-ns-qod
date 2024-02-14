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
    let max = 0, id = 0;
    arr.forEach(([w, s], i) => {
        if(w<=10) {
            if(s>max) {
                max = s;
                id = i+1;
            }
        }
    })
    return id;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = new Array(n);
        for(let i=0;i<n;i++) {
            arr[i] = readLine().split(' ').map(Number);
        }
        let res = solution(n, arr);
        console.log(res);
    }
}