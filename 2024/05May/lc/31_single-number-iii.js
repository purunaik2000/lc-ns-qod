/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const xor = nums.reduce((a, v) => a^v);
    let res1 = 0, res2 = 0;
    let high = 1;
    while(!(xor&high)) high *= 2;
    for(let e of nums) high&e ? res1 ^= e : res2 ^= e;
    return [res1, res2];
};