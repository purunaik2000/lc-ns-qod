/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let map = new Map();
    for(let e of nums) map.set(e, (map.get(e)||0)+1);
    let res = [];
    while(map.size) {
        let temp = [];
        for(let [k, v] of map) {
            temp.push(k);
            if(v==1) map.delete(k);
            else map.set(k, v-1);
        }
        res.push(temp);
    }
    return res;
};