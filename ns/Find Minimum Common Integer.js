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

function solution(n, arr1, m, arr2){
    // Code here
    let i=0, j=0;
    while(i<n && j<m) {
        if(arr1[i] == arr2[j]) return arr1[i];
        if(arr1[i]>arr2[j]) j++;
        else i++;
    }
    return -1;
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().split(' ').map(Number);
        let arr1 = readLine().split(' ').map(Number);
        let [m] = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let res = solution(n, arr1, m, arr2);
        console.log(res);
    }
}