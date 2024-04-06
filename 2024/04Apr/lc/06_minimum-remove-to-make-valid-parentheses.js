/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [], count = 0;

    for(let i=0;i<s.length;i++) {
        if(s[i] == '(') stack.push(i);
        else if(s[i] == ')') {
            if(stack.length && (s[stack[stack.length-1]] == '(')) stack.pop();
            else stack.push(i);
        }
    }

    const set = new Set(stack);

    let res = '';

    for(let i=0;i<s.length;i++) if(!set.has(i)) res += s[i];

    return res;
};