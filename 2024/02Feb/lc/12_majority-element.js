/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = new Map(), n = nums.length;
    for(let e of nums){
        freq.set(e, (freq.get(e)||0)+1);
        if(freq.get(e)>n/2) return e;
    }
};