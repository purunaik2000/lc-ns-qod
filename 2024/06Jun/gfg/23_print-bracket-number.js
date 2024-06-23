class Solution {
    bracketNumbers(str) {
        // code here
        const stack = [];
        const res = [];
        let last = 0;
        for(const c of str) {
            if(c == "(") {
                stack.push(++last);
                res.push(last);
            }else if(c == ")") res.push(stack.pop());
        }
        return res;
    }
}