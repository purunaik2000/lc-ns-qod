/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const winner = new Set();
    const looser = new Map();
    for(let [w, l] of matches) {
        winner.add(w);
        looser.set(l, (looser.get(l) || 0) + 1);
    }
    let res = [[], []];
    for(let w of winner) {
        if(!looser.has(w)) res[0].push(w);
    }
    for(let [l, f] of looser) {
        if(f==1) res[1].push(l);
    }

    res[0].sort((a,b)=>a-b);
    res[1].sort((a,b)=>a-b);

    return res;
};