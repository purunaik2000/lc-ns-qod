/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    const map = new Map();
    for(let e of nums) {
        let rev = e.toString().split('').reverse().join('');
        map.set(e-rev, (map.get(e-rev) || 0) + 1);
    }
    let count = 0;
    for(let [k, v]  of map) {
        count += v*(v-1)/2;
        count %= 1e9+7;
    }
    return count;
};