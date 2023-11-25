/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const n = nums.length;
    const sum = nums.reduce((a,b)=>a+=b);
    let left = 0;
    const res = [];
    for(let i=0;i<n;i++) {
        const e = nums[i];
        res.push(e*i-left+sum-left-e*(n-i));
        left += e;
    }
    return res;
};