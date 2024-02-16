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

function solution(a, b){
    // Code here
    a = a.toString(2);
    b = b.toString(2);

    const max = Math.max(a.length, b.length);

    a = a.padStart(max, '0');
    b = b.padStart(max, '0');

    let res = 0;

    for(let i=0;i<max;i++) {
        if(Number(a[i]) > Number(b[i])) {
            res++;
            break;
        }
    }

    for(let i=0;i<max;i++) {
        if(Number(a[i]) < Number(b[i])) {
            res++;
            break;
        }
    }

    return res;
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [a] = readLine().split(' ').map(Number);
        let [b] = readLine().split(' ').map(Number);
        let res = solution(a, b);
        console.log(res);
    }
}