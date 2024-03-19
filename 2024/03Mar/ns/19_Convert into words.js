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

const translations = new Map([
  [1000000000, 'Billion'],
  [1000000, 'Million'],
  [1000, 'Thousand'],
  [100, 'Hundred'],
  [90, 'Ninety'],
  [80, 'Eighty'],
  [70, 'Seventy'],
  [60, 'Sixty'],
  [50, 'Fifty'],
  [40, 'Forty'],
  [30, 'Thirty'],
  [20, 'Twenty'],
  [19, 'Nineteen'],
  [18, 'Eighteen'],
  [17, 'Seventeen'],
  [16, 'Sixteen'],
  [15, 'Fifteen'],
  [14, 'Fourteen'],
  [13, 'Thirteen'],
  [12, 'Twelve'],
  [11, 'Eleven'],
  [10, 'Ten'],
  [9, 'Nine'],
  [8, 'Eight'],
  [7, 'Seven'],
  [6, 'Six'],
  [5, 'Five'],
  [4, 'Four'],
  [3, 'Three'],
  [2, 'Two'],
  [1, 'One'],
]);

function solution(n){
    // Code here
    if (n === 0) {
    return 'Zero';
  }
  
  if (n <= 20) {
    return translations.get(n);
  }
  
  let result = [];
  
  for (let [value, translation] of translations) {
    const times = Math.floor(n / value);
    
    if (times === 0) {
      continue;
    }
    
    n -= times * value;
    
    if (times === 1 && value >= 100) {
      result.push('One', translation);
      continue;
    }
    
    if (times === 1) {
      result.push(translation);
      continue;
    }
    
    result.push(solution(times), translation);
  }
  
  return result.join(' ');
 }
    
function main() {
    // let t = parseInt(readLine());
    let t = 1;
    while(t--){
        let [n] = readLine().trim().split(' ').filter(x=> x != '').map(Number);
        let res = solution(n);
        console.log(res);
    }
}