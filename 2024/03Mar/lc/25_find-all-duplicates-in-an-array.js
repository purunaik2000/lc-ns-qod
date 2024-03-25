/**
 * @param {number[]} nums
 * @return {number[]}
 */

var swap = function(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// var findDuplicates = function(nums) {
//     let arr = [];
//     let i =0;
//     while(i<nums.length){
//         if(nums[nums[i]-1]!=nums[i]) swap(nums, i, nums[i]-1);
//         else i++;
//     }
//     i=0;
//     while(i<nums.length){
//         if(nums[i]!=i+1) arr.push(nums[i]);
//         i++;
//     }
//     return arr;
// };

// We can solve it in one loop but number of comparisions are high that's why taking extra time:-
var findDuplicates = function(nums) {
    let arr = [];
    let i =0;
    while(i<nums.length){
        if(nums[i]>0){
            nums[i]=-nums[i];
            if(nums[-nums[i]-1]==nums[i] && nums[i]!=-i-1){
                arr.push(-nums[i]);
                i++;
            }
            else{
                swap(nums, i, -nums[i]-1);
            }
        }else i++;
    }
    return arr;
};