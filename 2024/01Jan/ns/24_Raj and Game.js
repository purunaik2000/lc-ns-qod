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

function solution(s){
    // Code here
    let l = 0, r = s.length-1;
    let count = 0, cur = '';
    while(l<=r) {
        if((s[l] != s[r]) || (l==r)) return 0;
        count = 2;
        cur = s[l];
        l++;
        while(l<r) {
            if(s[l] == cur) {
                count++;
                l++;
            }else break;
        }
        if(l==r) {
            return count+1;
        }
        r--;
        while(l<r) {
            if(s[r]==cur) {
                count++;
                r--;
            }else break;
        }

        if(count<3) return 0;
    }
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine().trim();
        let res = solution(s);
        console.log(res);
    }
}