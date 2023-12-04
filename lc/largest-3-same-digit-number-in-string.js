/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let res = '', last = 'a', count = 0;
    for(let c of num) {
        if(c==last) {
            count++;
            if(count == 3) {
                if(last>res) res = last;
            }
        }else {
            last = c;
            count = 1;
        }
    }
    return res+res+res;
};