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

let set = null;

function sieve(limit) {
    let factors = new Array(limit + 1).fill(0);
    
    for (let i = 2; i <= limit; ++i) if (factors[i] === 0) for (let j = i; j <= limit; j += i) {
                let k = j;
                while (k % i === 0) {
                    factors[j]++;
                    k /= i;
                }
            }
    return factors;
}

function solution(n, arr) {
    let maxValue = Math.max(...arr);
    let factors = sieve(maxValue);
    let nimSum = 0;
    
    for (let num of arr) if (factors[num] > 1) nimSum ^= (factors[num] - 1);
    return (nimSum !== 0) ? 'A' : 'B';
}
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(" ").map(Number);
        let arr = readLine().trim().split(" ").map(Number);
        let res = solution(n, arr);
        console.log(res);
    }
}