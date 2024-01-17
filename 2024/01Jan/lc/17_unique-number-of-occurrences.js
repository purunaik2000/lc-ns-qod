/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for(let e of arr) map.set(e, (map.get(e)||0)+1);
    const set = new Set(map.values());
    return set.size == map.size;
};