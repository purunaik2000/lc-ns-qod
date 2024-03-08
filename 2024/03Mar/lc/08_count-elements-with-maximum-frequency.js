/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const map = new Map();
    for(let num of nums) map.set(num, (map.get(num) || 0) + 1);

    let res = 0, max = 0;
    for(let [k, v] of map) {
        if(max == v) res += v;
        else if(max < v) {
            res = v;
            max = v;
        }
    }

    return res;
};