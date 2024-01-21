/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    if(n==1) return nums[0];
    const temp = new Array(n);
    temp[0] = nums[0];
    temp[1] = Math.max(nums[0], nums[1]);
    for(let i=2;i<n;i++) {
        // Select the current house
        const select = temp[i-2] + nums[i];

        // Not select
        const notSelect = temp[i-1];

        temp[i] = Math.max(select, notSelect);
    }

    return temp[n-1];
};