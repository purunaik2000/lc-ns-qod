/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let q = [];
    let map = new Map();
    for(let i=0;i<s.length;i++) {
        const c = s[i];
        if(!map.has(c)) {
            map.set(c, 1);
            q.push([c, i]);
        }else map.set(c, map.get(c) + 1);
    }

    for(let [c, i] of q) {
        if(map.get(c) == 1) return i;
    }

    return -1;
};