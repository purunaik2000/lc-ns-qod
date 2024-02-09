/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let ans = [], cur = [], n=nums.length, visited = new Array(n).fill(false), map = new Map();
    nums.sort((a,b)=>a-b);
    function findSubset(i){
        while(i<n){
            if(!cur.length){
                if(!visited[i]){
                    cur.push(nums[i]);
                    visited[i] = true;
                    findSubset(i+1);
                    if(cur.length>ans.length) ans = [...cur];
                    cur.pop();
                }
            }else if((!map.has(nums[i]) || map.get(nums[i])<cur.length) && !(nums[i]%cur[cur.length-1])){
                map.set(nums[i], cur.length)
                cur.push(nums[i]);
                visited[i] = true;
                findSubset(i+1);
                if(cur.length>ans.length) ans = [...cur];
                cur.pop();
            }
            i++;
        }
    }
    if(nums[0]==1){
        findSubset(1);
        ans.unshift(nums[0]);
    }else findSubset(0);
    return ans;
};