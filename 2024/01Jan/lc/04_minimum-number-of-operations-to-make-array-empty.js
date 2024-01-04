/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let map = new Map(), count = 0;
    for(let e of nums) map.set(e, (map.get(e)||0) + 1);
    for(let [k, v] of map) {
        if(v==1) return -1;
        let x = v%3;
        if(x==0) count += v/3;
        if(x==1) count += (v-4)/3 + 2;
        if(x==2) count += (v-2)/3 + 1;
    }
    return count;
};