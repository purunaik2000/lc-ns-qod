/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let map = new Map(), sum = 0;
    for(let c of chars) map.set(c, (map.get(c) || 0) + 1);
    for(let word of words) {
        let temp = new Map();
        for(let c of word) {
            temp.set(c, (temp.get(c) || 0) + 1);
        }
        let possible = true;
        for(let [k, v] of temp) {
            if(!map.has(k) || map.get(k) < v) {
                possible = false;
                break;
            }
        }
        if(possible) sum += word.length;
    }
    return sum;
};