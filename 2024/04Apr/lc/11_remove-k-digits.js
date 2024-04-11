/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = ["0"];
    for(let c of num) {
        while( (k > 0) && (stack[stack.length-1] > c)) {
            stack.pop();
            k--;
        }
        stack.push(c);
    }

    while(k>0) {
        stack.pop();
        k--;
    }

    let i = 0;
    while(i < stack.length) {
        if(stack[i] == 0) i++;
        else break;
    }

    return stack.slice(i).join('') || "0";
};