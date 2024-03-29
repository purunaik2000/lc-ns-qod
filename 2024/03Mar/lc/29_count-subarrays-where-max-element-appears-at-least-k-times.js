/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max = nums[0], pos = [], end = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > max) {
            max = nums[i];
            pos[0] = i;
            end = 1;
        }else if(nums[i] == max) {
            pos[end] = i;
            end++;
        }
    }

    if(end < k) return 0;

    let res = (nums.length - pos[k-1])*(pos[0]+1);
    
    for(let i=k;i<end;i++) {
        res += (nums.length-pos[i])*(pos[i-k+1] - pos[i-k]);
    }

    return res;
};