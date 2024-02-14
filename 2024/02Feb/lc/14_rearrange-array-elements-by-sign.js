/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const res = new Array(nums.length);
    let i = 0, j = 1;
    
    for(let e of nums) {
        if(e<0) {
            res[j] = e;
            j += 2;
        }else {
            res[i] = e;
            i += 2;
        }
    }

    return res;
};