/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i=0; j=nums.length-1; k=0;
    while(k<=j){
        if(nums[k]==0){
            swap(i,k);
            i++;
            k++;
        }
        else if(nums[k]==2){
            swap(j,k);
            j--;
        }else k++;
    }
    function swap(i,j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};