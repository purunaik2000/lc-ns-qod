/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map([[0, -1]]);
    let cur = 0, max = 0;

    for(let i=0;i<nums.length;i++) {
        cur += nums[i] || -1;
        if(map.has(cur)) max = Math.max(max, i - map.get(cur));
        else map.set(cur, i);
    }

    return max;
};