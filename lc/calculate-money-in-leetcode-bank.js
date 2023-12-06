/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let cur = 1, sum = 0;
    while(n) {
        if(n>=7){
            sum += cur*7 + 21;
            n -= 7;
            cur++;
        }else {
            while(--n) {
                sum += cur++;
            }
            sum += cur;
        }
    }
    return sum;
};