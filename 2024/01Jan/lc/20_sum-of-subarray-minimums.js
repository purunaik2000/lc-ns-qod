/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const n = arr.length;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    let stack = [];

    for(let i=0;i<n;i++) {
        while((stack.length) && (arr[stack[stack.length-1]] >= arr[i])) stack.pop();
        if(stack.length) left[i] = stack[stack.length-1];
        stack.push(i);
    }

    stack = [];

    for(let i=n-1;i>=0;i--) {
        while((stack.length) && (arr[stack[stack.length-1]] > arr[i])) stack.pop();
        if(stack.length) right[i] = stack[stack.length-1];
        stack.push(i);
    }

    let sum = 0;
    for(let i=0;i<n;i++) {
        sum += ((i-left[i])*(right[i]-i)*arr[i]) % (1e9+7);
        sum %= 1e9+7;
    }

    return sum;
};