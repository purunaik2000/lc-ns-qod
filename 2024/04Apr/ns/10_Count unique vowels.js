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

function fact(n) {
    if(n < 2) return 1;
    return fact(n-1)*n;
}

function solution(s) {
    // Code here
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const set = new Set();

    for(let c of s) if(vowels.has(c)) set.add(c);

    return set.size;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine();
        let res = solution(s);
        console.log(res);
    }
}