/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let max = 0, start = 0, i = 0;
    for (let i = 0; i < s.length; i++) {
        maxCost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
        while (maxCost < 0) maxCost += Math.abs(s.charCodeAt(start) - t.charCodeAt(start++));
        max = Math.max(max, i - start + 1);
    }
    return max;
};