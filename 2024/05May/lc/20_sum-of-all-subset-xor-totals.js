/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const res = [0];
    for(let e of nums) {
        const size = res.length;
        for(let i=0;i<size;i++) res.push(res[i]^e);
    }
    return res.reduce((a, v) => a + v);
};