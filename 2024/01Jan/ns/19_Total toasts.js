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

function solution(n, k, l, c, d, p, nl, np){
    // Code here
    let drink = k*l;
    let slice = c*d;

    let toastFromDrink = parseInt(drink/nl);
    let toastFromSalt = parseInt(p/np);

    let toast = Math.min(slice, toastFromDrink, toastFromSalt);

    return parseInt(toast/n);
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n, k, l, c, d, p, nl, np] = readLine().trim().split(' ').map(Number);
        let res = solution(n, k, l, c, d, p, nl, np);
        console.log(res);
    }
}