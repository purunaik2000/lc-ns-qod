/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let ans = [], n = nums.length, r , c, maxColTraversal = 0, maxColLen=0;
    for(let i=0;i<n;i++){
        maxColLen = Math.max(maxColLen, nums[i].length);
        maxColTraversal = Math.max(maxColTraversal, nums[i].length-(n-i-1));
    }
    for(let i=0;i<n;i++){
        r = i, c = 0;
        while(r>=0 && c<maxColLen){
            if(c<nums[r].length) ans.push(nums[r][c]);
            r--;
            c++;
        }
    }
    for(let i=1;i<maxColTraversal;i++){
        r = n-1, c = i;
        while(r>=0 && c<maxColLen){
            if(r>=0 && c<nums[r].length) ans.push(nums[r][c]);
            r--;
            c++;
        }
    }
    return ans;
};