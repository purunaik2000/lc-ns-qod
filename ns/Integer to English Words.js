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

function solution(num){
    const SUB_20 = [
        "Zero", "One", "Two", "Three", "Four", 
        "Five", "Six", "Seven", "Eight", "Nine", 
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", 
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    const SUB_100 = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    const POW_10 = [
        "Hundred", "Thousand", "Million", "Billion" //, ...
    ];

    function getSub1000(buf, num) {
        if (num >= 100) {
            const mod = num % 100;
            buf.push(SUB_20[(num - mod)/100], POW_10[0]);
            num = mod;
        }

        if (num >= 20) {
            const mod = num % 10;
            buf.push(SUB_100[(num - mod)/10]);
            num = mod;
        }

        if (num > 0) {
            buf.push(SUB_20[num]);
        }
    }
    if (num === 0) {
        return SUB_20[0];
    }

    const buf = [];
    for (let i = POW_10.length - 1; num >= 1000; --i) {
        const p = 1000**i;
        if (num >= p) {
            const mod = num % p;
            getSub1000(buf, (num - mod) / p);
            buf.push(POW_10[i]);
            num = mod;
        }
    }

    getSub1000(buf, num);
    return buf.join(" ");
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