/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    const max = Math.max(...nums);
    const temp = new Array(max+2).fill(0);
    let res = 0;
    for(const e of nums) temp[e]++;
    for(let i=0;i<=max;i++) {
        if(temp[i] > 1) {
            res += temp[i] - 1;
            temp[i+1] += temp[i] - 1;
        }
    }
    if(temp[max+1] > 1) res += temp[max+1]*(temp[max+1] - 1)/2;
    return res;
};