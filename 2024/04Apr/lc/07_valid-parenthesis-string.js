/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let min = 0, max = 0;
    for(let c of s) {
        if(c == '(') {
            min++;
            max++;
        }else if(c == ')') {
            if(min > 0) min--;
            max--;
        }else {
            if(min > 0) min--;
            max++;
        }
        if(max < 0) return false;
    }

    return min == 0;
};