/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    let counter = {};
    for (letter of s) {
        counter[letter] = (counter[letter] || 0) + 1;
    }
    for (items of t) {
        if (!counter[items]) {
            return false;
        }
        counter[items] -= 1;
    }
    return true;
};