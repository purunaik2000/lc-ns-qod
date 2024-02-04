/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    for(let c of t) map1.set(c, (map1.get(c) || 0) + 1);
    let res = [-Infinity, Infinity];
    let l = 0;
    let count = 0;
    for(let r=0;r<s.length;r++) {
        map2.set(s[r], (map2.get(s[r]) || 0) + 1);
        if(map1.has(s[r]) && (map1.get(s[r]) == map2.get(s[r]))) count++;
        while(l<=r) {
            if(!map1.has(s[l])) {
                map2.set(s[l], map2.get(s[l]) - 1);
                l++;
            }else if(map1.get(s[l]) < map2.get(s[l])) {
                map2.set(s[l], map2.get(s[l]) - 1);
                l++;
            }else break;
        }
        if(count == map1.size) {
            if((res[1] - res[0]) > r-l) res = [l, r];
        }
    }

    if(res[1] == Infinity) return "";
    return s.substring(res[0], res[1]+1);
};