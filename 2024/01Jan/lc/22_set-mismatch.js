/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let set = new Set();
    let ans = [];
    for(let e of nums){
        if(set.has(e)) ans.push(e);
        else set.add(e);
    }
    for(let i=1;i<=nums.length;i++){
        if(!set.has(i)){
            ans.push(i);
            break;
        }
    }
    return ans;
};