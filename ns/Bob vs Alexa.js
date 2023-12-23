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

function solution(s1, s2){
    // Code here
    let k = 0;
    for(let i=0;i<s1.length && k<s2.length;i++) {
        if(s1[i] == s2[k]) k++;
    }
    if(k == s2.length) return 'Yes';
    return 'No';
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s1 = readLine();
        let s2 = readLine();
        let res = solution(s1, s2);
        console.log(res);
    }
}