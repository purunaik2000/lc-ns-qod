/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let ans = [1];
    for(let i=0;i<nums.length-1;i++){
        ans.push(nums[i]*ans[i]);
    }
    let r = nums[nums.length-1];
    for(let i=nums.length-2;i>=0;i--){
        ans[i]*=r;
        r*=nums[i];
    }
    return ans;
};