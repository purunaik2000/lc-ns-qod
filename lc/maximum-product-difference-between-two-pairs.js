/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max1 = -Infinity, max2 = -Infinity;
    let min1 = Infinity, min2 = Infinity;

    for(let e of nums) {
        if(e > max1) {
            max2 = max1;
            max1 = e;
        }else if(e>max2) {
            max2 = e;
        }
        if(e < min1) {
            min2 = min1;
            min1 = e;
        }else if(e < min2) {
            min2 = e;
        }
    }

    return (max1*max2) - (min1*min2);
};