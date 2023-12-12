/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max1 = 0, max2 = 0;
    for(let e of nums) {
        if(e>max1) {
            max2 = max1;
            max1 = e;
        }else if(e>max2) max2 = e;
    }
    return (max1-1)*(max2-1);
};