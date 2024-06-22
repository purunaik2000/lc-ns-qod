/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let set = new Set();
    let min=-1;
    let l=0;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]&1){
            if(set.size==k){
                set.delete(min);
                l=min+1;
                while(nums[++min]%2==0 && min<nums.length);
            }
            set.add(i);
            if(min==-1) min=i;
        }
        if(set.size==k){
            count+=min-l+1;
        }
    }
    return count;
};

// var numberOfSubarrays = function(nums, k) {
//     let odds = 0;
//     let min = 0;
//     let l=0;
//     let count = 0;
//     while(nums[min]%2==0 && min<nums.length) min++;
//     if(min==nums.length) return 0;
//     odds++;
//     for(let i=min+1;i<nums.length;i++){
//         if(odds==k){
//             if(nums[i]&1){
//                 l=min+1;
//                 min++;
//                 odds--;
//                 while(nums[min]&1) min++;
//             }
//         }
//         if(nums[i]&1) odds++;
//         if(odds==k) count+=min-l+1;
//     }
//     return count;
// };












