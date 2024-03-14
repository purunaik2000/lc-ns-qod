/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let res = 0, sum = 0;
    const map = new Map([[0, 1]]);

    for(let e of nums) {
        sum += e;
        if(map.has(sum - goal)) res += map.get(sum - goal);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return res;
};