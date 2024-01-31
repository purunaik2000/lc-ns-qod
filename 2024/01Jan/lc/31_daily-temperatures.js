/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let ans = new Array(n).fill(0);
    let stack = [n-1];
    for(let i=n-2;i>=0;i--){
        while(stack.length && temperatures[stack[stack.length-1]]<=temperatures[i]) stack.pop();
        if(stack.length){
            ans[i] = stack[stack.length-1] - i;
        }
        stack.push(i);
    }
    return ans;
};