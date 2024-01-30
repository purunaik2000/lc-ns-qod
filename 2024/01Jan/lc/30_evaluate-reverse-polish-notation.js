/**
 * @param {string[]} tokens
 * @return {number}
 */
function cal(a, b, sign){
    switch(sign){
        case '*' : return a*b;
        case '/' : return parseInt(a/b);
        case '+' : return a+b;
        case '-' : return a-b;
    }
}

var evalRPN = function(tokens) {
    let stack = [];
    for(let e of tokens){
        if(isNaN(e)){
            let temp = stack.pop();
            stack.push(cal(stack.pop(), temp, e));
        }else stack.push(Number(e));
    }
    return stack[0];
};