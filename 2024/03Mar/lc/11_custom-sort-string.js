/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const freq = new Map();
    for(let c of s) freq.set(c, (freq.get(c) || 0) + 1);
    let res = "";
    for(let c of order) {
        let f = freq.get(c);
        while(f--) res += c;
        freq.delete(c);
    }

    for(let [c, f] of freq) {
        while(f--) res += c;
    }

    return res;
};