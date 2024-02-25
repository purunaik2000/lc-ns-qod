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

function solution(s, k){
    // Code here
    const arr = new Array(26).fill(0);
    for(let c of s) {
        arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    arr.sort((a,b)=>a-b);

    let i = 25;
    while(i>0) {
        if(arr[i] > arr[i-1]) {
            let diff = arr[i] - arr[i-1];
            let n = 26-i;
            if(n*diff < k) {
                k -= n*diff;
                for(let j=i;j<26;j++) arr[j] = arr[i-1];
            }else {
                let x = k/n;
                let y = k%n;
                for(let j=i;j<26;j++) arr[j] -= x;
                for(let j=i;j<i+y;j++) arr[j]--;
                k = 0;
                break;
            }
        }
        i--;
    }

    let x = parseInt(k/26);
    let y = k%26;
    for(let i=0;i<26;i++) arr[i] -= x;
    for(let i=0;i<y;i++) arr[i]--;

    return arr.reduce((a, v)=>a + v*v, 0);
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let s = readLine();
        let k = parseInt(readLine());
        let res = solution(s, k);
        console.log(res);
    }
}