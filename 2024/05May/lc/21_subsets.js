/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [[]];
    for(let e of nums){
        let size = ans.length;
        while(size--) ans.push(ans[size].concat([e]));
    }
    return ans;
};