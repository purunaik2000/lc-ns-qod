/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    for(let c of s) {
        map1.set(c, (map1.get(c)||0)+1)
    }
    for(let c of t) {
        map2.set(c, (map2.get(c)||0)+1)
    }

    let count = 0;
    let set = new Set([...map1.keys(), ...map2.keys()]);
    for(let c of set) {
        count += Math.abs((map1.get(c) || 0) - (map2.get(c) || 0));
    }
    return count/2;
};