/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length != word2.length) return false;

    let map1 = new Map();
    let map2 = new Map();

    for(let c of word1) map1.set(c, (map1.get(c)||0)+1);
    for(let c of word2) {
        if(!map1.has(c)) return false;
        map2.set(c, (map2.get(c)||0)+1);
    }

    if(map1.size != map2.size) return false;

    let temp1 = Array.from(map1.values()).sort((a,b)=>a-b);
    let temp2 = Array.from(map2.values()).sort((a,b)=>a-b);

    for(let i=0;i<temp1.length;i++) {
        if(temp1[i] != temp2[i]) return false;
    }

    return true;
};