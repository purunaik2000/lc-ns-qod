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

function solution(s, n) {
    // Code here
    const stack = [];

    for(let c of s) {
        while((stack.length > 0) && (n > 0)) {
            if(c.charCodeAt(0) > stack[stack.length-1].charCodeAt(0)) {
                stack.pop();
                n--;
            }else break;
        }
        stack.push(c);
    }

    return stack.join('');
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine();
        let [n] = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(s, n);
        console.log(res);
    }
}