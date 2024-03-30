/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    let map = new Map();
    let l=0, min=0;
    let count=0;
    for(let i=0;i<nums.length;i++){
        map.set(nums[i], i);
        if(map.size>k){
            while(map.size!=k){
                map.delete(nums[min]);
                l=min+1;
            }
        }
        while(map.get(nums[min])!=min) min++;
        if(map.size==k) count+=min-l+1;
    }
    return count;
};