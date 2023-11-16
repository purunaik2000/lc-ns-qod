/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let len = nums[0].length;
    let min = 0;
    let set = new Set(nums.map(x=>parseInt(x, 2)));
    while(true) {
        if(!set.has(min)) return min.toString(2).padStart(len, '0');
        min++;
    }
};