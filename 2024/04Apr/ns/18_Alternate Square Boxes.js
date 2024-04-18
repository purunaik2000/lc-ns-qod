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

function solution(n) {
    // Code here
    let x = "", y = "";
    for(let i=0;i<n;i++) {
        if(i%2 == 0) {
            x += "**";
            y += "..";
        }
        else {
            x += "..";
            y += "**";
        }
    }

    for(let i=0;i<n;i++) {
        if(i%2 == 0) {
            console.log(x);
            console.log(x);
        }else {
            console.log(y);
            console.log(y);
        }
    }

    return "";
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let res = solution(n);
        console.log(res);
    }
}