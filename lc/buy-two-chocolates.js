/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let min1 = 101, min2 = 101;
    for(let e of prices) {
        if(min1>e) {
            min2 = min1;
            min1 = e;
        }else if(min2>e) min2 = e;
    }
    return money>=min1+min2 ? money-min1-min2 : money;
};