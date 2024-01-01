/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

class Solution {
    canPair(nums,k){
        //code here
        const map = new Map();
        for(let e of nums) {
            let x = e%k;
            if(map.get(x)) map.set(x, map.get(x)-1);
            else map.set((k-x)%k, 1);
        }
        for(let [_, v] of map) if(v) return false;
        return true;
    }
}