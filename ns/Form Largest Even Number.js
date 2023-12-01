process.stdin.resume();
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

function sol(n) {
    const arr = n.toString().split('').sort((a,b)=>b-a);
    let i = arr.length;
    while(i--) {
        if(arr[i] % 2 == 0) {
            [arr[i], arr[arr.length-1]] = [arr[arr.length-1], arr[i]];
            break;
        }
    }
    if(i==-1) return -1;
    return arr.join('');
}
    
function main() {
    let n = parseInt(readLine());
    console.log(sol(n));
}