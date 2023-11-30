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
    if(n==0) return 0;
    const fact = {
        0 : 1,
        1: 1,
        2: 2,
        3: 6,
        4: 24,
        5: 120,
        6: 720,
        7: 5040,
        8: 40320,
        9: 362880
    }
   const arr = n.toString().split('').map(Number);
   return arr.reduce((a, v) => a+fact[v], 0);
}
    
function main() {
    let n = parseInt(readLine());
    console.log(sol(n));
}