/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let max = 0;
    const set = new Set(nums);
    for(let e of nums) if(set.has(-e)) max = Math.max(max, Math.abs(e));

    if(max == 0) return -1;
    return max;
};