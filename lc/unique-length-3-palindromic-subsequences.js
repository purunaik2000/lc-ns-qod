/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const map = new Map();
    for(let i=0;i<s.length;i++) {
        if(!map.has(s[i])) map.set(s[i], [i, i]);
        else map.get(s[i])[1] = i;
    }
    const set = new Set();
    for(let i=1;i<s.length-1;i++) {
        for(let [c, [min, max]] of map) {
            if(min<i && max>i) set.add(`${s[i]}${c}`);
        }
    }
    return set.size;
};