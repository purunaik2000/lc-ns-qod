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

function solution(k, l, s){
    // Code here
    if(k==0 && l==0) return "YES";

    for(let e of s) {
        if(e == "L") l++;
        else if(e == "R") l--;
        else if(e == "U") k--;
        else k++;

        if(k==0 && l==0) return "YES";
    }

    return "NO";
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [k, l] = readLine().split(' ').map(Number);
        let s = readLine();
        let res = solution(k, l, s);
        console.log(res);
    }
}