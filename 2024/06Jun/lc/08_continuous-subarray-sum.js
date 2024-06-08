/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    const map = new Map([[0, -1]]);
    let sum = 0;
    for(let i=0;i<nums.length;i++) {
        sum = (sum + nums[i]) % k;
        if(map.has(sum)) {
            if(map.get(sum) < i-1) return true;
        }else map.set(sum, i);
    }
    return false;
};