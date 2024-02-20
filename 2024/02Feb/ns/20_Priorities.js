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

function solution(n, constomers, k){
    // Code here
    const map = new Map();
    for(let id of constomers) map.set(id, (map.get(id) || 0) + 1);
    const arr = [...map.entries()].sort(([id1, freq1], [id2, freq2]) => (freq2-freq1) || (id2-id1));
    let res = [];
    for(let i=0;i<k;i++) res.push(arr[i][0]);
    return res.join(' ');
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr = readLine().split(' ').map(Number);
        let [k] = readLine().split(' ').map(Number);
        let res = solution(n, arr, k);
        console.log(res);
    }
}